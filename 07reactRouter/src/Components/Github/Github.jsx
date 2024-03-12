import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setdata(data);
    //     })
    // },[])
    const data=useLoaderData();
  return (
    <div>
      Github Followers : {data?.followers}
      <img src={data.avtar_url} alt="" srcset="" className='w-[300px] h-[300px]'/>
    </div>
  )
}

export default Github


export const githubInfoLoader=async ()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}