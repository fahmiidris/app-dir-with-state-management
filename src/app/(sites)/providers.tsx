import * as React from 'react';

import CardProvider from '@/app/(sites)/_providers/cart';

import type { TCart } from '@/types/cart.type';

type TProviders = React.PropsWithChildren<{
    cart: TCart;
}>;

export default function Providers({ cart, children }: TProviders) {
    return <CardProvider cart={cart}>{children}</CardProvider>;
}
