"use client";

import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface UIState {
  // Mobile Navigation
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;

  // Reservation Modal
  reservationModalOpen: boolean;
  setReservationModalOpen: (open: boolean) => void;

  // Cart Sheet
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
    cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  mobileNavOpen: false,
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),

  reservationModalOpen: false,
  setReservationModalOpen: (open) =>
    set({ reservationModalOpen: open }),

  cartOpen: false,
  setCartOpen: (open) => set({ cartOpen: open }),
  cartItems: [],

  addToCart: (item) =>
    set((state) => {
      const existing = state.cartItems.find((c) => c.id === item.id);
      if (existing) {
        return {
          cartItems: state.cartItems.map((c) =>
            c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((c) => c.id !== id),
    })),

  updateQuantity: (id, delta) =>
    set((state) => {
      const updated = state.cartItems
        .map((c) => (c.id === id ? { ...c, quantity: c.quantity + delta } : c))
        .filter((c) => c.quantity > 0);
      return { cartItems: updated };
    }),

  clearCart: () => set({ cartItems: [] }),

}));