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
    <div className='bg-green-700 text-white px-[8px] boxshadow font-semibold rounded-[5px] py-[1px]  flex items-center gap-3'>
      <i className='fa-solid fa-minus hover:cursor-pointer' onClick={()=>minus(props.ind)}></i>
      <h4>{props.freq}</h4>
      <i className='fa-solid fa-plus hover:cursor-pointer' onClick={()=>plus(props.ind)}></i>
    </div>
  )
}

export default ItemFreq
