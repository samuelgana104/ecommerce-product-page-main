import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import hero from "../assets/images/image-avatar.png";
import close from "../assets/images/icon-close.svg";

import hams from "../assets/images/icon-menu.svg";
import Carts from "./Carts";

function Head({cartnum,cartop,setCartop,ham, setHam}) {
  let [lists, setList] = useState([
    "collections",
    "men",
    "women",
    "about",
    "contact",
  ]);
  useEffect(() => {
    if (ham) document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [ham]);

  return (
    <div className=" px-5 md:px-20 md:pt-10">
      <div className="flex items-center justify-between border-b-2 pb-2 md:pb-5">
        <div className="flex items-center gap-5 md:gap-9 ">
          <div>
            <img
              src={hams}
              alt=""
              className="  md:hidden cursor-pointer"
              onClick={() => setHam(true)}
            />
          </div>
          <img src={logo} alt="" />
          <ul className="md:flex hidden gap-5 text-[14px] font-semibold   grayish_blue">
            {lists.map((list, i) => {
              return (
                <li key={i} className="cursor-pointer capitalize ">
                  {list}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-5 md:gap-9 ">
          <Carts cartnum={cartnum} cartop={cartop} setCartop={setCartop} /> 
          <img
            src={hero}
            alt=""
            className="w-[35px] md:w-[50px] cursor-pointer"
          />
        </div>
      </div>
      <ul
        className={`absolute   z-[10] md:hidden ${
          ham ? "left-0 " : "left-[-60%]"
        } top-0 flex flex-col justify-start duration-1000 items-start font-[600] gap-6 pl-6 bg-white  w-[60%] h-[100vh]`}
      >
        <img
          src={close}
          alt=""
          className="my-10 cursor-pointer"
          onClick={() => setHam(false)}
        />
        {lists.map((list, i) => {
          return (
            <li key={i} className="cursor-pointer capitalize ">
              {list}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Head;
