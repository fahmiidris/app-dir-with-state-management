'use client';

import * as React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { useCart } from '@/app/(sites)/_providers/cart';

import formatMoney from '@/utils/money';

import type { TCart } from '@/types/cart.type';
import type { TProduct } from '@/types/product.type';

type TProductProps = {
    product: TProduct;
    addToCartAction: (productId: number) => Promise<TCart>;
};

export default function Card({ product, addToCartAction }: TProductProps) {
    const setCart = useCart()((state) => state.setCart);

    return (
        <div>
            <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <Image
                        src={product.image}
                        alt=""
                        className="h-full w-full object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                        priority
                        fill
                    />
                </div>

                <div className="relative mt-4">
                    <Link href={`/${product.id}`} className="inline-flex">
                        <h3 className="text-sm font-medium text-gray-900 hover:text-gray-500">{product.name}</h3>
                    </Link>

                    <p className="mt-2 line-clamp-2 text-sm text-gray-500">{product.description}</p>
                </div>

                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
                    <p className="relative text-lg font-semibold text-white">{formatMoney(product.price)}</p>
                </div>
            </div>

            <div className="mt-6">
                <button
                    type="button"
                    onClick={async () => setCart(await addToCartAction(product.id))}
                    className="relative flex w-full items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                    Add to bag
                </button>
            </div>
        </div>
    );
}
