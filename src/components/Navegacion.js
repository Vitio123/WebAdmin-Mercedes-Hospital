// Importaciones React
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

//Importaciones Proyecto
import Logo1 from '../logo.svg';
import Logo2 from '../logo2.svg';

import OpcionMenu from './OpcionMenu';
import { usarStyles } from '../Estilos';
import routes from '../routes';
import { IconButton } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import clsx from 'clsx';

const Navegacion = () => {
  const clases = usarStyles();
  const [abierto, setabierto] = useState(true);

  const palancaNavegacion = () => {
    setabierto(!abierto);
  };

  return (
    <div>
      <Drawer
        clases={{
          paper: clsx(
            clases.NavigacionDrawer,
            !abierto && clases.DrawerNavegacionColapsar
          ),
        }}
        variant="persistent"
        open={true}>
        <div
          className={clsx(
            clases.BarraHNavegacion,
            !abierto && clases.BarraHNavegacionColapsar
          )}>
          <IconButton onClick={palancaNavegacion}>
            {abierto ? <ChevronLeft /> : <MenuIcon />}
          </IconButton>
        </div>
        <div className={clases.ContainerLogoNavegacion}>
          <img
            className={clases.logoNavegacion}
            src={abierto ? Logo1 : Logo2}
            alt="Sistema Logo"
          />
        </div>
        <List className={clases.NavegacionLista}>
          {routes.map((route, index) => {
            return (
              <React.Fragment>
                {route.path === '/sign-out' && (
                  <div className={clases.EspaciadorNavegacion}></div>
                )}
                <OpcionMenu
                  texto={route.texto}
                  icono={route.icono}
                  iconoActivo={route.iconoActivo}
                  path={route.path}
                />
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default Navegacion;
