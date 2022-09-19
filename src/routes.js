import IconoDashBoard from './assets/DashboardIcon.svg';
import IconoDashBoardActivo from './assets/DashboardIconActive.svg';
import IconoAccounts from './assets/AccountsIcon.svg';
import IconoAccountsActivo from './assets/AccountsIconActive.svg';

import SignOutIcon from './assets/SignOutIcon.svg';

import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';

const routes = [
  {
    texto: 'Dashboard',
    path: '/',
    icono: IconoDashBoard,
    iconoActivo: IconoDashBoardActivo,
    componente: Dashboard,
  },
  {
    texto: 'Cuentas',
    path: '/Cuentas',
    icono: IconoAccounts,
    iconoActivo: IconoAccountsActivo,
    componente: Accounts,
  },
  {
    texto: 'Cerrar Sesión',
    path: '/sign-out',
    icono: SignOutIcon,
    iconoActivo: SignOutIcon,
  },
];

export default routes;
