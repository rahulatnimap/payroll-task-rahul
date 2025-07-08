import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    leftSidebar : false
}

const homeSlice = createSlice({
    name : "home",
    initialState,
    reducers: {
        setLeftSidebar: (state , action) => {
            state.leftSidebar = action.payload
        }
    }
})

export default homeSlice.reducer
export const { setLeftSidebar } = homeSlice.actions