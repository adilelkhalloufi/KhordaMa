import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cart } from '../../interfaces/models/Cart'
import { Product, TypeGlasses } from '@/interfaces/models/admin'

export type CartState = Cart

const initialState: CartState = {
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

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    clearCart: (state: any) => {
      state = initialState
      return state
    },
    addToCart: (state: Cart, action) => {
      const { id } = action.payload
      const newState = { ...state }

      let itemIndex = newState?.items?.findIndex(
        (element: any) => element.id == id
      )
      if (itemIndex > -1) {
        newState.items[itemIndex].qte += 1 // Modify the draft directly
      } else {
        newState.items.push(action.payload) // Add the new item directly
      }
      updateNbItems(state)
    },
    minisToCart: (state, action) => {
      const { id } = action.payload
      console.log('minisToCart ', id)

      const newState = { ...state }

      let itemIndex = newState.items.findIndex(
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
    deleteItem: (state: Cart, action) => {
      const { index, slug } = action.payload
      const newState = { ...state }

      console.log('slug', slug)

      newState.items.splice(index, 1)
      updateNbItems(state)
    },

    addCustomer: (state: Cart, action) => {
      state.customer = action.payload
    },
    ClearCustomer: (state: Cart) => {
      state.customer = null
    },
    IsCustomer: (state: Cart, action) => {
      state.is_customer = action.payload
    },

    addPrescription: (state: Cart, action) => {
      state.prescription = action.payload
    },
    ClearPrescription: (state: Cart) => {
      state.prescription = null
    },

    addPayment: (state: Cart, action) => {
      const { payement } = action.payload
      const newState = { ...state }
      newState.payment = payement
      return newState
    },
    removePayment: (state: Cart) => {
      const newState = { ...state }
      newState.payment = null
      return newState
    },
    addGlassType: (state, action: PayloadAction<TypeGlasses[]>) => {
      state.glass_types = action.payload
      updateNbItems(state)
    },
    IsInvoice: (state: Cart, action) => {
      state.is_invoice = action.payload
    },
    addDiscount: (state: Cart, action) => {
      state.discount = action.payload
      updateNbItems(state)
    },
    addAdvance: (state: Cart, action) => {
      state.advance = action.payload
      updateNbItems(state)
    },

    addAssurance: (state: Cart, action) => {
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
  addToCart,
  addPrescription,
  addAdvance,
  minisToCart,
  IsCustomer,
  IsInvoice,
  clearCart,
  deleteItem,
  ClearCustomer,
  ClearPrescription,
  removePayment,
  reset,
} = cartSlice.actions

const updateNbItems = (state: Cart) => {
  let total_products: number = state.items.reduce(
    (total: number, produit: Product) =>
      Number(total) + Number(produit.qte) * Number(produit.price),
    0
  )
  let total_type_glasses: number = state.glass_types.reduce(
    (total: number, produit: TypeGlasses) =>
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
export default cartSlice.reducer
