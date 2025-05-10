import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "react-router-dom";
let BASE_URL = 'https://news.drafts.az/api'

const initialState = {
    value: 0
}
export const register = createAsyncThunk("register",
    async ({ username, password, gender, fullname }) => {
            const response = await fetch(`${BASE_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",


                },
                body: JSON.stringify({
                    username, password, gender, fullName: fullname
                })
            })
            const data = await response.json()
            return data
    }
)

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export const { } = registerSlice.actions
export default registerSlice.reducer