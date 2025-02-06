import { Order } from "@/interfaces/admin"
import { ColumnDef } from "@tanstack/react-table"
 
export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "product.name",
        header: "Produit",
    },  
    {
        accessorKey: "product.price",
        header: "Prix",
    },
    {
        accessorKey: "quantity",
        header: "Quantité",
    },
    {
        accessorKey: "product.description",
        header: "Description",
    },
    {
        accessorKey: "product.categorie.name.fr",
        header: "Catégorie",
    },
    {
        accessorKey: "product.unite.name.fr",
        header: "Unité",
    },
    {
        accessorKey: "note",
        header: "Note",
    },
    {
        accessorKey: "payment",
        header: "Paiement",
    },
    {
        accessorKey: "status",
        header: "Statut",
    },

]


  