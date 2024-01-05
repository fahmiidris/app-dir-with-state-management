import type { TProduct } from '@/types/product.type';

const products: TProduct[] = [
    {
        id: 1,
        name: 'Sendal Jepit',
        price: 100000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis metus scelerisque, faucibus velit sed, aliquet justo.',
        image: '/sendal-jepit.jpg',
    },
    {
        id: 2,
        name: 'Sepatu Super',
        price: 200000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis metus scelerisque, faucibus velit sed, aliquet justo.',
        image: '/sepatu-super.jpg',
    },
    {
        id: 3,
        name: 'Tas Ransel',
        price: 300000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis metus scelerisque, faucibus velit sed, aliquet justo.',
        image: '/tas-ransel.jpg',
    },
    {
        id: 4,
        name: 'Tas Selempang',
        price: 400000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis metus scelerisque, faucibus velit sed, aliquet justo.',
        image: '/tas-selempang.jpg',
    },
];

export async function getProducts(): Promise<TProduct[]> {
    return products;
}

export async function getProductById(id: number): Promise<TProduct | undefined> {
    return getProducts().then((products) => products.find((product) => product.id === id));
}
