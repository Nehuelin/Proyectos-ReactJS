import { useEffect, useState } from "react";
import { getProducts } from "../../helpers/asyncMock";
import ItemCard from "../ItemCard/ItemCard";

import './ItemList.css';

export default function ItemList(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((res) => setProducts(res));
    }, []);

    return(
        <>
            <section className="item-list">
                {products.map((product) => (
                    <ItemCard key={product.id} product={product}/>
                ))}
            </section>
        </>
    )
}