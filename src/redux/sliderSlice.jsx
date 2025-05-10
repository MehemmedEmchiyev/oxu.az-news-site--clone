import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const initialState = {
    slider : []
}
export const getAllSlider = createAsyncThunk(
    "slider",
    async () => {
        const res = axios.get("https://6810b22b27f2fdac24126e9c.mockapi.io/slider/1")
        return (await res).data
    }
)

export const sliderSlice = createSlice({
    name:"slider",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(getAllSlider.fulfilled , (state,action) => {
            state.slider = action.payload
        })
    }
})

export default sliderSlice.reducer