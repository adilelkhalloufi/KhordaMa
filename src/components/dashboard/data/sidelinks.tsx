import { webRoutes } from '@/routes/web'
import {
    IconBasket,
    IconBox,
    IconBrandMedium,
    IconBuilding,
    IconCashRegister,
    IconFileInvoice,
    IconLayoutDashboard,
    IconPackages,
    IconSettings,
    IconSettings2,
    IconShoppingCart,
    IconTruck,
    IconTruckDelivery,
    IconUsers,
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: webRoutes.Dashboard,
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Vente',
    label: '',
    href: webRoutes.Vente,
    icon: <IconBasket size={18} />,
  },
  {
    title: 'Achat',
    label: '',
    href: webRoutes.Achat,
    icon: <IconShoppingCart size={18} />,
  },
  {
    title: 'Facture',
    label: '',
    href: webRoutes.Facture,
    icon: <IconFileInvoice size={18} />,
  },
  {
    title: 'Fournisseur',
    label: '',
    href: webRoutes.Fournisseur,
    icon: <IconTruck size={18} />,
  },
  {
    title: 'Produit',
    label: '',
    href: webRoutes.Produit,
    icon: <IconBox size={18} />,
  },
  {
    title: 'Commandes',
    label: '',
    href: webRoutes.Commandes,
    icon: <IconTruckDelivery size={18} />,
  },
  {
    title: 'Clients',
    label: '',
    href: webRoutes.Clients,
    icon: <IconUsers size={18} />,
  },
  {
    title: 'Caisse',
    label: '',
    href: webRoutes.Caisse,
    icon: <IconCashRegister size={18} />,
  },
  {
    title: 'Stock',
    label: '',
    href: webRoutes.Stock,
    icon: <IconPackages size={18} />,
  },
 
 
 
   
  {
    title: 'Settings',
    label: '',
    href: '',
    icon: <IconSettings size={18} />,
    sub: [
      {
        title: 'Marque',
        label: '',
        href: webRoutes.Marque,
        icon: <IconBrandMedium size={18} />,
      },
      {
        title: 'Parametre',
        label: '',
        href: webRoutes.Parametre,
        icon: <IconSettings2 size={18} />,
      },
      {
        title: 'Société',
        label: '',
        href: webRoutes.Societe,
        icon: <IconBuilding size={18} />,
      },
  
    ],
  },
]
