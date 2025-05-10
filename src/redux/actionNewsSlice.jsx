import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
let BASE_URL = "https://news.drafts.az/api"
const initialState = {
    value : 0
}

export const checkLikeStatue = createAsyncThunk("likeStatue",
    async() => {

    }
)

const actionSlice = createSlice({
    name:"likedNews",
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {

    }
})

export const {} = actionSlice.actions

export default actionSlice.reducer