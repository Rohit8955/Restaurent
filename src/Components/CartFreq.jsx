import React, { useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext'

const ItemFreq = (props) => {
    const {increase,decrease} = useContext(NoteContext)
    const plus = (ind)=>{
        increase(ind)
    }
    const minus = (ind) => {
        decrease(ind)
    }
  return (
    <div className='bg-green-500 text-white px-3 boxshadow font-[600] rounded-sm py-1 w-[85px] flex items-center gap-3'>
      <i className='fa-solid fa-minus hover:cursor-pointer' onClick={()=>minus(props.index)}></i>
      <h4>{props.freq}</h4>
      <i className='fa-solid fa-plus hover:cursor-pointer' onClick={()=>plus(props.index)}></i>
    </div>
  )
}

export default ItemFreq
