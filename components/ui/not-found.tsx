import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Link from "next/link";


export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto text-center px-4">
        {/* 404 Icon */}
        <div className="text-6xl font-bold text-gray-400 mb-4">404</div>

        {/* Not Found Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Product Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The product you're looking for doesn't exist or may have been removed.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link href="/products">
            <Button className="w-full">Browse All Products</Button>
          </Link>

          <Link href="/">
            <Button variant="outline" className="w-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Homepage
            </Button>
          </Link>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Try searching for what you need or browse our categories
          </p>
        </div>
      </div>
    </div>
  );
}