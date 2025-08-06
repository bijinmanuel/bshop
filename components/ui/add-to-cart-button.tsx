"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useCartStore } from "@/lib/cart";
import AuthModal from "@/components/layout/Authentication";
import useFirebaseAuth from "@/hook/useFirebaseAuth";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export function AddToCartButton({
  product,
  className = "",
}: AddToCartButtonProps) {
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const { user, loading } = useFirebaseAuth();
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    if(user){

      addItem(product);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }else{
      setShowModal(true);
    }
  };

  if (loading) return <p className="text-center mt-10">Checking authentication...</p>;

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
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
}
