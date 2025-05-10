import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
let BASE_URL = 'https://news.drafts.az/api'

const initialState = {
    user : {}
}
const token = localStorage.getItem("token")

export const login = createAsyncThunk("login" ,
    async ( {username, password} ) => {
        const response = await fetch(`${BASE_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, password })
        })
        
        const data = await response.json();
        if(data.token){localStorage.setItem("token",data.token)}
        return data;
    }
)
export const getUser = createAsyncThunk("user",
    async({username,password}) => {
      const response = await fetch(`${BASE_URL}/users`,{
        method : 'GET',
        headers : {
          "content-type" : "application/json",
          "authorization" : `Bearer ${localStorage.getItem("token")}`
        }
      })
      const data = await response.json()
      return data
    }
)



export const loginSlice = createSlice({
    name : "login",
    initialState,
    extraReducers : (builder) => {
      builder.addCase(getUser.fulfilled , (state , action) => {
        let username = action.meta.arg.username
        let password = action.meta.arg.password
        state.user = action.payload?.find(item => item.username == username)
      })
    }  
})

export default loginSlice.reducer