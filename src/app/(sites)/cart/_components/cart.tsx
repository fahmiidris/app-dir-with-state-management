'use client';

import * as React from 'react';

import { useCart } from '@/app/(sites)/_providers/cart';

import type { TCart } from '@/types/cart.type';

type TCartProps = {
    clearCartAction: () => Promise<TCart>;
};

export default function Cart({ clearCartAction }: TCartProps) {
    const cart = useCart()((state) => state.cart);
    const setCart = useCart()((state) => state.setCart);

    return (
        <div>
            <pre>{JSON.stringify(cart, null, 2)}</pre>

            <button
                type="button"
                onClick={async () => setCart(await clearCartAction())}
                className="relative flex w-full items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
            >
                Clear cart
            </button>
        </div>
    );
}
