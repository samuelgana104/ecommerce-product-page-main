import React, { useState } from "react";
import Head from "./Head";
import Body from "./Body";
import shoes from "./shoes";

function Main() {
  let [num, setNum] = useState(0);
  let [cartop, setCartop] = useState(false);

  let [count, setCount] = useState(0);
  let [cartnum, setCartnum] = useState(0);
  let [shoe, setShoe] = useState(shoes);

  let [lists, setLists] = useState([]);
  let shoeStore = JSON.parse(localStorage.getItem('shoe'))

  const addCart = () => {
    let i = cartnum + count;
    if (i > 20)
      return alert("Sorry, but the cart number can't exceed 20 items");

    if (i == 0) return;
    shoe[num].amount = count;
    let shoeList = [...lists, shoe[num]];
    setLists(shoeList);

    let list = localStorage.setItem("shoe", JSON.stringify(shoeList));
    setCartnum(i);
    setCount(0);
  };
  const deleteList =(index,x) =>{
    
    let removed = shoeStore.filter((_, i) => i !== index)
console.log(removed)
 setLists(removed)
 localStorage.setItem("shoe", JSON.stringify(removed))
setCartnum(cartnum-x)


  }

  return (
    <div className="pt-1">
      <Head cartnum={cartnum} cartop={cartop} setCartop={setCartop} />
      <Body
        count={count}
        cartnum={cartnum}
        setCount={setCount}
        addCart={addCart}
        cartop={cartop}
        setCartop={setCartop}
        num={num}
        setNum={setNum}
        deleteList={deleteList}
      />
    </div>
  );
}

export default Main;
