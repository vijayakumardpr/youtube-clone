import { createSlice } from "@reduxjs/toolkit"

const liveSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessages: (state, action) => {
            if (state.messages.length > 5) {
                state.messages.splice(0, 1)
                state.messages.push(action.payload)
            } else {
                state.messages.push(action.payload)
            }

        }
    }

})


export const { addMessages } = liveSlice.actions

export default liveSlice.reducer