import React, { useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext'
import ItemFreq from './ItemFreq'
import { useNavigate } from 'react-router-dom'

const Cardtemplate = (props) => {

  const {addtocart,cartarr} = useContext(NoteContext)
  const presentincartarr = cartarr.findIndex(elem => elem.name===props.name);
  const navigate = useNavigate();
  const handleclick = (ind)=>{
    addtocart(ind);
  } 
  const imgclicked = (id)=>{
    navigate(`/details/${id}`);
  }
  return (
    <div>
      <div className='h-[290px] w-[260px]  rounded-[7px] boxshadow flex flex-col gap-[9px] items-start px-[9px] py-[5px] '>
        <h4 className='text-gray-700 font-semibold text-[20px]'>{props.category.toUpperCase()}</h4>
        <h4 className='text-[30px] font-semibold '>{props.name}</h4>
        <img className='w-full h-[140px] object-cover ' src={props.img} alt="" onClick={()=>imgclicked(props.ind)} />
        <div className='flex justify-between w-full items-center '>
          {
            presentincartarr!=-1?(<ItemFreq ind={presentincartarr} freq={cartarr[presentincartarr].quantity}  />):(<button className='bg-green-700 outline-none border-none text-white text-[18px] font-semibold px-[6px] py-[1px] rounded-[5px] hover:bg-green-800' onClick={()=>handleclick(props.ind)}>Add To Cart</button>)
          }
           
           <h4 className='text-[20px] font-semibold'>Rs.{props.price}</h4>
        </div>
        
      </div>
    </div>
  )
}

export default Cardtemplate
