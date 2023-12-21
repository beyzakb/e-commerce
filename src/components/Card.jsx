import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';

const Card = () => {
    const dispatch = useDispatch();
  return (
    <div className='w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3'>
        <div className='flex items-center justify-between px-5 py-3'>
            <h1 className='text-3xl'>Sepetim</h1>
            <IoCloseSharp onClick={()=>dispatch({type:"DRAWER",payload:false})} size={24} className='cursor-pointer' />
        </div>
        </div>
  )
}

export default Card