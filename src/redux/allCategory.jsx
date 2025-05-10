import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let BASE_URL = "https://news.drafts.az/api"
const initialState = {
    categories : []
}

export const getAllCategory = createAsyncThunk(
    "category",
    async () => {
        const response = await axios.get(`${BASE_URL}/category`)
        return response.data
    }
)

export const allCategorySlice = createSlice({
    name : "category",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(getAllCategory.fulfilled , (state , action) => {
            state.categories = action.payload
        })
    }  

})
export default allCategorySlice.reducer