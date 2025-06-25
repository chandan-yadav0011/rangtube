import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../contants";

const ChatSlice = createSlice({
    name:"chat",
    initialState:{
        liveChatMessages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.liveChatMessages.splice(OFFSET_LIVE_CHAT,1);
            state.liveChatMessages.unshift(action.payload);
        },

    
    }

});

export const {addMessage,removeMessage} = ChatSlice.actions;
export default ChatSlice.reducer;