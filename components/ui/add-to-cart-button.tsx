"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useCartStore } from "@/lib/cart";
import AuthModal from "@/components/layout/Authentication";
import useFirebaseAuth from "@/hook/useFirebaseAuth";
import Snackbar from "./snackbar";
import { useSnackbar } from "@/hook/userSnackbar";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

interface SnackbarState {
  isVisible: boolean;
  message: string;
  type: "success" | "error";
}

export function AddToCartButton({
  product,
  className = "",
}: AddToCartButtonProps) {
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const { user, loading } = useFirebaseAuth();
  const [showModal, setShowModal] = useState(false);
  const { snackbar, showSuccess, showError, hideSnackbar } = useSnackbar();

  const handleAddToCart = () => {
    if (user) {
      addItem(product);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
      showSuccess(`${product.name} added to cart!`);
    } else {
      setShowModal(true);
      showError("Failed to add item to cart. Please Login or Register.");
    }
  };

  if (loading)
    return <p className="text-center mt-10">Checking authentication...</p>;
  if (showModal) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return <AuthModal onClose={() => setShowModal(false)} />;
  }

  return (
    <>
      <Button
        onClick={handleAddToCart}
        disabled={!product.inStock || isAdded}
        className={`w-full ${className} `}
        size="lg"
      >
        {isAdded ? (
          <>
            <Check className="h-5 w-5 mr-2 " />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingCart className="h-5 w-5 mr-2" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </>
        )}
      </Button>

      <Snackbar
        message={snackbar.message}
        isVisible={snackbar.isVisible}
        onClose={hideSnackbar}
        type={snackbar.type}
        duration={snackbar.duration}
        position={snackbar.position}
      />
    </>
  );
}
