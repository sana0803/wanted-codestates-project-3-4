import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import { useDispatch } from 'react-redux';
import { getContentData } from './redux/actions';

const App = () => {
  // const dispatch = useDispatch();
  // const click = () => {
  //   dispatch(clickLike(71));
  //   console.log(data);
  // };
  // console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContentData());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/news" />} />
        <Route path="/:type" element={<Main />} />
        <Route path="/:type/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
