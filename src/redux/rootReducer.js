import homeSlice from "./slices/homeSlice"
import taskSlice from "./slices/taskSlice"
const rootReducer = {
    home : homeSlice,
    task : taskSlice
}

export default rootReducer