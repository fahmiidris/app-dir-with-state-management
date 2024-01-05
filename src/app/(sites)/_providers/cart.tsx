'use client';

import * as React from 'react';

import { create } from 'zustand';

import type { TCart } from '@/types/cart.type';

type TCreateStore = {
    cart: TCart;
    setCart: (cart: TCart) => void;
};

type TCardProviderProps = React.PropsWithChildren<{
    cart: TCart;
}>;

const createStore = (cart: TCart) => {
    return create<TCreateStore>((set) => ({
        cart,
        setCart: (cart) => set({ cart }),
    }));
};

const CartContext = React.createContext<ReturnType<typeof createStore> | null>(null);

const CardProvider = ({ children, cart }: TCardProviderProps) => {
    const [store] = React.useState(() => createStore(cart));
    return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    if (!CartContext) throw new Error('useCart must be used within a CartProvider');
    return React.useContext(CartContext)!;
};

export default CardProvider;
