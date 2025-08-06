import { useCartStore } from '@/lib/cart';
import { auth, db } from '@/lib/firebase';
import { CartItem, CartState } from '@/types/product';
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

export const getCartRef = () => {
    const user = auth.currentUser;
    if (!user) throw new Error('User not logged in');
    return doc(db, 'carts', user.uid);
};

export const syncCartToFirebase = async (cart: CartState) => { 
    try {
        console.log('Syncing cart to Firebase:', cart.items);
        const { items, totalPrice, totalQuantity } = cart;

        const cartRef = getCartRef();

        const cartData = {
            items,
            totalPrice,
            totalQuantity,
            updatedAt: new Date().toISOString(), // Optional: track last update time
        };

        await setDoc(cartRef, cartData, { merge: true });

        console.log('Cart synced successfully to Firebase');
    } catch (error) {
        console.error('Error syncing cart to Firebase:', error);
    }
};

export const removeCartItemFromFirebase = async (productId: string) => {
    try {
        const cartRef = getCartRef();
        const cartSnap = await getDoc(cartRef);
        const data = cartSnap.data();
        if (!data) return;

        const updatedItems = data.items.filter((item: CartItem) => item.product.id !== productId);
        const updatedTotalPrice = updatedItems.reduce(
            (acc: number, item: CartItem) => acc + item.product.price * item.quantity,
            0
        );
        const updatedTotalQuantity = updatedItems.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);

        await setDoc(cartRef, {
            items: updatedItems,
            totalPrice: updatedTotalPrice,
            totalQuantity: updatedTotalQuantity,
        });
    } catch (err) {
        console.log("Error removing item from cart:", err);
        throw err;
    }
};


export const updateItemQuantityInFirebase = async (
    productId: string,
    newQuantity: number
) => {
    try {
        const cartRef = getCartRef();
        const cartSnap = await getDoc(cartRef);

        if (!cartSnap.exists()) {
            return;
        }

        const cartData = cartSnap.data() as CartState;

        let updatedItems = cartData.items.map(item => {
            if (item.product.id === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        updatedItems = updatedItems.filter(item => item.quantity > 0);

        const totalPrice = updatedItems.reduce(
            (sum, item) => sum + item.product.price * item.quantity,
            0
        );

        const totalQuantity = updatedItems.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

        await setDoc(
            cartRef,
            {
                items: updatedItems,
                totalPrice,
                totalQuantity,
                updatedAt: new Date().toISOString(),
            },
            { merge: true }
        );
    } catch (err) {
        console.error("Failed to update item quantity in Firebase:", err);
    }
};

export const clearCartInFirebase = async () => {
    try {
        const cartRef = getCartRef();

        await setDoc(
            cartRef,
            {
                items: [],
                totalPrice: 0,
                totalQuantity: 0,
                updatedAt: new Date().toISOString(),
            },
            { merge: true }
        );
    } catch (err) {
        console.error("Failed to clear cart in Firebase:", err);
    }
};

export const syncFirebaseCartToLocal = async () => {
  try {

    const cartRef = getCartRef();
    const cartSnap = await getDoc(cartRef);

    if (cartSnap.exists()) {
      const { items, totalPrice, totalQuantity } = cartSnap.data();

      useCartStore.setState({
        items: items || [],
        totalPrice: totalPrice || 0,
        totalQuantity: totalQuantity || 0,
      });
    } else {
      console.log("No cart found in Firebase. Initializing with empty cart.");
      useCartStore.setState({
        items: [],
        totalPrice: 0,
        totalQuantity: 0,
      });
    }
  } catch (error) {
    console.error("Error syncing cart from Firebase:", error);
  }
};