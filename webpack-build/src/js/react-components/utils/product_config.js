export const productConfig = [
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

export function getArticleInfoById(id) {
    return productConfig.find((product) => id === product.id);
}