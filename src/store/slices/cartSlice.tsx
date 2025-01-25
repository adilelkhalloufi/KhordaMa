import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@/interfaces/models/admin'

// export type anyState = any

const initialState: any = {
  items: [],
  total_command: 0,
  total_payment: 0,
  rest_a_pay: 0,
  is_invoice: false,
  discount: 0,
  advance: 0,
  nbr_items: 0,
  prescription: null,
  payment: null,
  customer: null,
  is_customer: false,
  assurance: null,
  glass_types: [],
}

export const anySlice = createSlice({
  name: 'any',
  initialState: initialState,
  reducers: {
    clearany: (state: any) => {
      state = initialState
      return state
    },
    addToany: (state: any, action) => {
      const { id } = action.payload
      const newState = { ...state }

      const itemIndex = newState?.items?.findIndex(
        (element: any) => element.id == id
      )
      if (itemIndex > -1) {
        newState.items[itemIndex].qte += 1 // Modify the draft directly
      } else {
        newState.items.push(action.payload) // Add the new item directly
      }
      updateNbItems(state)
    },
    minisToany: (state, action) => {
      const { id } = action.payload
      console.log('minisToany ', id)

      const newState = { ...state }

      const itemIndex = newState.items.findIndex(
        (element: any) => element.id == id
      )
      console.log('itemIndex ', itemIndex)

      if (itemIndex > -1) {
        if (newState.items[itemIndex].qte > 1) {
          newState.items[itemIndex].qte -= 1
        }
      }
      updateNbItems(state)
    },
    deleteItem: (state: any, action) => {
      const { index, slug } = action.payload
      const newState = { ...state }

      console.log('slug', slug)

      newState.items.splice(index, 1)
      updateNbItems(state)
    },

    addCustomer: (state: any, action) => {
      state.customer = action.payload
    },
    ClearCustomer: (state: any) => {
      state.customer = null
    },
    IsCustomer: (state: any, action) => {
      state.is_customer = action.payload
    },

    addPrescription: (state: any, action) => {
      state.prescription = action.payload
    },
    ClearPrescription: (state: any) => {
      state.prescription = null
    },

    addPayment: (state: any, action) => {
      const { payement } = action.payload
      const newState = { ...state }
      newState.payment = payement
      return newState
    },
    removePayment: (state: any) => {
      const newState = { ...state }
      newState.payment = null
      return newState
    },
    addGlassType: (state, action: PayloadAction<any[]>) => {
      state.glass_types = action.payload
      updateNbItems(state)
    },
    IsInvoice: (state: any, action) => {
      state.is_invoice = action.payload
    },
    addDiscount: (state: any, action) => {
      state.discount = action.payload
      updateNbItems(state)
    },
    addAdvance: (state: any, action) => {
      state.advance = action.payload
      updateNbItems(state)
    },

    addAssurance: (state: any, action) => {
      state.assurance = action.payload
    },
    reset: (state) => {
      state = initialState

      return state
    },
  },
})

export const {
  addAssurance,
  addCustomer,
  addDiscount,
  addGlassType,
  addPayment,
  addToany,
  addPrescription,
  addAdvance,
  minisToany,
  IsCustomer,
  IsInvoice,
  clearany,
  deleteItem,
  ClearCustomer,
  ClearPrescription,
  removePayment,
  reset,
} = anySlice.actions

const updateNbItems = (state: any) => {
  let total_products: number = state.items.reduce(
    (total: number, produit: Product) =>
      Number(total) + Number(produit.qte) * Number(produit.price),
    0
  )
  let total_type_glasses: number = state.glass_types.reduce(
    (total: number, produit: any) =>
      Number(total) + Number(produit?.price),
    0
  )

  state.nbr_items = state.items.length
  state.total_command = total_products + total_type_glasses
  state.total_payment = state.advance
  state.rest_a_pay =
    Number(total_products) +
    Number(total_type_glasses) -
    Number(state.discount) -
    Number(state.advance)
}
export default anySlice.reducer
