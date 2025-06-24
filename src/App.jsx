import React from 'react'
import Main from './component/main/Main'

function App() {
  return (
    <div>
      <Main /> 
    </div>
  )
}

export default App












































// import Body from "./component/coms/Body";
// import Head from "./component/coms/Head";
// import React, { useEffect, useState } from "react";

// function App() {
//   let [movies, setmovies] = useState("");
//   let [list, setList] = useState([]);
//   useEffect(() => {
//     let storageData = localStorage.getItem("userData");
//     if (storageData) {
//       setList(JSON.parse(storageData));
//     }
//   }, []);
//   const addList = (e) => {
//     e.preventDefault(e);
//     let updatedList =[...list, movies]
    
    
//     if (!movies) return;
//     localStorage.setItem("userData", JSON.stringify(updatedList));
//     setList(updatedList);
//     setmovies("");
//   };
//   const remove =(index) => {
//     console.log(index)
//     let updatedList = list.filter((_,i)=> i !== index)
//     setList(updatedList)
//     localStorage.setItem('userData', JSON.stringify(updatedList))
    

//   }
  

//   return (
//     <div>
//       <Head movies={movies} setmovies={setmovies} addList={addList} />
//       <Body list={list} setList={setList}  remove={remove} />
//     </div>
//   );
// }

// export default App;
