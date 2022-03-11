import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Header from './components/Header';
import { apis } from './axios/axios';

const App = () => {
  const [contentData, setContentData] = useState();
  const [contentSector, setContentSector] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { content: content, sector: sector },
      } = await apis();
      setContentData(content);
      setContentSector(sector);
    };
    fetchData();
  }, []);
  // console.log(contentData, contentSector);

  return (
    <BrowserRouter>
      <Header contentSector={contentSector} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/news" />} />
        <Route path="/:type" element={<Main />} />
        <Route path="/:type/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
