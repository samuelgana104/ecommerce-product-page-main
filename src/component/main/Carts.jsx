import React from 'react'
import cart from "../assets/images/icon-cart2.svg";



function Carts({cartnum,cartop,setCartop}) {
  return (
    <div>
      <div className="relative" onClick={()=> setCartop(!cartop)}>
            <img src={cart} alt="" className="cursor-pointer " />
            {cartnum >= 1 && <span className="absolute  select-none top-[-10px] right-[-12px] rounded-full  h-5 flex justify-center items-center  bg-orange p-1 text-white">{cartnum}</span>}
           
          </div>
    </div>
  )
}

export default Carts
