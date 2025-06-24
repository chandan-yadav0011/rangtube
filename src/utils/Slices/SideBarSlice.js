import { createSlice } from "@reduxjs/toolkit";


const SidebarSlice=createSlice({
    name:"sideBar",
    initialState:{
        isMenuOpen:true,
    },

    reducers:{
        toggle:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },

        closer:(state)=>{
            state.isMenuOpen= false
        }

    }

})

export const {toggle,closer} = SidebarSlice.actions;
export default SidebarSlice.reducer;