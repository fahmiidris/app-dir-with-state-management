import * as React from 'react';

import Card from '@/app/(sites)/_components/card';

import { addToCart } from '@/data/cart';
import { getProducts } from '@/data/products';

export default async function Page() {
    const products = await getProducts();

    const addToCartAction = async (productId: number) => {
        'use server';
        return await addToCart(productId);
    };

    return (
        <div className="container py-12">
            <h2 className="text-xl font-bold text-gray-900">Products</h2>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <Card key={product.id} product={product} addToCartAction={addToCartAction} />
                ))}
            </div>
        </div>
    );
}
