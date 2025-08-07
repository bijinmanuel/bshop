"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, CartItem, } from "@/types/product";
import { removeCartItemFromFirebase, syncCartToFirebase, updateItemQuantityInFirebase } from "@/services/cartServices";
import { Snackbar } from "@/components/ui/snackbar";

interface CartState {
    items: CartItem[];
    totalPrice: number;
    totalQuantity: number;
}

interface CartStore extends CartState {
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    updateItemQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            totalPrice: 0,
            totalQuantity: 0,

            addItem: (product: Product) => {
                const { items } = get();
                const existingItem = items.find(item => item.product.id === product.id);

                if (existingItem) {
                    set(state => ({
                        items: state.items.map(item =>
                            item.product.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                        totalPrice: state.totalPrice + product.price,
                        totalQuantity: state.totalQuantity + 1
                    }));
                } else {
                    set(state => ({
                        items: [...state.items, { product, quantity: 1 }],
                        totalPrice: state.totalPrice + product.price,
                        totalQuantity: state.totalQuantity + 1
                    }));
                }

                try {
                    syncCartToFirebase(get());
                } catch (err) {
                    console.error('Error syncing to Firebase:', err);
                }
            },

            removeItem: (productId: string) => {
                const { items } = get();
                const item = items.find(item => item.product.id === productId);

                if (item) {
                    set(state => ({
                        items: state.items.filter(item => item.product.id !== productId),
                        totalPrice: state.totalPrice - (item.product.price * item.quantity),
                        totalQuantity: state.totalQuantity - item.quantity
                    }));
                }

                try {
                    removeCartItemFromFirebase(productId);
                } catch (err) {
                    console.error('Error removing item from Firebase:', err);
                }
            },

            updateItemQuantity: (productId: string, quantity: number) => {
                if (quantity <= 0) {
                    get().removeItem(productId);
                    return;
                }

                const { items } = get();
                const item = items.find(item => item.product.id === productId);

                if (item) {
                    const quantityDiff = quantity - item.quantity;
                    set(state => ({
                        items: state.items.map(item =>
                            item.product.id === productId
                                ? { ...item, quantity }
                                : item
                        ),
                        totalPrice: state.totalPrice + (item.product.price * quantityDiff),
                        totalQuantity: state.totalQuantity + quantityDiff
                    }));
                }

                try {
                    updateItemQuantityInFirebase(productId, quantity);
                } catch (err) {
                    console.error('Error updating item quantity in Firebase:', err);
                }
            },

            clearCart: () => {
                set({ items: [], totalPrice: 0, totalQuantity: 0 });
            }
        }),
        {
            name: 'cart-storage'
        }
    )
);