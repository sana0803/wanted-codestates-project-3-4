import React from 'react';
import Banner from './Banner';
import styled from 'styled-components';
import TitleContainer from './TitleContainer';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Report = () => {
  const { id } = useParams();
  const ContentId = id;
  const filterData = useSelector(
    state => state.dataReducer.data.content,
  )?.filter(({ id }) => id === Number(ContentId))[0];

  return (
    <ReportContainer>
      <Banner title={'어떻게 투자할까'} />
      <ImageContainer>
        <img src={filterData?.image} />
      </ImageContainer>
      <TitleContainer
        id={filterData?.id}
        title={filterData?.title}
        link={filterData?.link}
      />
      <Body>{filterData?.body}</Body>
      <ReportBtnContainer>
        <ReportHref href={filterData?.link}>전체 리포트 읽기</ReportHref>
      </ReportBtnContainer>
    </ReportContainer>
  );
};

const ReportContainer = styled.div`
  width: 720px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

const Body = styled.div`
  padding: 15px;
  font-size: 16px;
  white-space: pre-wrap;
`;

const ReportBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

const ReportHref = styled.a`
  width: 680px;
  height: 48px;
  display: block;
  margin: 0 auto;
  background-color: #bfe0ff;
  color: #3081cc;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 30px;
  line-height: 48px;
  text-decoration: none;
  text-align: center;

  &:hover {
    transition: all 0.2s ease-in;
    background-color: var(--main-color);
    color: #fff;
  }
`;

export default Report;
