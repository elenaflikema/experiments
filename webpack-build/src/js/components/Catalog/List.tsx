import * as React from "react";
import ItemComponent from './ItemComponent';
import { ProductData } from '../utils/product_config';

interface ListProps {
    data: Array<ProductData>,
    DetailsComponent: React.FunctionComponent<{data: ProductData}>,
    options?: {
        useIcons?: boolean
    }
}

const List = ({data, DetailsComponent} : ListProps) => {

    const [ selectedItemId, setSelectedItemId] = React.useState<number | undefined>(-1);

    const onItemClick = (id: number) => {
        if (selectedItemId !== id) {
            setSelectedItemId(id);
        } else {
            setSelectedItemId(-1);
        }
    };

    return (
        <div>
            {
                data.map((data) => {
                    return (
                        <ItemComponent
                            isSelected={data.id === selectedItemId}
                            onClick={() => onItemClick(data.id)}
                            data={data}
                            DetailsComponent={DetailsComponent}
                        />
                    );
                })
            }
        </div>
    );
};

export default List;
