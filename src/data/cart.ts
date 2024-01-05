import { getProductById } from '@/data/products';

import type { TCart } from '@/types/cart.type';

const cart: TCart = {
    products: [],
};

export async function getCart(): Promise<TCart> {
    return cart;
}

export async function addToCart(productId: number): Promise<TCart> {
    const product = await getProductById(productId);

    if (product) {
        cart.products.push(product);
    }

    return cart;
}

export async function clearCart(): Promise<TCart> {
    cart.products = [];

    return cart;
}
