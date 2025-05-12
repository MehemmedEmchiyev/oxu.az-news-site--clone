import { createSlice } from "@reduxjs/toolkit";
import { changeStatus } from "./commentsSlice";

const initialState = {
    value : "",
    searchBarStatus : false
}

export const searchSlice = createSlice({
    name : "search",
    initialState,
    reducers : {
        changeStatue : (state) => {
            state.searchBarStatus = !state.searchBarStatus
        },
        setValue : (state ,action) => {
            state.value = action.payload   
        }
    }
})

export const { changeStatue ,setValue } = searchSlice.actions

export default searchSlice.reducer