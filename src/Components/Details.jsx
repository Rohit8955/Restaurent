import React, { useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext'
import {useParams } from 'react-router-dom';
import { arr } from './SampleOutput';
const Details = () => {
    const {data} = useContext(NoteContext);
    const {id} = useParams();
    const obj = data?.[id]
    const category = obj?.category;
    const objectid = obj.id; 
    console.log(obj)

    const newarr = arr.filter((elem)=>{
        return elem.category===category && elem.id!==objectid;
    })
  return (
    <div>
        <div className='flex gap-4 '>
            <img className='w-[400px] h-[400px] object-cover boxshadow rounded-md' src={obj.img} alt="" />
            <div className='w-[500px] flex flex-col gap-2 text-[17px]'>
                <h1 className='text-[28px] font-[600]'>{obj.name}</h1>
                <h1><span className='font-[600] text-[18px]'>Category:</span> {category.toUpperCase()}</h1>
                <p> <span className='font-[600] text-[18px]'>Description:</span> Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque necessitatibus fuga laboriosam sint! Excepturi saepe amet laudantium quod praesentium. Pariatur., adipisicing elit. Illo, error aut? Quidem sunt minima non deleniti natus! Fugiat, aut veritatis.</p>
                <h4><span className='font-[600] text-[18px]'>Price:</span> ${obj.price}</h4>
                <div>
                    <button className='bg-green-500 text-white px-3 font-[600] py-1 boxshadow rounded-sm'>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details
