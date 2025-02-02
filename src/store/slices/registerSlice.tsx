import { RegisterForm } from '@/interfaces/admin';
import { createSlice } from '@reduxjs/toolkit';


const initialState: RegisterForm =
{
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
};


export const registerSlice = createSlice({
    name: 'register',
    initialState: initialState,
    reducers: {

        register: (state, action) => {
            console.log("register : ", action.payload);
            state = {
                ...state,
                [action.payload.key]: action.payload.value,
            };

            return state;
        },
        toggleIntersting: (state, action) => {
            if (state.interseing_id.includes(action.payload)) {
                state.interseing_id = state.interseing_id.filter((id) => id !== action.payload);
            } else {
                state.interseing_id.push(action.payload);
            }
            return state;
        },
        restRegister: (state) => {
            state = initialState;
            return state;
        }


    },
});

export const { register, toggleIntersting, restRegister } = registerSlice.actions;

export default registerSlice.reducer;