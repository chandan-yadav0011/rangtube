import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./Slices/SideBarSlice"
import SearchSlice from "./Slices/SearchSlice"
import ChatSlice from "./Slices/ChatSlice"

const store = configureStore({
   
    reducer:{
       sideBar: SideBarSlice,
       search : SearchSlice,
       chat   : ChatSlice,
    }

});

export default store;