import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
let BASE_URL = "https://news.drafts.az/api"

const initialState = { 
    comments : [],
    commetStatue : false
}

export const getComments = createAsyncThunk ( 
    "comment/this_news",
    async (id) => {
        const response = await fetch(`${BASE_URL}/news/${id}/comments`)
        const data = await response.json()
        return data
    }
)
const token = localStorage.getItem("token")

export const addComment = createAsyncThunk(
    'news_comment/comments',
    async ({id,content}) => {
        const response = await fetch(`${BASE_URL}/news/${id}/comments`,{
            method : "POST",
            headers : {
                "content-type" : "application/json",
                "authorization" : `Bearer ${token}`
            },
            body : JSON.stringify({content})
        })
        const data = await response.json()
        return data;
    }
)

export const commentSlice = createSlice({
    name : "comments",
    initialState,
    reducers : {
        changeStatus : (state) => {
            state.commetStatue = !state.commetStatue
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getComments.fulfilled , (state , action) => {            
            state.comments = action.payload
        })
    }
})
export const { changeStatus } = commentSlice.actions
export default commentSlice.reducer