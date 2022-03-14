import { createSlice } from "@reduxjs/toolkit";

const initialState={
    showDetails:false,
    movieDetails:null
}
const showDetailsSlice=createSlice(
    {
        name:"showDetails",
        initialState:initialState,
        reducers:{
            showDetails:(state)=>{
                state.showDetails=true

            },
            hideDetails:(state)=>{
                state.showDetails=false
            },
            setMovie:(state,actions)=>{
                state.movieDetails=actions.payload
            }
        }

    }
    )
    export const {showDetails,hideDetails,setMovie}=showDetailsSlice.actions;
    export default showDetailsSlice;
