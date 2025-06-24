import React from "react";
import Left from "./Left";
import Right from "./Right";
import CartOpt from "./CartOpt";

function Body({ count, setCount, addCart, cartop ,num , setNum ,cartnum,deleteList}) {
  return (
    <div className=" flex md:gap-10 lg:gap-20 flex-col md:flex-row items-center  md:px-10 lg:px-20 justify-center">
      <Left num={num} setNum={setNum}/>
      <Right count={count} setCount={setCount} addCart={addCart}  />
    {cartop && <CartOpt cartnum={cartnum}  num={num} deleteList={deleteList}/>}
    </div>
  );
}

export default Body;
