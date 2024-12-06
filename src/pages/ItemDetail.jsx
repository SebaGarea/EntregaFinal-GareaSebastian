import React from 'react'
import { ItemDetailContainer, Loader } from '../components'
import { useItemById } from '../hooks'
import { useParams } from 'react-router'



export const ItemDetail = () => {
  
  const{id} = useParams();
  
  const{product, loading} = useItemById(id);

  return loading ? <Loader /> : <ItemDetailContainer item={product} />
};
