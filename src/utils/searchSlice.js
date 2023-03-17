import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cacheResults: (state, action) => {
            // if (Object.keys(state).length > 2) {
            //     const entries = Object.entries(state);
            //     const firstElement = entries.shift();
            //     const oldProps = Object.fromEntries(entries)
            //     state = Object.assign(oldProps, action.payload)
            //     // state = firstElement
            // } else {
            //     state = Object.assign(state, action.payload)
            // }
            state = Object.assign(state, action.payload)
        }
    }
})

export const { cacheResults } = searchSlice.actions

export default searchSlice.reducer


/*
*{}
*{"i":["a","b","c"]}
*{"ip":["aq","bq","cq"]}
*/