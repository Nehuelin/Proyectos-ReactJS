import { createContext, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    
    const addItem = (product, quantity) => {
        const newProduct = { ...product, quantity };
        setCart([...cart, newProduct]);
    }

    const removeItem = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={[cart, setCart, addItem, removeItem, clearCart]}>
            {children}
        </CartContext.Provider>
    )
}