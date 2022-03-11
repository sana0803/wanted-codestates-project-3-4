import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ContentList from '../components/ContentList';
import MainTop from '../components/mainTop/MainTop';
import Header from '../components/Header';

const Main = () => {
  const { type } = useParams();
  return (
    <MainWrap>
      <Header />
      <MainContainer>
        <MainTop />
        <ContentList type={type} />
      </MainContainer>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  background-color: #f7f6fb;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  width: 720px;
  padding-top: 60px;
  background-color: #fff;
`;
export default Main;
