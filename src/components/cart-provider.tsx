"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ShopifyCart } from "@/lib/shopify-types";
import {
  createCart as apiCreateCart,
  addToCart as apiAddToCart,
  updateCartLine as apiUpdateCartLine,
  removeFromCart as apiRemoveFromCart,
  getCart as apiGetCart,
  isShopifyConfigured,
} from "@/lib/shopify";

interface CartContextValue {
  cart: ShopifyCart | null;
  cartCount: number;
  isOpen: boolean;
  isLoading: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (variantId: string, quantity?: number) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
}

const CartContext = createContext<CartContextValue | null>(null);

const CART_ID_KEY = "delaara_cart_id";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Restore cart from localStorage on mount
  useEffect(() => {
    if (!isShopifyConfigured()) return;

    const savedCartId = localStorage.getItem(CART_ID_KEY);
    if (savedCartId) {
      apiGetCart(savedCartId).then((existingCart) => {
        if (existingCart && existingCart.totalQuantity > 0) {
          setCart(existingCart);
        } else {
          // Cart expired or empty - clear stored ID
          localStorage.removeItem(CART_ID_KEY);
        }
      }).catch(() => {
        localStorage.removeItem(CART_ID_KEY);
      });
    }
  }, []);

  // Save cart ID whenever it changes
  useEffect(() => {
    if (cart?.id) {
      localStorage.setItem(CART_ID_KEY, cart.id);
    }
  }, [cart?.id]);

  const addToCart = useCallback(
    async (variantId: string, quantity = 1) => {
      if (!isShopifyConfigured()) {
        // Demo mode - just open the drawer with a message
        setIsOpen(true);
        return;
      }

      setIsLoading(true);
      try {
        let updatedCart: ShopifyCart;
        if (cart?.id) {
          updatedCart = await apiAddToCart(cart.id, variantId, quantity);
        } else {
          updatedCart = await apiCreateCart(variantId, quantity);
        }
        setCart(updatedCart);
        setIsOpen(true);
      } catch (error) {
        console.error("Failed to add to cart:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [cart?.id],
  );

  const updateQuantity = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart?.id || !isShopifyConfigured()) return;
      setIsLoading(true);
      try {
        const updatedCart = await apiUpdateCartLine(cart.id, lineId, quantity);
        setCart(updatedCart);
      } catch (error) {
        console.error("Failed to update quantity:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [cart?.id],
  );

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cart?.id || !isShopifyConfigured()) return;
      setIsLoading(true);
      try {
        const updatedCart = await apiRemoveFromCart(cart.id, [lineId]);
        setCart(updatedCart);
      } catch (error) {
        console.error("Failed to remove item:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [cart?.id],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      cart,
      cartCount: cart?.totalQuantity ?? 0,
      isOpen,
      isLoading,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addToCart,
      updateQuantity,
      removeItem,
    }),
    [cart, isOpen, isLoading, addToCart, updateQuantity, removeItem],
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
