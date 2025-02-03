import ItemList from "../ItemList/ItemList"

export default function ItemListContainer({greeting}){

    return(
        <>
            <p>{greeting}</p>
            <ItemList />
        </>
    )
}