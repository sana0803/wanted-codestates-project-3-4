import React from 'react';
import styled from 'styled-components';
// import { useParams } from 'react-router-dom';
import MainTop from '../components/mainTop/MainTop';

const Main = () => {
  // const { type } = useParams();
  return (
    <MainContainer>
      <MainTop />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: #f7f6fb;
  width: 100vw;
  height: 100vh;
`;
export default Main;
