export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    originalPrice?: number;
    category: string;
    images: string[];
    image: string;
    inStock: boolean;
    featured: boolean;
    rating: number;
    reviewCount: number;
    specifications?: Record<string, string>;
    tags: string[];
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
}