//Importaciones React
import React, { useState, useEffect } from 'react';

//MUI
import Icon from '@mui/material/Icon';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//Importaciones Proyecto
import { usarStyles } from '../Estilos';

//Importaciones externas
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

const OpcionMenu = ({ texto, icono, iconoActivo, path }) => {
  const clases = usarStyles();
  const [actividad, setActividad] = useState(true);
  const locacion = useLocation();

  useEffect(() => {
    if (path === '/sing-out') {
      setActividad(true);
      return;
    }
    setActividad(locacion.pathname === path);
  }, [locacion]);

  return (
    <ListItem
      button
      component={Link}
      to={path}
      className={clsx(clases.OpcionMenu, actividad && clases.OpcionMenuActivo)}>
      <ListItemIcon>
        <Icon>
          <img
            className={clases.OpcionMenuIcono}
            src={actividad ? iconoActivo : icono}
            alt={texto}
          />
        </Icon>
      </ListItemIcon>
      <ListItemText
        primary={texto}
        primaryTypographyProps={{ variant: 'body2' }}
      />
    </ListItem>
  );
};

export default OpcionMenu;
