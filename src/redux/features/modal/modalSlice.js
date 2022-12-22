import {createSlice} from '@reduxjs/toolkit';

export const ModalInicialState = {
  modalVisible: false,
};

export const modalSlice = createSlice({
  name: 'modalState',
  initialState: ModalInicialState,
  reducers: {
    openModal: (state, action) => {
      state.modalVisible = true
    },
    closeModal: (state, action) =>{ 
      state.modalVisible = false
    },
    updateStateModal: (state) => {
     state.modalVisible = !state.modalVisible
    }
  },
});

export const {openModal, closeModal, updateStateModal} = modalSlice.actions;

export default modalSlice.reducer
