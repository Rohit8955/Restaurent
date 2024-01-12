import React from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext'
import Cardtemplate from './Cardtemplate'

const Hero = () => {
    const {data} = useContext(NoteContext)

  return (
    <div className='flex justify-center items-center'>
        <div className='grid grid-cols-3 gap-y-[40px] gap-x-[60px] mt-[100px]'>
      {
        data.map((elem,idx)=>{
            return <Cardtemplate category={elem.category} img={elem.img} price={elem.price} name={elem.name} key={idx} ind={idx} />
        }) 
      }
        </div>
    </div>
  )
}

export default Hero
