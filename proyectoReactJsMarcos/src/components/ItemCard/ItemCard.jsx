import './ItemCard.css';

export default function ItemCard({product}){
    return(
        <>
            <div className="item-card">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <img src={product.image} alt={product.title} />
                <p>${product.price}</p>
            </div>
        </>
    )
}