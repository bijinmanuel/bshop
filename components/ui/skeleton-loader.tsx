import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Link from "next/link";

// Product Page Skeleton Component
export default function ProductPageSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Skeleton */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-1 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-1 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section Skeleton */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-200 rounded-md animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Product Info Skeleton */}
          <div className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-5 w-5 bg-gray-200 rounded animate-pulse"
                  ></div>
                ))}
              </div>
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Price */}
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>

            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Related Products Skeleton */}
        <div className="mt-16">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-5 bg-gray-200 rounded animate-pulse w-20"></div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductListPageSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">All Products</h1>
        <p className="text-lg text-gray-600">
          Discover our complete collection of premium products
        </p>
      </div>

      {/* Loading skeleton */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-48 h-10 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-full sm:w-48 h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="flex justify-between items-center">
                <div className="h-5 bg-gray-200 rounded animate-pulse w-20"></div>
                <div className="h-8 bg-gray-200 rounded animate-pulse w-24"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
