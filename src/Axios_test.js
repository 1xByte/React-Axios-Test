import { getDefaultNormalizer } from '@testing-library/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Axios_test = () => {

    const [city, setCity] = useState([])
    

    const getData= async ()=> {
      const  res= await axios.get("https://jsonplaceholder.typicode.com/posts")
      
      setCity(res.data)
    }
    useEffect(()=> {
        getData()
    })

    

  return (
  
    <>
     <input type="search"
        onChange={(event)=> {setCity(event.target.value)}} /> 
        <h1>{city.slice(0, 6).map((e)=>{
          const {id, title, body}= e
          return(
            <h1>{title}</h1>
        
          )
        })}</h1>
    </>
  )
}
