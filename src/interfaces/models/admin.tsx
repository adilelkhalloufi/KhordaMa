export interface Admin {
  token?: string
  user?: User
}

export interface User {
  id?: number
  name?: string
  email?: string
  password?: string
  role?: string
  token?: string
}

export interface ModalOption {
  handleCancel?: any
  isModalVisible?: any
  isUpdate?: any
}

export interface Company {
  id: string
  name?: string
  email?: string
  phone?: string
  address?: string
  logo?: string
  website?: string
  zip_code?: string
}



export interface Categorie {
  id: number
  name: string
  slug?: string
  description?: string
  subcategories?: Categorie[]
}

export interface Unite {
  id: number
  name: string
  slug?: string
  description?: string
}


export interface Setting {
  id: number
  licence?: string
  expired?: boolean
  expired_date?: Date
  invoice_number?: number
  order_purchase_number?: number
  order_sale_number?: number
  header?: string
  footer?: string
  company_name?: string
}


export interface Product {

  id: number
  name: string
  image?: string
  reference?: string
  description?: string
  price: number
  quantity?: number
  categorie?: Categorie
  unite?: Unite
  user?: User
  statue?: string
  auction?: string
  date_end_auction?: Date
  conditions_document?: string
  conditions_document_price?: number
  show_company?: boolean
}





