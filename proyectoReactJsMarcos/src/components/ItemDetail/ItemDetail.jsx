import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';

export default function ItemDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  const handleAddToCart = (quantity) => {
    console.log(`Added ${quantity} items to cart`);
  };

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="item-detail">
      <button className="back-button" onClick={() => navigate(-1)}>← Volver</button>
      <h2>{product.title}</h2>
      <img src={product.pictures?.[0]?.url} alt={product.title} />
      <p>Precio: ${product.price}</p>
      <p>Condición: {product.condition}</p> 
      <p>Stock disponible: {/*product.available_quantity*/}10</p> {/*IMPORTANTE: La API de Mercado Libre no muestra el stock de celulares por alguna razon... */}
      <ItemCount stock={/*product.available_quantity*/ 10} initial={1} onAdd={handleAddToCart} /> {/*Por eso uso como placeholder la cantidad de 10 */}
      <a href={product.permalink} target="_blank" rel="noopener noreferrer">  
        Comprar
      </a>
    </div>
  );
};
