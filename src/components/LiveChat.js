import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, removeMessage } from '../utils/Slices/ChatSlice';
import { generateName } from '../utils/helper';
import { generateMessage } from '../utils/helper';

const LiveChat = () => {

    const[message,setMessage]= useState({})
    const dispatch = useDispatch();


    const handleNewMessage= (message)=>{
        dispatch(addMessage(message));
    }

    const liveMessage = useSelector(store=>store.chat.liveChatMessages);
    
    useEffect(()=>{
        const i = setInterval(()=>{
            //API Polling 

            const message = {
                user:generateName(),
                message:generateMessage(20)+ " 🚀",
            }

            handleNewMessage(message);
           
        },5000);

        return ()=>{
            clearInterval(i);
        }

    },[]);

    return (
    <div>
        <div className='ml-3 p-1 w-2/3 h-[600px] border border-black rounded-lg overflow-y-scroll flex flex-col-reverse'>
            {
                liveMessage.map((chat,indx)=>{
                return  <ChatMessage key={indx} data={chat}/>
                })
            }
        </div>
        <div className='ml-3 p-1 w-2/3 border border-black flex'>
                <input
                    alt='live create chat message'
                    className='p-2 m-1 border border-black w-full'
                    onChange={(e)=>setMessage({
                        user:"Chandan",
                        message:e.target.value
                        })}
                />
                <button 
                    className='p-2 m-1 bg-orange-300 rounded-lg shadow-md'
                    onClick={()=>{
                        dispatch(addMessage(message))
                        }}
                >send</button>
        </div>
    </div> 
  )
}

export default LiveChat