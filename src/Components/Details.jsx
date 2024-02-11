import React, { useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext'
import {useParams } from 'react-router-dom';
import { arr } from './SampleOutput';
import CartFreq from './CartFreq'
import Cardtemplate from './Cardtemplate';
const Details = () => {
    const {data, cartarr, addtocart} = useContext(NoteContext);
    const {name} = useParams();
    const id = arr.findIndex(item => item.name===name);
    const obj = arr[id]
    const category = obj?.category;
    const objectid = obj.id; 
    console.log(obj)

    const index = cartarr.findIndex(item => item.id===objectid)

    const newarr = arr.filter((elem)=>{
        return elem.category===category && elem.id!==objectid;
    })
    const buttonclicked = (id)=>{
        addtocart(id);
    }
  return (
    <div>
        <div className='grid place-items-center mt-[70px]'>
            <div className='flex gap-8 '>
                <img className='w-[400px] h-[400px] object-cover boxshadow rounded-md' src={obj.img} alt="" />
                <div className='w-[500px] flex flex-col gap-2 text-[17px]'>
                    <h1 className='text-[28px] font-[600]'>{obj.name}</h1>
                    <h1><span className='font-[600] text-[18px]'>Category:</span> {category.toUpperCase()}</h1>
                    <p> <span className='font-[600] text-[18px]'>Description:</span> Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque necessitatibus fuga laboriosam sint! Excepturi saepe amet laudantium quod praesentium. Pariatur., adipisicing elit. Illo, error aut? Quidem sunt minima non deleniti natus! Fugiat, aut veritatis.</p>
                    <h4><span className='font-[600] text-[18px]'>Price: </span>Rs. {obj.price}</h4>
                    <div className='flex gap-5'>
                    {
                        index===-1?( <button className='bg-green-600 text-white px-3 font-[600] py-1 boxshadow rounded-sm hover:bg-green-500' onClick={()=>buttonclicked(obj.name)}>Add to cart</button>)
                        :(<CartFreq freq={cartarr[index].quantity} index={index}/>)
                    }
                    <button className='bg-blue-600 boxshadow text-white font-[600] rounded-sm py-1 px-4 hover:bg-blue-500'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className=' w-full flex items-center justify-center mt-[80px]'>
            <div className='flex flex-col gap-5  w-[900px] '>
                <h1 className='text-[28px] font-[600]'>Recommendations</h1>
                    <div className=' w-[900px] grid grid-cols-3 gap-y-7'>
                        {
                            newarr.map((elem,idx)=>{
                                return <Cardtemplate key={idx} category={category} name={elem.name} price={elem.price} img={elem.img}/>
                            })
                        }
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Details
