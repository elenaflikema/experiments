import React from "react";
import ProductCard from "./ProductCard";
import { productConfig } from '../utils/product_config';

const ProductList = ({isListFormat}) => {

    return (
        <div className={isListFormat ? null : 'table'}>
            {
                productConfig.map((productData) => {
                    return (<ProductCard className={isListFormat ? 'listCard' : 'tableCard'} data={productData}/>);
                })
            }
        </div>
    );
};

export default ProductList;
