import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import { closer } from '../utils/Slices/SideBarSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';


const WatchPage = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();

  const id=searchParams.get("v")
  const dispatch = useDispatch();

  
 
  useEffect(()=>{
    dispatch(closer());
  },[]);

  return (
    <div className='w-full'>
    <div className='rounded-md flex p-4 ml-8 w-full'>
        <div>
          <iframe className='' width="1100" height="600" src={ "https://www.youtube.com/embed/"+ searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
        </div>
        
        <div className='w-full'>
            <LiveChat/>
        </div>
        
          
        
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage