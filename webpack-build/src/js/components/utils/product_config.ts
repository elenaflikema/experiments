export interface ProductData {
    id: number,
    price: number,
    data?: Date
}

export const productConfig: Array<ProductData> = [
    {
        id: 0,
        price: 1000,
        data: new Date()
    },
    {
        id: 1,
        price: 5960,
        data: new Date()
    },
    {
        id: 2,
        price: 5240,
        data: new Date()
    },
    {
        id: 3,
        price: 1400,
        data: new Date()
    },
    {
        id: 4,
        price: 1460,
        data: new Date()
    },
];

export const articleConfig: Array<ProductData> = [
    {
        id: 10,
        price: 1000,
        data: new Date()
    },
    {
        id: 11,
        price: 5960,
        data: new Date()
    },
    {
        id: 12,
        price: 5240,
        data: new Date()
    },
    {
        id: 13,
        price: 1400,
        data: new Date()
    },
    {
        id: 14,
        price: 1460,
        data: new Date()
    },
];

export function getProductDataById(id: number): ProductData | null {
    return productConfig.find((product) => id === product.id);
}
