import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./Slices/SideBarSlice"

const store = configureStore({
   
    reducer:{
       sideBar: SideBarSlice,
    }

});

export default store;