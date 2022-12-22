import { createSlice } from "@reduxjs/toolkit"
import uuid from 'react-native-uuid';

export const GroupEmptyState = {
  groupId:'',
  groupName:'',
  groupAvatar:'',
  groupDate: '',
  groupUsers:[{userId:'', userName:'',userAvatar:''}]
}

export const groupSlice = createSlice({
  name: 'group',
  initialState:GroupEmptyState, 
  reducers:{
    createGroup: (state, action) =>{
      state.groupId = uuid.v4();
      state.groupName = action.payload.groupName;
      state.groupDate = new Date().toLocaleDateString()
      state.groupAvatar=''
      state.groupUsers = [].concat(action.payload.saveUsers)
      // console.log(action.payload)
    },
    modifyGroup: (state, action )=>({...state, ...action.payload})
  }
}) 

export const {createGroup, modifyGroup} = groupSlice.actions;