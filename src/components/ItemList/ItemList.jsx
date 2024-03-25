import Item from "../Item/Item"
import Loading from "../Loading/Loading"
import './ItemList.css'

const ItemList = ({ products }) => {

if(products.length == 0){
    return(
        <Loading />
    )
}

    return (
        <div className="itemList">
            {
                products.map((prod) => {
                    return (
                        <Item key={prod.id} {...prod} />
                    )
                })
            }
        </div>
    )
}

export default ItemList