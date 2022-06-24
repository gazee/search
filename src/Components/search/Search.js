import React, { useEffect, useState } from 'react';
import Data from '../../db/data.json';
import Cart from '../Cart';


export const Search = () => {
    const [q,setQ]=useState("");
    const [item,setItem]=useState(null);

 useEffect(()=>{
console.log(found())
 },[q])   
 function searchHandle(e){
    console.log(e.target.value)
    setQ(e.target.value)
    
    
}
function found(){
    Data.find((obj)=>{
        if(obj.id==q){
            return obj
        }
        return 
    })
}
  return (
    <div>Search
        <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  onChange={searchHandle} />
      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
    </form>
    {
        Data.filter((item)=>{
            if(q==""){
                    return item
            }else if(item.includes(q)){
                return item
            }
        }).map((data)=><Cart data={data}/> )
    }
    </div>
  )
}


