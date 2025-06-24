import React, { useState } from "react";
import shoes from "./shoes";
import remove from "../assets/images/icon-delete.svg";

function CartOpt({ cartnum,deleteList}) {
  let [shoe, setShoe] = useState(shoes);
  let shoeStore = JSON.parse(localStorage.getItem('shoe'))

  
  return (
    <div className=" absolute left-[50%]  translate-x-[-50%] w-[90%] top-16 h-[250px]  rounded-md shadow-lg bg-white md:left-[850px]   md:translate-x-[0] md:top-[120px] md:w-[400px]">
      <h1 className="font-[600] capitalize border-b-2  py-3 px-5 ">cart</h1>
      {cartnum < 1 ?<div className='flex justify-center items-center h-[calc(250px-50px)]'>
          <p className='Dark_grayish_blue font-[600]'>Your cart is empty </p>  
        </div>: <div className="  overflow-y-scroll scrolls h-[calc(250px-50px)]">
         {shoeStore.map((shoe, i)=> {return(
          <div className="flex items-center  p-3" key={i}>
           <img src={shoe.shoeImg} alt="" className="w-16 rounded-md " />
           <div className="flex-1 pl-3">
             <p className="grayish_blue font-[600] ">{shoe.name}</p>
             <div className="flex gap-3">
               <span className="grayish_blue font-[600] ">
                 ${shoe.price} x {shoe.amount }
               </span>
               <span className="font-[700]">${shoe.price * shoe.amount }</span>
             </div>
           </div>
           <img src={remove} alt="" onClick={()=>deleteList(i,shoe.amount)} className="cursor-pointer" />
         </div>
         )}) }
         
     </ div>}
     
    </div>
  );
}

export default CartOpt;
