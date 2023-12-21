import React from 'react'

const ProductCard = ({prd}) => {
  return (
    <div className='hover:border-indigo-500 cursor-pointer w-1/5 h-[350px] border border-orange-500 rounded-lg m-4 flex flex-col items-center p-1 space-y-2'>
      
        <img onClick={()=>window.location = `detail/ ${prd.id}`} className='h-44 object-cover ' src={prd?.image} alt="" />
        <div className='font-bold h-16 text-center mt-2 '>{(prd?.title).substring(0,30) }...</div>
        <div className='text-center opacity-60 text-sm'>{(prd?.description).substring(0,45)} ...</div>
        <div className='font-bold text-lg'>{prd?.price} ₺</div>
        <button className='hover:bg-indigo-500 bg-orange-600 w-full p-2 rounded-lg text-white'>Sepete Ekle</button>
       
    </div>
  )
}

export default ProductCard