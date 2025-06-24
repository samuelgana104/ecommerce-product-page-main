import React, { useState } from "react";
import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";

import productT1 from "../assets/images/image-product-1-thumbnail.jpg";
import productT2 from "../assets/images/image-product-2-thumbnail.jpg";
import productT3 from "../assets/images/image-product-3-thumbnail.jpg";
import productT4 from "../assets/images/image-product-4-thumbnail.jpg";
import next from "../assets/images/icon-next.svg";
import prev from "../assets/images/icon-previous.svg";
import shoes from "./shoes"

function Left({num,setNum}) {
  
  let [product, setProduct] = useState([
    product1,
    product2,
    product3,
    product4,
  ]);
  
  const nextB = () => {
    let i = (product.length + num + 1) % product.length;
    setNum(i);
  };
  const prevB = () => {
    let i = (product.length + num - 1) % product.length;
    setNum(i);
  };
  const  change =(numb) => {
    setNum(numb)
  }
  return (
    <div>
      <div className=" flex flex-col justify-center item gap-10   md:pt-10">
        <div className="relative ">
          <img
            src={prev}
            alt=""
            onClick={prevB}
            className="absolute md:hidden  top-[50%] cursor-pointer translate-y-[-50%] left-10  rounded-full bg-white p-4"
          />
          <img
            src={next}
            alt=""
            onClick={nextB}
            className="absolute md:hidden  top-[50%] cursor-pointer right-10  translate-y-[-50%] rounded-full bg-white  p-4"
          />

          <img
            src={product[num]}
            alt=""
            className="md:rounded-lg  h-[300px] lg:w-[800px] w-screen  lg:h-[400px] md:w-[700px]  "
          />
        </div>{" "}
        <div className="hidden md:flex items-center justify-between">
          <img
            src={productT1}
            alt=""
            onClick={()=>change(0)}
            className="md:max-w-[50px] lg:max-w-[80px] gap-5 rounded-md cursor-pointer"
          />
          <img
            src={productT2}
            alt=""
            onClick={()=>change(1)}
            className="md:max-w-[50px] lg:max-w-[80px] gap-5 rounded-md cursor-pointer"
          />
          <img
            src={productT3}
            alt=""
            onClick={()=>change(2)}

            className="md:max-w-[50px] lg:max-w-[80px] gap-5 rounded-md cursor-pointer"
          />
          <img
            src={productT4}
            alt=""
            onClick={()=>change(3)}

            className="md:max-w-[50px] lg:max-w-[80px] gap-5 rounded-md cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Left;
