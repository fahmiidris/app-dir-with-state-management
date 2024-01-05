import * as React from 'react';

import Link from 'next/link';
import { notFound } from 'next/navigation';

import Card from '@/app/(sites)/_components/card';

import { addToCart } from '@/data/cart';
import { getProductById } from '@/data/products';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

type TPageProps = {
    params: { id: string };
};

export default async function Page({ params }: TPageProps) {
    const product = await getProductById(Number(params.id));

    if (!product) {
        notFound();
    }

    const addToCartAction = async (productId: number) => {
        'use server';
        return await addToCart(productId);
    };

    return (
        <div className="container py-12">
            <Link href="/" className="inline-flex items-center justify-center gap-4 px-3 py-2 text-sm font-semibold">
                <ArrowLeftIcon className="h-4 w-4 text-gray-500" aria-hidden="true" />
                <span>Back</span>
            </Link>

            <div className="mt-4 flex flex-col gap-4">
                <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>

                <Card product={product} addToCartAction={addToCartAction} />
            </div>
        </div>
    );
}
