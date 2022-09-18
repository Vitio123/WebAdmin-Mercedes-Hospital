// Import React
import React from 'react'
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';

//Import Project
import Logo from "../logo.svg"

const usarStyles = makeStyles({
  logoNavegacion: {
    width: '50%'
  },
  ContainerLogoNavegacion: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Navegacion = () => {
  const classes = usarStyles();
  return (
    <div className={classes.ContainerLogoNavegacion}><Drawer variant='permanent' open={true}>
      <img className={classes.logoNavegacion} src={Logo} alt='Quality Logo'/>
    </Drawer></div>
  )
}

export default Navegacion