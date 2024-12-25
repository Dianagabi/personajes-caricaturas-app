import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PlimPlimPage, PersonajePage, BlueyPage, SearchPage } from '../pages';
import { Navbar } from '../../ui/components';

export const PersonajesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="bluey" element={<BlueyPage />} />
          <Route path="plimplim" element={<PlimPlimPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="personaje/:id" element={<PersonajePage />} />

          {/* Search hero by id */}

          <Route path="/" element={<Navigate to="/bluey" />} />
        </Routes>
      </div>
    </>
  );
};
