import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';
import { getSingleItem } from '../../firebase/firebase';

import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';

export default function ItemDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemAdded, setItemAdded] = useState(false);

  const [cart, setCart, addItem] = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getSingleItem(id);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = (quantity) => {
    addItem(product, quantity);
    console.log(`Added ${quantity} items to cart`);
    setItemAdded(true);
  };

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="item-detail">
      <button className="back-button" onClick={() => navigate(-1)}>← Volver</button>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Precio: ${product.price}</p>
      <p>Condición: {product.condition ? "Nuevo" : "Usado"}</p> 
      <p>Stock disponible: {product.stock}</p> 
      {!itemAdded && <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />} 
    </div>
  );
}