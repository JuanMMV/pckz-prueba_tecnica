import { configureStore } from '@reduxjs/toolkit'
import { groupSlice } from './features/group/groupSlice'
import modalReducer from './features/modal/modalSlice'
import { usersSlice } from './features/users/usersSlice'

export const store = configureStore({
  reducer:{
    group: groupSlice.reducer,
    modalState: modalReducer,
    saveUsers: usersSlice.reducer
  }
})