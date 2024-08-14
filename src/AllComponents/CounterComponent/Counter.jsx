import './Counter.css'
import { useState } from 'react'
import PlusPhoto from '../../assets/Images/icon-plus.svg'
import MinusPhoto from '../../assets/Images/icon-minus.svg'

export default function Counter(props) {

const [count, setCount] = useState(props.Score) 
 function AddNum(){
    let NewAddNum = count + 1
    setCount(NewAddNum)
 }
 function MinusNum(){
    let NewMinusNum = count - 1
    setCount(NewMinusNum)
 }

  return (
    <div className='Counter'>
        <button onClick={AddNum}><img src={PlusPhoto} alt="Not Found" /></button>
        <label>{count}</label>
        <button onClick={MinusNum}><img src={MinusPhoto} alt="Not Found" /></button>
    </div>
  )}

