import { Dispatch } from "react"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducer/order-reducer"

type MenuItemProps = {
    item: MenuItem
    dispatch: Dispatch<OrderActions>
}

const MenuItem = ({item, dispatch}: MenuItemProps) => {
  return (
    <button 
    className="border-2 hover:bg-teal-200 border-teal-400 w-full p-3 flex justify-between rounded-xl" 
    onClick={() => dispatch({type: 'add-item', payload: {item}})}>
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
export default MenuItem