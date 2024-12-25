import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PersonajesRoutes } from '../personajes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Rutas publicas */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        ></Route>

        {/* Rutas privadas */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <PersonajesRoutes />
            </PrivateRoute>
          }
        ></Route>
        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
