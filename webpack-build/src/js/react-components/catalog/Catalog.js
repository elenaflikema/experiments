import React, { useState } from "react";
import ProductList from "./ProductList";

const Catalog = () => {

    const [ isListFormat, setIsListFormat] = useState(true);

    const changeRenderFormat = () => {
        setIsListFormat(!isListFormat);
    };

    return (
        <React.Fragment>
            <button onClick={changeRenderFormat}>{isListFormat ? 'Show as a Table' : 'Show as a List'}</button>
            <ProductList isListFormat={isListFormat}/>
        </React.Fragment>
    );
};

export default Catalog;
