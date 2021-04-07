import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: { icon: 'table', pack: 'solid' },
    link: '/dashboard',
    home: true,
  },
  {
    title: 'MANAGEMENT',
    group: true,
  },
  {
    title: 'Admins',
    icon: 'user',
    link: '/dashboard/users/admin',
  },
  {
    title: 'Drivers',
    icon: 'dot-circle',
    link: '/dashboard/users/driver',
  },
  {
    title: 'Orders',
    icon: 'file-alt',
    link: '/dashboard/orders',
  },
  {
    title: 'SETTINGS',
    group: true,
  },
  {
    title: 'Company',
    icon: 'building',
    link: '/dashboard/settings/company',
  },
  {
    title: 'Subscription',
    icon: 'credit-card',
    link: '/dashboard/settings/subscription',
  },
  {
    title: 'API Keys',
    icon: { icon: 'key', pack: 'solid' },
    link: '/dashboard/settings/api-keys',
  },
];
