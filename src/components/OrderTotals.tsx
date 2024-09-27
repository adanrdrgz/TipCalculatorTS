import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

const OrderTotals = ({order, tip, placeOrder} :OrderTotalsProps) => {
    
    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => (subTotalAmount * tip), [subTotalAmount, tip])
    const totalAmount = useMemo(() => (subTotalAmount + tipAmount), [subTotalAmount, tipAmount])
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Total & tip</h2>
                <p>
                    Subtotal: {''}
                    <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
                </p>

                <p>
                    Tip: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>
                    Total: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>
            <button 
                className="w-full bg-black p-3 uppercase font-black text-white rounded-md"
                disabled={totalAmount === 0}    
                onClick={() => placeOrder()}
            >
                Save Order
            </button>
        </>
    )
}

export default OrderTotals
