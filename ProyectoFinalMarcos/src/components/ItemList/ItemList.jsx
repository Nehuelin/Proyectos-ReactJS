import ItemCard from "../ItemCard/ItemCard";

import './ItemList.css';

export default function ItemList({ items }) {
  return (
    <section className="item-list">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </section>
  );
}