import React from 'react'

const VideoContainer = () => {

  const videoData=["v1","v2","v3","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4","v4"]
  return (
    <div className='p-2 m-2 bg-yellow-400 w-full h-full flex flex-wrap'>
      {
        videoData.map((ele,indx)=>{
            return <div className='h-[220px] w-[350px] bg-cyan-300 p-2 m-2'>{ele}</div>
        })
      }
    </div>
  )
}

export default VideoContainer