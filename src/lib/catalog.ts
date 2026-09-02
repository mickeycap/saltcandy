/**
 * Salty Sour Suckers — catalog layer.
 *
 * This is the ONLY module that knows where product data comes from. Today it
 * resolves against the mock documents below; tomorrow the bodies of
 * `getProducts()` / `getProduct()` are swapped for Shopify Storefront API
 * GraphQL calls without a single component changing.
 *
 * The types deliberately mirror the Storefront schema: `id` is a product GID,
 * `handle` is the URL handle, and money is `{ amount, currencyCode }` rather
 * than a bare number.
 */

export type CurrencyCode = 'USD'

export type Money = {
  /** Decimal string, exactly as Storefront returns it. */
  amount: string
  currencyCode: CurrencyCode
}

/** Which brand accent a flavour prints in. Maps to tokens in styles.css. */
export type Accent = 'violet' | 'coral' | 'wave' | 'deep-wave'

export type Electrolytes = {
  sodiumMg: number
  potassiumMg: number
  magnesiumMg: number
  sugarG: number
  caloriesKcal: number
}

export type ProductImage = {
  url: string
  altText: string
  width: number
  height: number
}

export type Product = {
  /** Shopify-style global id. */
  id: string
  handle: string
  title: string
  flavor: string
  /** How hard the salt hits, 1–5. */
  salinity: 1 | 2 | 3 | 4 | 5
  blurb: string
  accent: Accent
  image: ProductImage
  price: Money
  compareAtPrice?: Money
  available: boolean
  electrolytes: Electrolytes
  /**
   * Milligrams of caffeine per four-piece serving. `0` rather than optional —
   * the caffeine-free tin is a deliberate product, not a missing value, and the
   * UI renders it without a null check.
   */
  caffeineMg: number
}

const CURRENCY: CurrencyCode = 'USD'

const money = (amount: string): Money => ({ amount, currencyCode: CURRENCY })

/**
 * Mock catalog documents. Shaped exactly like a flattened
 * `products(first: 4) { edges { node { … } } }` response.
 */
const CATALOG: readonly Product[] = [
  {
    id: 'gid://shopify/Product/8100000000001',
    handle: 'sea-salt-citrus',
    title: 'Sea Salt Citrus',
    flavor: 'Sea Salt Citrus',
    salinity: 4,
    blurb:
      'Lemon peel and flaked salt, and nothing to keep you up. The one that tastes like the air on a harbour wall — and the one you can take at ten at night.',
    accent: 'violet',
    image: {
      url: '/img/tin-sea-salt-citrus.png',
      altText:
        'Sea Salt Citrus pocket tin, lavender lithograph label with the S-cubed mark: salt crystals, a coral flame and a breaking wave',
      width: 900,
      height: 900,
    },
    price: money('12.00'),
    available: true,
    electrolytes: {
      sodiumMg: 380,
      potassiumMg: 210,
      magnesiumMg: 60,
      sugarG: 1,
      caloriesKcal: 15,
    },
    caffeineMg: 0,
  },
  {
    id: 'gid://shopify/Product/8100000000002',
    handle: 'coral-grapefruit',
    title: 'Coral Grapefruit',
    flavor: 'Coral Grapefruit',
    salinity: 3,
    blurb:
      'Pink grapefruit with the pith left in, plus 75mg of caffeine from green tea. Bitter edge, long finish, and a push behind it. This is the morning tin.',
    accent: 'coral',
    image: {
      url: '/img/tin-coral-grapefruit.png',
      altText:
        'Coral Grapefruit pocket tin, salmon lithograph label with the S-cubed mark: salt crystals, a coral flame and a breaking wave',
      width: 900,
      height: 900,
    },
    price: money('12.00'),
    compareAtPrice: money('14.00'),
    available: true,
    electrolytes: {
      sodiumMg: 380,
      potassiumMg: 210,
      magnesiumMg: 60,
      sugarG: 1,
      caloriesKcal: 15,
    },
    caffeineMg: 75,
  },
]

/**
 * All tins, in shelf order.
 *
 * Shopify swap: `storefront(PRODUCTS_QUERY)` → map edges to `Product`.
 */
export async function getProducts(): Promise<Product[]> {
  return CATALOG.map((product) => ({ ...product }))
}

/**
 * A single tin by URL handle.
 *
 * Shopify swap: `storefront(PRODUCT_BY_HANDLE_QUERY, { handle })`.
 */
export async function getProduct(handle: string): Promise<Product | null> {
  const found = CATALOG.find((product) => product.handle === handle)
  return found ? { ...found } : null
}

const formatters = new Map<CurrencyCode, Intl.NumberFormat>()

/** Render Storefront money the way the storefront should read it. */
export function formatMoney(value: Money): string {
  let formatter = formatters.get(value.currencyCode)
  if (!formatter) {
    formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: value.currencyCode,
      minimumFractionDigits: Number(value.amount) % 1 === 0 ? 0 : 2,
    })
    formatters.set(value.currencyCode, formatter)
  }
  return formatter.format(Number(value.amount))
}

/* ============================================================================
 * Shopify swap notes
 * ----------------------------------------------------------------------------
 * Nothing outside this module knows the catalog is mocked. To go headless:
 *
 * 1. Add a `storefront(query, variables)` helper that POSTs to
 *    `https://{shop}.myshopify.com/api/{version}/graphql.json` with the
 *    `X-Shopify-Storefront-Access-Token` header.
 *
 * 2. Replace the body of `getProducts()` with a `products(first: 8)` query and
 *    map `edges[].node` onto `Product`. The field names already line up:
 *    `id`, `handle`, `title`, `priceRange.minVariantPrice` → `price`,
 *    `compareAtPriceRange.minVariantPrice` → `compareAtPrice`,
 *    `availableForSale` → `available`. The brand-specific fields
 *    (`flavor`, `salinity`, `accent`, `blurb`, `electrolytes`, `caffeineMg`)
 *    come back as
 *    metafields — read them under a `salty_sour_suckers` namespace and parse.
 *
 * 3. Replace the body of `getProduct()` with `productByHandle(handle: $handle)`,
 *    returning `null` when the node is null.
 *
 * 4. Cart lives beside this module, not inside components. Persist the cart id
 *    under a single key in `localStorage` (e.g. `salty-sour-suckers/cart-id`), create
 *    it lazily with `cartCreate`, add lines with `cartLinesAdd`, and fall back
 *    to a fresh `cartCreate` whenever a stored id resolves to null (carts
 *    expire). The card's "Add tin" button is the only call site.
 *
 * `formatMoney()` already takes Storefront-shaped money, so it needs no change.
 * ========================================================================== */
