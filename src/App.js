import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/youtube" />} />
        <Route path="/:type" element={<Main />} />
        <Route path="/:type/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
