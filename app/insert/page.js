"use client"
import { useState } from "react";


const incert = () => {
    let init={
        title:"",
        reporter:"",
        date:"",
        cetegory:"",
        content:""
    }
    const [news,setNews]=useState(init);
    
    const handleOnChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setNews((p)=>({...p,[name]:value}))

    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        let data=  await fetch("http://127.0.0.1:3000/api/post",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(news)
            
        })
        data= await data.json();
        console.log(data.data);
        setNews(init);
    }
  return (
    <section className='flex w-full pt-28'>
          <div className='w-3/6   mx-auto'>
            <h1 className='text-3xl font-black text-white'></h1>
            <div className='flex flex-col gap-2 '>
                <form method="post" onSubmit={handleSubmit}   className='flex flex-col gap-2 text-black'>
                    <label htmlFor="">Title</label>
                    <input type="text" name='title' onChange={handleOnChange}  value={news.title}  className='border border-black py-2 px-3 rounded-lg' />
                    <label htmlFor="">Reporter</label>
                    <input type="text" name='reporter' onChange={handleOnChange} value={news.reporter}  className='border border-black py-2 px-3 rounded-lg' />
                    <label htmlFor=""> Date</label>
                    <input type="date" name='date' onChange={handleOnChange} value={news.date}  className='border border-black py-2 px-3 rounded-lg' />
                    <label htmlFor="">Cetegory</label>
                    <input type="text" name='cetegory' onChange={handleOnChange} value={news.cetegory} className='border border-black py-2 px-3 rounded-lg' />
                    <label htmlFor="">content</label>
                    <textarea rows={9} name='content' onChange={handleOnChange} value={news.content} type="text"  className='border border-black py-2 px-3 rounded-lg' />

                    <input type="submit" value="Add News" className='bg-red-500 hover:bg-red-800 text-white rounded px-3 py-2' />
                </form>
            </div>
          </div>
      </section>
  )
}

export default incert
