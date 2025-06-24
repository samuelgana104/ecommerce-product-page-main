import React, { useState } from "react";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import cart from "../assets/images/icon-cart.svg";
function Right({count, setCount,addCart}) {
  
  const addiCart = () => {
    if (count >= 10) return;
    setCount(count + 1);
  };
  const minusCart = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <div className="md:pl-10 px-10 py-10 md:py-0 ">
      <p className="orange uppercase font-bold "> Sneaker Company</p>
      <h1 className="text-4xl black font-bold py-3">
        Fall Limited Edition Sneakers
      </h1>
      <p className="grayish_blue font-[500] leading-relaxed py-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex md:flex-col  py-5 justify-between items-center md:items-start md:justify-start ">
        <div className="flex gap-4 items-center">
          <span className="Dark_grayish_blue font-[700] text-2xl">
            {" "}
            $125.00
          </span>
          <span className=" px-1 rounded-md font-[700] pale  orange ">
            50%{" "}
          </span>
        </div>
        <span className="line-through font-[500] grayish_blue "> $250.00</span>
      </div>{" "}
      <div className="flex flex-col md:flex-row gap-6 ">
        <div className="flex py-3 items-center md:w-[120px] justify-around lg:w-[150px] pale  rounded-md md:py-1">
          <img
            src={minus}
            alt=""
            onClick={minusCart}
            className="cursor-pointer"
          />
          <p className="font-[500]">{count}</p>
          <img src={plus} onClick={addiCart} alt="" className="cursor-pointer" />
        </div>
        <div className="flex justify-center gap-4 cursor-pointer md:w-[150px]  md:text-[13px]    md:px-5 lg:px-10 lg:w-[200.11px] box-border shadow-md items-center bg-orange   rounded-md py-3" onClick={addCart}>
          <img src={cart} alt="" className=" lg:w-[22px] md:w-[18px]" />
          <span className="font-[500] white select-none" >Add to cart</span>
        </div>
      </div>
    </div>
  );
}

export default Right;
