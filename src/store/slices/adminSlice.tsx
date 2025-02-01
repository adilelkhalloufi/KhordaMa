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
  register: {
    company_name: '',
    role: '',
    password: '',
    email: '',
    specialitie_id: 0,
    interseing_id: [],
    phone: '',
    address: '',
    zip_code: '',
    city: '',
    country: '',
    agreement: false,
    company_logo: '',
    first_name: '',
    last_name: '',
  },
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
    },
    register: (state, action) => {
      state.register = {
        ...state.register,
        [action.payload.key]: action.payload.value,
      };
    },
    logout: (state) => {
      state = null;
    },
  },
});

export const { login, logout, register } = adminSlice.actions;

export default adminSlice.reducer;