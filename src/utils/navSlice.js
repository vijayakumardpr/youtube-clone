import { createSlice } from "@reduxjs/toolkit"

const navSlice = createSlice({

    name: "nav",
    initialState: {
        isTrue: true
    },
    reducers: {
        toggle: (state) => {
            state.isTrue = !state.isTrue
        }
    }

})

export const { toggle } = navSlice.actions

export default navSlice.reducer