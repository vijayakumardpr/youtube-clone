import { createSlice } from "@reduxjs/toolkit"

const navSlice = createSlice({

    name: "nav",
    initialState: {
        isTrue: true
    },
    reducers: {
        toggle: (state) => {
            state.isTrue = !state.isTrue
        },

        navHide: (state) => {
            state.isTrue = false
        }
    }

})

export const { toggle, navHide } = navSlice.actions

export default navSlice.reducer