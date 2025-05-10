import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
let BASE_URL = "https://news.drafts.az/api"
const token = localStorage.getItem("token")

const initialState = {
  news : [],
  detailNews : "",
  actionStatue : false
}
export const getLike = createAsyncThunk(
  "actions",
  async ({id,type}) => {

      const response = await fetch(`${BASE_URL}/news/${id}/action/${type}`,{
        method :"POST",
        headers : {
          "content-type" : "application/json",
          "authorization" : `Bearer ${token}`
        }
      })
      if(response.ok) {
        const data = await response.json()
        return data
      }
    }     
)

export const getAllNews = createAsyncThunk(
    "news" ,
    async () => {
      const response = await axios.get(`${BASE_URL}/news`)
      return response.data
    }
)
export const getNews = createAsyncThunk(
  "onenews",
  async (id) => {
    const response = await axios.get(`${BASE_URL}/news/${id}`)
    return response.data
  }
)
export const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers : (builder) => {
    builder.addCase(getAllNews.fulfilled , (state , action) => {
        state.news = action.payload
    })
    builder.addCase(getNews.fulfilled , (state , action) => {
      state.detailNews = action.payload
    })
    builder.addCase(getLike.fulfilled , (state , action) => {
      if(token) state.actionStatue = !state.actionStatue
    })
  }
})


export default newsSlice.reducer