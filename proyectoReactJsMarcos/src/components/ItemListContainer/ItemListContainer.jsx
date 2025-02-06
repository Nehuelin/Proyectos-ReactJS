import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { capitalize } from "../../helpers/stringFunctions";

import ItemList from "../ItemList/ItemList"

import './ItemListContainer.css';


const categoryMapping = {
  apple: "iphone",
  samsung: "samsung",
  motorola: "motorola",
  otros: "smartphone",
};

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let searchQuery = categoryMapping[categoryId] || "smartphone"; 

    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.results);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{ greeting }</h2>
      <h2>{categoryId ? `Categoria: ${capitalize(categoryId)}` : "Todos los productos"}</h2>
      {loading ? <p>Cargando...</p> : <ItemList items={items} />}
    </div>
  );
}