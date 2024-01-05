import * as React from 'react';

import Cart from '@/app/(sites)/cart/_components/cart';

import { clearCart } from '@/data/cart';

export default async function Page() {
    const clearCardAction = async () => {
        'use server';
        return await clearCart();
    };

    return (
        <div className="container py-12">
            <h2 className="text-xl font-bold text-gray-900">Cart</h2>

            <Cart clearCartAction={clearCardAction} />
        </div>
    );
}
