import { createSlice  } from "@reduxjs/toolkit";
const initialState = {
    modeStatue : true
}
export const lightDarkModeSlice = createSlice({
    name : "mode",
    initialState ,
    reducers : {
        changeLightMode : (state) => {
            state.modeStatue = !state.modeStatue
        }
    }
})
export const { changeLightMode } = lightDarkModeSlice.actions
export default lightDarkModeSlice.reducer