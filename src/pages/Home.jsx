import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../redux/actions/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  useEffect(()=>{
      dispatch(productsAction())
  },[dispatch])
  
  console.log("products",products)
  
  const productList = Array.isArray(products) ? products : [];


  return (
    <div className='flex flex-wrap justify-center mt-5'>
       {productList.map((prd, i) => (
        <ProductCard key={i} prd={prd} />
      ))}
    </div>
  )
}

export default Home