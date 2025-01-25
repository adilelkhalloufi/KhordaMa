import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import {  Assurance, Customer, TypeGlasses } from '../../interfaces/models/admin';

// interface DataState {
//   customers: Customer[];
//   glasses: TypeGlasses[];
//   assurances: Assurance[];
//   step: number
// }
export type SettingsState = any;

const initialState: SettingsState = {
  customers: [] as any[],
  glasses: [] as any[],
  assurances: [] as any[],
  step: 1,
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState: initialState,
  reducers: {
    setCustomers: (state, action: PayloadAction<any[]>) => {
      state.customers = action.payload;
    },
    setGlasses: (state, action: PayloadAction<any[]>) => {
      state.glasses = action.payload;
    },
    setAssurances: (state, action: PayloadAction<any[]>) => {
      state.assurances = action.payload;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    resetState: () => initialState,
  },
});

export const { setCustomers, setGlasses, setAssurances, resetState, setStep } = settingSlice.actions;

export default settingSlice.reducer;