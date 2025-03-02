import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { capitalize } from "../../helpers/stringFunctions";
import { getItems, getItemsByCategory } from "../../firebase/firebase";

import ItemList from "../ItemList/ItemList";

import './ItemListContainer.css';

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchItems = async () => {
      try {
        const results = categoryId ? await getItemsByCategory(categoryId) : await getItems();
        if (results) {
          setItems(results);
        } else {
          setItems([]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchItems();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{ greeting }</h2>
      <h2>{categoryId ? `Categoria: ${capitalize(categoryId)}` : "Todos los productos"}</h2>
      {loading ? <p>Cargando...</p> : <ItemList items={items} />}
    </div>
  );
}