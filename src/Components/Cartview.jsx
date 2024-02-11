import React, { useContext } from 'react'
import Cartitem from './Cartitem'
import NoteContext from '../Context/Notes/NoteContext'
import noresult from './../../images/no-results.png'
const Cartview = () => {
    const {cartarr,freqcount,amount,Emptycart} = useContext(NoteContext)

  return (
<div className='flex justify-center items-center h-screen  bg-pink-200'>
  {freqcount>0 && <div className='flex flex-col gap-5'>
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
    <div>
      <button className='text-white bg-red-600 boxshadow rounded-sm py-1 px-4 font-[600] hover:bg-red-500' onClick={Emptycart}>Remove All</button>
    </div>
  </div>}
  {
    freqcount==0 && (
      <div className='flex flex-col gap-0'>
        <img className='h-[500px]' src={noresult} alt="" />
        <h1 className='text-[28px] font-[600]'>Cart is Empty. Please add items and come back quickly!</h1>
      </div>
    )
  }
</div>    
  )
}

export default Cartview
