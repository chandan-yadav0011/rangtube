import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import { closer } from '../utils/Slices/SideBarSlice';


const WatchPage = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();

  const id=searchParams.get("v")
  const dispatch = useDispatch();

  
  
  useEffect(()=>{
    dispatch(closer());
  },[]);

  return (
    <div className='rounded-md'>
        <iframe className='p-4 ml-8' width="1100" height="700" src={ "https://www.youtube.com/embed/"+ searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage