/* ============================================================
   Shopify Storefront API — Client
   ============================================================ */

import type {
  ShopifyProduct,
  ShopifyCollection,
  ShopifyCart,
  ShopifyImage,
  ShopifyCartLine,
} from "./shopify-types";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_HANDLE,
  GET_ALL_COLLECTIONS,
  GET_COLLECTION_BY_HANDLE,
  CREATE_CART,
  ADD_TO_CART,
  UPDATE_CART_LINE,
  REMOVE_FROM_CART,
  GET_CART,
} from "./shopify-queries";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? "";
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? "";
const API_VERSION = "2025-07";

/** Returns true when Shopify env vars are configured. */
export function isShopifyConfigured(): boolean {
  return Boolean(domain && token);
}

/* ---------- Core fetch ---------- */

interface ShopifyResponse<T> {
  data: T;
  errors?: { message: string }[];
}

async function shopifyFetch<T>({
  query,
  variables = {},
  cache = "force-cache",
  tags,
}: {
  query: string;
  variables?: Record<string, unknown>;
  cache?: RequestCache;
  tags?: string[];
}): Promise<T> {
  if (!isShopifyConfigured()) {
    throw new Error("Shopify is not configured. Set NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN and NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN.");
  }

  const res = await fetch(
    `https://${domain}/api/${API_VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({ query, variables }),
      cache,
      ...(tags ? { next: { tags } } : {}),
    },
  );

  if (!res.ok) {
    throw new Error(`Shopify API error: ${res.status} ${res.statusText}`);
  }

  const json: ShopifyResponse<T> = await res.json();

  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("\n"));
  }

  return json.data;
}

/* ---------- Helpers to reshape edges ---------- */

function flattenEdges<T>(edges: { node: T }[]): T[] {
  return edges.map((e) => e.node);
}

function reshapeProduct(raw: RawProduct): ShopifyProduct {
  return {
    ...raw,
    images: flattenEdges(raw.images.edges),
    variants: flattenEdges(raw.variants.edges),
  };
}

function reshapeCollection(raw: RawCollection): ShopifyCollection {
  return {
    ...raw,
    products: raw.products
      ? flattenEdges(raw.products.edges).map(reshapeProduct)
      : [],
  };
}

function reshapeCart(raw: RawCart): ShopifyCart {
  return {
    ...raw,
    lines: flattenEdges(raw.lines.edges),
  };
}

/* ---------- Raw types (with edges) ---------- */

interface RawProduct extends Omit<ShopifyProduct, "images" | "variants"> {
  images: { edges: { node: ShopifyImage }[] };
  variants: { edges: { node: ShopifyProduct["variants"][number] }[] };
}

interface RawCollection extends Omit<ShopifyCollection, "products"> {
  products?: { edges: { node: RawProduct }[] };
}

interface RawCart extends Omit<ShopifyCart, "lines"> {
  lines: { edges: { node: ShopifyCartLine }[] };
}

/* ---------- Product API ---------- */

export async function getAllProducts(count = 20): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{
    products: { edges: { node: RawProduct }[] };
  }>({
    query: GET_ALL_PRODUCTS,
    variables: { first: count },
    tags: ["products"],
  });
  return flattenEdges(data.products.edges).map(reshapeProduct);
}

export async function getProductByHandle(
  handle: string,
): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<{ product: RawProduct | null }>({
    query: GET_PRODUCT_BY_HANDLE,
    variables: { handle },
    tags: ["products"],
  });
  return data.product ? reshapeProduct(data.product) : null;
}

/* ---------- Collection API ---------- */

export async function getAllCollections(
  count = 20,
): Promise<ShopifyCollection[]> {
  const data = await shopifyFetch<{
    collections: { edges: { node: RawCollection }[] };
  }>({
    query: GET_ALL_COLLECTIONS,
    variables: { first: count },
    tags: ["collections"],
  });
  return flattenEdges(data.collections.edges).map(reshapeCollection);
}

export async function getCollectionByHandle(
  handle: string,
  productCount = 20,
): Promise<ShopifyCollection | null> {
  const data = await shopifyFetch<{ collection: RawCollection | null }>({
    query: GET_COLLECTION_BY_HANDLE,
    variables: { handle, first: productCount },
    tags: ["collections"],
  });
  return data.collection ? reshapeCollection(data.collection) : null;
}

/* ---------- Cart API ---------- */

export async function createCart(
  variantId: string,
  quantity = 1,
): Promise<ShopifyCart> {
  const data = await shopifyFetch<{
    cartCreate: { cart: RawCart; userErrors: { message: string }[] };
  }>({
    query: CREATE_CART,
    variables: {
      input: { lines: [{ merchandiseId: variantId, quantity }] },
    },
    cache: "no-store",
  });

  if (data.cartCreate.userErrors.length) {
    throw new Error(data.cartCreate.userErrors.map((e) => e.message).join("\n"));
  }

  return reshapeCart(data.cartCreate.cart);
}

export async function addToCart(
  cartId: string,
  variantId: string,
  quantity = 1,
): Promise<ShopifyCart> {
  const data = await shopifyFetch<{
    cartLinesAdd: { cart: RawCart; userErrors: { message: string }[] };
  }>({
    query: ADD_TO_CART,
    variables: {
      cartId,
      lines: [{ merchandiseId: variantId, quantity }],
    },
    cache: "no-store",
  });

  if (data.cartLinesAdd.userErrors.length) {
    throw new Error(
      data.cartLinesAdd.userErrors.map((e) => e.message).join("\n"),
    );
  }

  return reshapeCart(data.cartLinesAdd.cart);
}

export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number,
): Promise<ShopifyCart> {
  const data = await shopifyFetch<{
    cartLinesUpdate: { cart: RawCart; userErrors: { message: string }[] };
  }>({
    query: UPDATE_CART_LINE,
    variables: {
      cartId,
      lines: [{ id: lineId, quantity }],
    },
    cache: "no-store",
  });

  if (data.cartLinesUpdate.userErrors.length) {
    throw new Error(
      data.cartLinesUpdate.userErrors.map((e) => e.message).join("\n"),
    );
  }

  return reshapeCart(data.cartLinesUpdate.cart);
}

export async function removeFromCart(
  cartId: string,
  lineIds: string[],
): Promise<ShopifyCart> {
  const data = await shopifyFetch<{
    cartLinesRemove: { cart: RawCart; userErrors: { message: string }[] };
  }>({
    query: REMOVE_FROM_CART,
    variables: { cartId, lineIds },
    cache: "no-store",
  });

  if (data.cartLinesRemove.userErrors.length) {
    throw new Error(
      data.cartLinesRemove.userErrors.map((e) => e.message).join("\n"),
    );
  }

  return reshapeCart(data.cartLinesRemove.cart);
}

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  const data = await shopifyFetch<{ cart: RawCart | null }>({
    query: GET_CART,
    variables: { cartId },
    cache: "no-store",
  });
  return data.cart ? reshapeCart(data.cart) : null;
}

/* ---------- Price formatting ---------- */

export function formatPrice(amount: string, currencyCode = "INR"): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(parseFloat(amount));
}
