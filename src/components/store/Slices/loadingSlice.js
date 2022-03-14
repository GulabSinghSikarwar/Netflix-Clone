import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:true,
    isSignLoading:false,
}
const loadingSlice= createSlice({
    name:"loading",
    initialState:initialState,
    reducers:{
        setLoading:(state ,actions)=>{
            state.isLoading=actions.payload;

        },
        setSignLoading:(state,actions)=>{
            state.isSignLoading=actions.payload

        }

    }
})
export const {setLoading}=loadingSlice.actions
export default loadingSlice
