import React from 'react';
import Banner from './Banner';
import styled from 'styled-components';
import TitleContainer from './TitleContainer';
const DUMMY_DATA = {
  id: 27,
  sector_id: 3,
  title: '[투자 길잡이] #1 분산투자 관점에서 본 상관관계의 중요성과 한계',
  body: '분산 투자의 핵심인 상관관계. 이것은 두 변수의 움직임이 얼마나 같은 방향 또는 다른 방향으로 움직이는지를 수치화한 것입니다.\n\n그러나 상관관계만으로 투자를 결정하는 건 위험합니다. 상관관계가 같아도 각 자산의 수익률 평균 및 변동성의 크기에 따라 포트폴리오 투자성과는 매우 달라집니다. \n\n변동성의 크기를 고려하지 않는 것은 한 변수가 10만큼 변할 때, 다른 변수가 1만큼 변하는지 혹은 100만큼 변하는지 알려주지 못하고, 얼마나 같은 또는 다른 방향으로 움직이는지만 알려주는 상관관계의 한계입니다. 변동성의 크기는 꾸준한 포트폴리오를 만드는 핵심입니다. \n\n수익률 또한 중요합니다. 평균 수익률은 돈을 버는 포트폴리오의 기준이 되기 때문입니다. 아무리 변동성이 작은 "안정적인 포트폴리오"를 만들더라도 평균 수익률이 너무 작다면 포트폴리오 성과에 불만이 생기기 마련입니다.',
  image:
    'https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/sb-inisht-101.png',
  link: 'https://sandbankofficial.notion.site/1-85cf2ea076d24db59f924611367e5337',
  upload_date: '2021-09-14',
  like_cnt: 2,
  like_top: 0,
};

const Report = () => {
  return (
    <ReportContainer>
      <Banner title={'어떻게 투자할까'} />
      <ImageContainer>
        <img src={DUMMY_DATA.image} />
      </ImageContainer>
      <TitleContainer title={DUMMY_DATA.title} link={DUMMY_DATA.link} />
      <Body>{DUMMY_DATA.body}</Body>
      <ReportBtnContainer>
        <ReportHref href={DUMMY_DATA.link}>전체 리포트 읽기</ReportHref>
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
  padding: 10px 0px;
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
  background-color: #bfe0ff;
  color: #3081cc;
  border-radius: 3px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  line-height: 48px;
  text-decoration: none;
`;

export default Report;
