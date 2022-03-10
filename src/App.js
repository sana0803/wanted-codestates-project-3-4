import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Routes>
        <Route path="/:type" element={<Main />} />
        <Route path="/:type/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
