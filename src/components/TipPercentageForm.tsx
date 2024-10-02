import { Dispatch } from "react"
import { TipOption } from "../types"
import { OrderActions } from "../reducer/order-reducer"

const tipOptions : TipOption[] = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPercentageFormProps = {
    dispatch: Dispatch<OrderActions>
    tip: number
}

const TipPercentageForm = ({dispatch, tip} : TipPercentageFormProps) => {
  return (
    <div>
        <h3 className="font-black text-2xl">Tip</h3>

        <form action="">
            {tipOptions.map( tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor="">{tipOption.label}</label>
                    <input 
                        type="radio" 
                        id={tipOption.id}
                        name="tip"
                        value={tipOption.value}
                        onChange={e => dispatch({type:'add-tip', payload:{value: +e.target.value}})}
                        checked={tip === tipOption.value}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
export default TipPercentageForm