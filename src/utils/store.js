import { configureStore } from "@reduxjs/toolkit"
import liveSlice from "./liveSlice"
import navSlice from "./navSlice"
import searchSlice from "./searchSlice"



const store = configureStore({
    reducer: {
        nav: navSlice,
        search: searchSlice,
        chat: liveSlice

    }
})


export default store 