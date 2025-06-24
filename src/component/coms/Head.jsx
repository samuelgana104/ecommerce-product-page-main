

function Head({movies,setmovies,addList}) {
   
  return (
    <>
      <div className='bg-black py-5 px-4 flex  justify-between'>
        <h1 className="text-blue-300 text-xl uppercase">To-list</h1>
        <form action="" className="flex gap-5">
            <input type="text" className="px-2 outline-none  rounded-lg" onChange={e=>setmovies(e.target.value)} value={movies}  />
            <input type="submit" className="bg-white px-2 rounded-lg" value="submit" onClick={(e) => addList(e)} />
        </form>
      </div>
    </>
  );
}

export default Head;
