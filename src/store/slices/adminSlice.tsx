import { Admin } from '@/interfaces/admin';
import { createSlice } from '@reduxjs/toolkit';

export type AdminState = Admin | null;

const initialState: AdminState = {
  token: '',
  user: {
    id: 0,
    name: '',
    email: '',
    password: '',
    role: '',
    token: '',
  },
  favoris :[]

};

export const adminSlice = createSlice({
  name: 'admin',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
      return state;
    },

    logout: (state) => {
      state = null;
      return state;

    },
  },
});

export const { login, logout } = adminSlice.actions;

export default adminSlice.reducer;