import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navegacion from './components/Navegacion';
import { usarStyles } from './Estilos';
import routes from './routes';

const App = () => {
  const clases = usarStyles();

  return (
    <div className={clases.appRoot}>
      <Router>
        <Navegacion />
        <div>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route exact key={index} path={route.path}>
                  {route.componente}
                </Route>
              );
            })}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
