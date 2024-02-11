import React, { useContext } from 'react'
import { arr } from './SampleOutput'
import Button from './Button';
import NoteContext from '../Context/Notes/NoteContext';
import { useNavigate } from 'react-router-dom';
// import {NavLink} from 'react-router-dom'

    
const Navbar = () => {
  
  const unique = [...new Set(arr.map((elem,idx)=>{
    return elem.category;
  }))]
  unique.push("All")
  const {search,freqcount} = useContext(NoteContext)
    const handlechange = (e)=>{
    const value = e.target.value
    search(value)
    }

    const handleclick = ()=>{
      navigate('/cart')
    }

    const navigate = useNavigate();
  return (

<div className='flex justify-evenly items-center mt-8'>
      
      <div className='flex gap-0 rounded-md overflow-hidden'>
        {
          unique.map((elem,idx)=>{
            return <Button title={elem} key={idx} index = {idx}/>
          })
        }
      </div>
      
      <div onClick={handleclick}>
        <div className='bg-blue-800 px-[8px] py-[8px] relative rounded-md flex gap-2 justify-center items-center text-white text-[20px] hover:bg-green-800 hover:cursor-pointer'>
           <i className='fa-solid fa-cart-shopping text-[20px]' ></i>
           <h1 className=''>Cart</h1>
        </div>
        {
          freqcount>0?(<div className='px-[5px] py-[0px] w-[28px] top-4 right-[550px]  absolute rounded-[50%] bg-red-600 text-center text-white text-[20px] '>
          <h4>{freqcount}</h4>
        </div>) :null
        }
      </div>
      <input className='border-[2px] border-blue-400 h-[25px] outline-0'  type="text" placeholder='Search Your Food...' onChange={handlechange}/>
    </div>
  )
}

export default Navbar
