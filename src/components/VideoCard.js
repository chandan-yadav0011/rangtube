
const VideoCard=({title,channelTitle,viewCount,publishedAt,thumbnail})=>{

    return (
        <div className="p-2 m-2">
                <img 
                      className='rounded-lg'
                      src={thumbnail}/>
                    
                <h1 className="font-bold w-[320px]">{title}</h1>
                <h3 className='text-sm text-gray-500'>{channelTitle}</h3>
                <h3 className='text-sm text-gray-500'>{viewCount/1000}k views</h3> 
                <h3 className='text-sm text-gray-500'>{Math.floor((Date(publishedAt)- Date())/(1000 * 60 * 60 * 24))} days ago</h3>
                  
        </div>
    )
}

export default VideoCard;