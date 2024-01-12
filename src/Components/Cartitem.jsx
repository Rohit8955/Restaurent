import React, { useContext } from 'react'
import CartFreq from './CartFreq'
import NoteContext from '../Context/Notes/NoteContext'

const Cartitem = (props) => {
  const {removefromcart} = useContext(NoteContext)
  const handleclick = (index)=>{
    removefromcart(index);
  }
  return (
    <div className='flex justify-center items-center w-full'>
        <div className='w-[680px] h-[100px] flex items-center justify-between gap-[20px]  '>
          <img className='h-[90px] w-[100px] object-cover boxshadow rounded-md ' src={props.img} alt="" />
          <h4 className='text-[22px] font-semibold w-[150px]'>{props.name}</h4>
          <h4 className='text-[20px] font-semibold'>${props.price}</h4>
          <CartFreq freq = {props.freq} index={props.index}/>
          <i className='fa-solid fa-trash text-red-600 hover:cursor-pointer' onClick={()=>handleclick(props.index)}></i>
        </div>
    </div>
  )
}

export default Cartitem
