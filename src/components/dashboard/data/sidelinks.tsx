import { webRoutes } from '@/routes/web'
import {
  IconBox,
  IconFileInvoice,
  IconHeart,
  IconLayoutDashboard,
  IconSettings,
  IconSettings2,
  IconShoppingCart,

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
    title: 'Produit',
    label: '',
    href: webRoutes.dashboard_product,
    icon: <IconBox size={18} />,
  },
  {
    title: 'Commandes',
    label: '',
    href: webRoutes.dashboard_order,
    icon: <IconShoppingCart size={18} />,
  },
  {
    title: 'Favoris',
    label: '',
    href: webRoutes.dashboard_favris,
    icon: <IconHeart size={18} />,
  },
  // {
  //   title: 'Facture',
  //   label: '',
  //   href: webRoutes.Facture,
  //   icon: <IconFileInvoice size={18} />,
  // },
  // {
  //   title: 'Settings',
  //   label: '',
  //   href: 'settings',
  //   icon: <IconSettings size={18} />,
  //   sub: [

  //     {
  //       title: 'Parametre',
  //       label: '',
  //       href: webRoutes.Parametre,
  //       icon: <IconSettings2 size={18} />,
  //     },


  //   ],
  // },
]
