import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productsActionDetail } from '../redux/actions/products';
import { productsCard } from '../redux/actions/card';
import { CgMathPlus, CgMathMinus  } from "react-icons/cg";

const Detail = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const {product} = useSelector(state=>state.product)
  const [count, setCount] = useState(0)

  
  useEffect(()=>{
    dispatch(productsActionDetail(id))
    
  },[dispatch])
  
  console.log("product",product)

  const increment = (stock) =>{
    if(count <= stock) {
      setCount(count + 1)
    }
    
  }

  const decrement = () =>{
    if(count > 0) {
      setCount(count - 1)
    }
  }

  const addCard = () =>{
    dispatch(productsCard(id,count))
    dispatch({type:'DRAWER', payload:true})
  }

  return (
    <div className='w-full flex  items-center justify-center space-x-5'>
      <img className='w-1/3' src={product?.image} alt="" />
      <div className='w-2/3 space-y-5'>
        <div className='font-bold text-xl text-orange-400'>{product?.title}</div>
        <div className='opacity-50 text-stone-5500'>{product?.description}</div>
        <div className='opacity-50 text-stone-5500'>Kategori : {product?.category}</div>
        <div className='opacity-50 text-stone-5500'>Puan : {product?.rating?.rate} - Stok : {product?.rating?.count}</div>
        <div className='font-bold text-xl text-orange-400'>{product?.price} ₺</div>

        <div className='flex items-center space-x-5'>
        <CgMathMinus onClick={decrement}  className='cursor-pointer border rounded-full p-1 text-orange-500 ' size={34} />
        <span className='text-3xl text-orange-400'>{count}</span>
        <CgMathPlus onClick={()=>increment(product?.rating?.count)} className='cursor-pointer border rounded-full p-1 text-orange-500 ' size={34} />

        </div>
        <button onClick={addCard} className='hover:bg-indigo-500 bg-orange-600 w-full p-3 rounded-lg text-center text- lg text-white'>Sepete Ekle</button>
      </div>

    </div>
  )
}

export default Detail