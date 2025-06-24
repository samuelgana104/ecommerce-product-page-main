import React from "react";
import close from "./assets/x.svg"

function Body({list,setList,remove}) {
    let getData =localStorage.getItem('userData')

    let obj = JSON.parse(getData)
    
  const sorts =(obj) => {
      
    setList(obj.sort((a,b) => a.localeCompare(b)))
    }
    const unsorts =(obj) => {
      
      setList(obj)
      }
  return <div > 
    {list.map((list, index) =>{
     return   <div className="flex items-center gap-2" key={index} ><li >{list}</li> <img src={close}  onClick={()=> remove(index) } className="cursor-pointer w-5 h-5" alt="" /></div>

    })}
    <button className="text-2xl border-blue-400 border-2  border-solid p-2 uppercase font-bold  cursor-pointer " onClick={() => sorts(obj)}> sort</button>
    <button className="text-2xl border-blue-400 border-2  border-solid p-2 uppercase font-bold  cursor-pointer " onClick={() => unsorts(obj)}> unsort</button>
  </div>;
}

export default Body;
