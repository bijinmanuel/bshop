"use client"

import Link from "next/link";
import { ShoppingCart, Menu, X} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart"
import { useState } from "react";

export function Header() {
    const itemCount = useCartStore(state => state.totalQuantity);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
    ]

    return (
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Shop</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/cart">
                <Button
                  variant="outline"
                  size="sm"
                  className="relative hover:bg-gray-100 border-gray-300 ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                >
                  <ShoppingCart className="h-4 w-4" />
                  {itemCount > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs text-white bg-red-500 rounded-full"
                    >
                      {itemCount}
                    </Badge>
                  )}
                </Button>
              </Link>
              <Button
                className="md:hidden"
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="px-4 py-2 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-900 hover:text-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    );
}