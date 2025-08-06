import {
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    orderBy,
    where,
    limit,
    QueryConstraint,
    addDoc
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Product } from '@/types/product';

const COLLECTION_NAME = 'products';

export const productService = {
    // Get all products
    async getAllProducts(): Promise<Product[]> {
        try {
            const querySnapshot = await getDocs(
                query(collection(db, COLLECTION_NAME))
            );

            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })) as Product[];
        } catch (error) {
            console.error('Error fetching products:', error);
            throw new Error('Failed to fetch products');
        }
    },

    // Get products by category
    async getProductsByCategory(category: string): Promise<Product[]> {
        try {
            const querySnapshot = await getDocs(
                query(
                    collection(db, COLLECTION_NAME),
                    where('category', '==', category),
                    orderBy('createdAt', 'desc')
                )
            );

            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })) as Product[];
        } catch (error) {
            console.error('Error fetching products by category:', error);
            throw new Error('Failed to fetch products by category');
        }
    },

    // Get single product
    async getProductById(id: string): Promise<Product | null> {
        console.log(id);
        try {
            if (!id) {
                throw new Error('Product ID is required');
            }
            const docRef = doc(db, COLLECTION_NAME, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return {
                    id: docSnap.id,
                    ...docSnap.data()
                } as Product;
            }

            return null;
        } catch (error) {
            console.error('Error fetching product:', error);
            throw new Error('Failed to fetch product');
        }
    },

    // Get featured products (in stock, limited)
    async getFeaturedProducts(limitCount: number = 6): Promise<Product[]> {
        try {
            const querySnapshot = await getDocs(
                query(
                    collection(db, COLLECTION_NAME),
                    where('inStock', '==', true),
                    limit(limitCount)
                )
            );

            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })) as Product[];
        } catch (error) {
            console.error('Error fetching featured products:', error);
            throw new Error('Failed to fetch featured products');
        }
    },

    async addProducts(productsArray: Product[]): Promise<void> {
        try {
            const productsRef = collection(db, COLLECTION_NAME);
            for (const product of productsArray) {
                await addDoc(productsRef, {
                    ...product,
                });
            }
            console.log('Products added successfully');
        } catch (error) {
            console.error('Error adding products:', error);
            throw new Error('Failed to add products');
        }
    }
};