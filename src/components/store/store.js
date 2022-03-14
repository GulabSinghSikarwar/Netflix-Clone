import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./Slices/userSlice";
import showDetailsSlice from "./Slices/movieDetails";
import loadingSlice from "./Slices/loadingSlice";
const store=  configureStore({
    reducer : {
        userSlice:userSlice.reducer,
        showDetailsSlice:showDetailsSlice.reducer,
        loadingSlice:loadingSlice.reducer

    }
})
export default store
