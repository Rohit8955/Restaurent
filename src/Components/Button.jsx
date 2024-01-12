import React from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext'
const Button = (props) => {
    const {datastate} = useContext(NoteContext)
    const {buttonclicked} = useContext(NoteContext)
    const handleClick = (category,index) => {
        datastate(category,index);
      };
  return (
    <div>
      <button className={`bg-blue-800 px-[15px] ${buttonclicked[props.index]===true?"bg-red-600":"bg-blue-800"} py-[8px] text-white text-[20px] `} onClick={()=>handleClick(props.title,props.index)} >{props.title}</button>
    </div>
  )
}

export default Button
