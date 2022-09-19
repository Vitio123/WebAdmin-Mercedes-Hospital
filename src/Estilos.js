import { makeStyles } from '@mui/styles';

export const usarStyles = makeStyles(() => ({
  appRoot: {
    display: 'flex',
  },
  logoNavegacion: {
    width: '50%',
    cursor: 'pointer',
  },
  ContainerLogoNavegacion: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
    paddingTop: 8,
  },
  NavigacionDrawer: {
    width: 240,
    border: 'none',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    position: 'relative',
    height: '100vh',
  },
  BarraHNavegacion: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 3,
  },
  BarraHNavegacionColapsar: {
    justifyContent: 'center',
    paddingRight: 0,
  },
  DrawerNavegacionColapsar: {
    width: 10,
  },
  NavegacionLista: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  EspaciadorNavegacion: {
    flex: 1,
  },
  OpcionMenuIcono: {
    width: '100%',
  },
  OpcionMenu: {
    width: '80%',
    borderRadius: 8,
    marginBottom: 8,
  },
  OpcionMenuActivo: { backgroundColor: '#EBEBEC' },
}));
