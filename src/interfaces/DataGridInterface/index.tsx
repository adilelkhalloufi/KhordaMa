import { Row } from '@tanstack/react-table'

export interface TItem {
    key?: string,
    label?: string,
    icon?: any; 
    onClick?: () => void; 
    disabled?: boolean,
    children?: TItem[]
}
export interface DataTableRowActionsProps<TData> {
    row: Row<TData>,
    title?:string,
    items? : TItem[]
}

