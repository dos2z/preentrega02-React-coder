import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ products }) => {


    return (
        <div className="itemList">
            {
                products.map((prod) => {
                    return (
                        <div className="item">
                            <Item key={prod.id} {...prod} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList