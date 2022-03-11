import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ContentList from '../components/ContentList';
import MainTop from '../components/mainTop/MainTop';

const Main = () => {
  const { type } = useParams();
  return (
    <MainWrap>
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
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const MainContainer = styled.div`
  width: 720px;
  background-color: #fff;
`;
export default Main;
