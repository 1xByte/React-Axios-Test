import React, { useState } from 'react'

export const Todo = () => {

    const [items, setItems] = useState('')
    const [data, setData] = useState([])

    const addItems= ()=>{
        setData([...data, items ])
    }

    const deleteItem= (id)=>{
       const updateItems=  data.filter((elm, ind)=>{
            return ind != id
            
        })
        setData(updateItems)
    }

  return (
    <div>
        <input type="text" placeholder='add items' 
            value={items}
            onChange={(e)=> {setItems(e.target.value)}}
        />
        <button onClick={addItems}>+</button>
        <br/>
        <div>
            {
                data.map((ele, ind) => {
                    return(
                        <>
                        <h1>{ele}</h1>
                        <button onClick={()=>{deleteItem(ind)}}>delete</button>
                        </>
                    )
                })
            }
        </div>
        
      
        
    </div>
  )
}
