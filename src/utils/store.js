import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./Slices/SideBarSlice"
import SearchSlice from "./Slices/SearchSlice"

const store = configureStore({
   
    reducer:{
       sideBar: SideBarSlice,
       search:  SearchSlice,
    }

});

export default store;