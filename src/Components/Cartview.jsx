import React, { useContext } from 'react'
import Cartitem from './Cartitem'
import NoteContext from '../Context/Notes/NoteContext'


const Cartview = () => {
    const {cartarr,freqcount,amount} = useContext(NoteContext)
  return (
<div className='flex justify-center items-center h-screen  bg-pink-200'>
  <div className='flex flex-col gap-5'>
    <div>
      <h1 className='text-[28px] font-semibold'>Shopping Cart</h1>
      {
        freqcount>0?(<h4 className='text-[20px] font-semibold'>You have {freqcount} items in cart</h4>):null
      }
      
    </div>
    <div className='w-[750px] h-[350px] flex flex-col gap-3 bg-slate-100 overflow-y-auto scroll boxshadow rounded-md  px-0 py-3'>
      {
        cartarr.map((elem,idx)=>{
            return <Cartitem key={idx} name={elem.name}  price={elem.price} index={idx} freq={elem.quantity} img={elem.img} />
        })
      }
    </div>
    <div className='flex justify-between w-[750px] mt-2'>
      <h4 className='text-[18px] font-[500]'>Total amount to be paid ${amount}. Please Proceed to checkout.</h4>
      <button className='bg-blue-800 text-white text-[18px] px-4 py-1 font-semibold boxshadow rounded-sm hover:bg-blue-700 '>Checkout</button>
    </div>
  </div>
</div>    
  )
}

export default Cartview
