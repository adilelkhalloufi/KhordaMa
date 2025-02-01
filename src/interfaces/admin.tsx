export interface Admin {
    token?: string
    user?: User
    register?: RegisterForm
}

export interface RegisterForm {

    company_name?: string
    role?: string
    password?: string
    email?: string
    specialitie_id?: number
    interseing_id?: number[]
    phone?: string
    address?: string
    zip_code?: string
    city?: string
    country?: string
    agreement?: boolean
    company_logo?: string
    first_name?: string
    last_name?: string

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
    id: any
    name: any
    slug?: string
    description?: string
    subcategories?: Categorie[]
}

export interface Unite {
    id: any
    name: any
    slug?: string
    description?: string
}


export interface Setting {
    id: any
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

export interface Status {

    name: any
    color?: "default" | "secondary" | "destructive" | "outline"
}
export interface Product {

    id: any
    name: any
    image?: string
    reference?: string
    description?: string
    price: number
    quantity: number
    qte: number
    categorie?: Categorie
    unite?: Unite
    user?: User
    status?: Status
    auction?: string
    date_end_auction?: Date
    conditions_document?: string
    conditions_document_price?: number
    show_company?: boolean
}




