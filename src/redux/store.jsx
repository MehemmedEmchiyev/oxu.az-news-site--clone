import { configureStore } from '@reduxjs/toolkit'
import newsSlice  from './newsSlice'
import  allCategorySlice  from './allCategory'
import  sliderSlice  from './sliderSlice'
import actionSlice from './actionNewsSlice'
import loginSlice  from './loginSlice'
import registerSlice  from './registerSlice'
import commentSlice  from './commentsSlice'
import lightDarkModeSlice from './lightdarkSlice'
export const store = configureStore({
  reducer: {
    news : newsSlice,
    category : allCategorySlice,
    slider : sliderSlice,
    liked : actionSlice,
    login : loginSlice,
    register : registerSlice,
    comments : commentSlice,
    mode : lightDarkModeSlice
  },
})