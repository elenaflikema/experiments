import React from "react";

const ProductCard = ({ data, className }) => {

    return (
        <div className={className}>
            <h1>{data.id}</h1>
            <h2>{data.price}</h2>
            <h3>{data.data.toString()}</h3>
        </div>
    );
};

export default ProductCard;
