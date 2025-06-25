import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/contants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const[videoData,setVideoData] = useState([]);
    
  
  async function getData(){
   // console.log(YOUTUBE_VIDEO_API)
     const data = await fetch(YOUTUBE_VIDEO_API);
     const jsonData = await data.json();

     //console.log(jsonData);
     setVideoData(jsonData.items);

  }


  useEffect(()=>{
      getData();
  },[]);

  return (
    <div className='p-2 m-2 w-full h-full flex flex-wrap'>
      {
        videoData.map((ele)=>{
            return (
                
                      <Link to={"/watch?v=" +ele.id} key={ele.id}><VideoCard title={ele.snippet.title} thumbnail={ele.snippet.thumbnails.medium.url}
                          channelTitle={ele.snippet.channelTitle} 
                          viewCount={ele.statistics.viewCount/1000}
                          publishedAt={ele.snippet.publishedAt}
                          />
                          </Link>
              )
        })
      }
    </div>
  )
}

export default VideoContainer