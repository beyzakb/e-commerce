import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { removeCard } from '../redux/actions/card';

const Card = () => {
    const dispatch = useDispatch();
    const {cardItems} = useSelector(state=>state.card);
    console.log("cardItems",cardItems)

    const deleteCard = (id) =>{
      dispatch(removeCard(id))
    }


  return (
    <div className='w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3'>
        <div className='flex items-center justify-between px-5 py-3'>
            <h1 className='text-3xl'>Sepetim</h1>
            <IoCloseSharp onClick={()=>dispatch({type:"DRAWER",payload:false})} size={24} className='cursor-pointer' />
        </div>

        
       {
        cardItems?.map((card,i)=>(
          <div key={i} className='h-28 flex items-center justify-between border-b py-5'>
          <img className='h-24' src={card?.image} alt="" />
          <div className='w-44'>
            <div className='font-bold text-sm'>{card?.title.substring(0,26)} ({card?.qnty})</div>
            <div className='opacity-50 text-xs'>{card?.description.substring(0,42)}</div>
          </div>
          <div className='font-bold text-lg'>{card?.price} ₺</div>
          <div onClick={()=>deleteCard(card.id)} className='bg-red-600 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>Sil</div>
        </div>
          ))
       }
        </div>
  )
}

export default Card