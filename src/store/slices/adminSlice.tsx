import { Admin } from '@/interfaces/admin';
import { createSlice } from '@reduxjs/toolkit';

export type AdminState = Admin | null;

const initialState: AdminState = null;

export const adminSlice = createSlice({
  name: 'admin',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
    },
    register: (state, action) => {
      state.register = action.payload;
    },
    logout: (state) => {
      state = null;
    },
  },
});

export const { login, logout, register } = adminSlice.actions;

export default adminSlice.reducer;