import React, { useEffect, useState } from 'react';
import { MdOutlineDarkMode,MdDarkMode  } from "react-icons/md";
import { LuShoppingBasket } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../redux/actions/search';



const Navbar = () => {
  const [color,setColor] = useState(false);
  const dispatch = useDispatch();
  const {cardItems} = useSelector(state=>state.card);
  const [search,setSearch] = useState("")

  useEffect(()=>{
    const root = document.getElementById("root");
    if(color){
      root.style.backgroundColor='black';
      root.style.color='white';
    }else{
      root.style.backgroundColor='white';
      root.style.color='black';
    }
  },[color])

  const searchPost = (e) =>{
    if(e.key === 'Enter'){
      dispatch(searchAction(search))
      
    }
  }

  return (
    <div className='flex items-center justify-between px-2 py-5 h-30 ' >
      <div><FiShoppingBag  size={30} className='cursor-pointer'/></div>
      <div className='flex items-center space-x-5'>
        <input value={search} onKeyPress={searchPost} onChange={e=>setSearch(e.target.value)} className='border p-2 outline-none rounded-md' type="text" placeholder='  search' />
        <div onClick={()=>setColor(!color)}>
          {
            color ? 
            <MdOutlineDarkMode  size={24} className='cursor-pointer'/> :
            <MdDarkMode   size={24} className='cursor-pointer'/> 
          }

        </div>
        <div onClick={()=>dispatch({type:"DRAWER", payload:true})} className='relative'>
        <LuShoppingBasket size={24} className='cursor-pointer'/>
        <span className='absolute -top-2 -right-3 px-2 bg-orange-300 text-white rounded-full text-sm'>{cardItems?.length}</span>
        </div>
      </div>

    </div>
  )
}

export default Navbar