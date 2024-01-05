import * as React from 'react';

import Navbar from '@/app/(sites)/_components/navbar';
import Providers from '@/app/(sites)/providers';

import { getCart } from '@/data/cart';

import type { TLayoutProps } from '@/types/layout.type';

export default async function Layout({ children }: TLayoutProps) {
    const cart = await getCart();

    return (
        <Providers cart={cart}>
            <Navbar />

            <main className="relative">{children}</main>
        </Providers>
    );
}
