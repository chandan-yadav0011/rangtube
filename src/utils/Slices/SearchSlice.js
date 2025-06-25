import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name:"search",
    initialState:{},
    reducers:{
        addToCache:(state,action)=>{
            state=Object.assign(state,action.payload)
        }
    }
})

export const {addToCache} = SearchSlice.actions;
export default SearchSlice.reducer;