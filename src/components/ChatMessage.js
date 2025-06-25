import React from 'react'

const ChatMessage = ({data}) => {

  const {user,message} = data;

  return (
    <div className='flex p-2 mt-2 shadow-md items-center hover:bg-gray-200'>
        <img 
         alt='chat-user-icon'
         className='h-8'
         src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
        
        <div className='ml-2 mt-1 text-sm'>
            <span className='font-bold'>{user}</span>
            <span className='ml-2'>{message}</span>
        </div>
       

    </div>
  )
}

export default ChatMessage