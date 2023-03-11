import { createSlice } from "@reduxjs/toolkit"
const searchSlice = createSlice({

    name: "search",
    initialState: {
        text: "cricket"
    },
    reducers: {
        searchVideos: (state, action) => {
            state.text = action.payload
            console.log(action.payload);
        }
    }

})

export const { searchVideos } = searchSlice.actions

export default searchSlice.reducer