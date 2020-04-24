import * as React from 'react';
import List from "./List";
import { articleConfig } from "../utils/product_config";
import ProductCard from "./ProductCard";

const Catalog = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1>Articles List</h1>
            <List
                data={articleConfig}
                DetailsComponent={ProductCard}
                options={{
                    useIcons: true
                }}
            />
        </React.Fragment>
    );
};

export default Catalog;
