import * as React from "react";
import { ProductData } from '../utils/product_config';

interface ProductCardProps {
    data: ProductData,
    className?: string,
    onClick: () => void
}

const ProductCard = ({ data, className, onClick } : ProductCardProps): JSX.Element => {

    return (
        <div onClick={onClick} className={className}>
            <h1>{data.id}</h1>
            <h2>{data.price}</h2>
            <h3>{data.data.toString()}</h3>
        </div>
    );
};

export default ProductCard;
