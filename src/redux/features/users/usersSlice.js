import {createSlice} from '@reduxjs/toolkit';

export const UsersEmptyState = [];

export const usersSlice = createSlice({
  name: 'saveUsers',
  initialState: UsersEmptyState,
  reducers: {
    createUsers: (state, action) => {
      return [].concat(action.payload);
    },
  },
});

export const {createUsers} = usersSlice.actions;
