import * as React from "react";
import {ProductData} from "../utils/product_config";

interface ItemComponentProps {
    data: ProductData,
    onClick: () => void,
    isSelected?: boolean,
    DetailsComponent: React.FunctionComponent<{data: ProductData}>
}

const ItemComponent = function ({onClick, isSelected, data, DetailsComponent}: ItemComponentProps) {

    return (
        <div onClick={onClick} className={isSelected ? "selected" : "article"}>
            <h1>This is an Article</h1>
            {
                isSelected ? (
                    <div>
                        <DetailsComponent data={data}/>
                    </div>
                ) : null
            }
        </div>
    );
};

export default ItemComponent;
