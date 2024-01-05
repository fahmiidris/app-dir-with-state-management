'use client';

import * as React from 'react';

import Link from 'next/link';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

import { useCart } from '@/app/(sites)/_providers/cart';

export default function Navbar() {
    const cart = useCart()((state) => state.cart);

    return (
        <nav className="realtive border-b border-gray-100 bg-white">
            <div className="container flex h-16 items-center justify-end">
                <div>
                    <Link href="/cart" className="item-center flex justify-center gap-2">
                        <ShoppingBagIcon className="size-5" /> {cart.products.length}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
