import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./Slices/userSlice";

const store=  configureStore({
    reducer : {
        userSlice:userSlice.reducer
    }
})
export default store