import React from 'react';
import styled from 'styled-components';
import TitleContainer from './TitleContainer';
import Banner from './Banner';
const DUMMY_DATA = {
  id: 57,
  sector_id: 2,
  title: '웹 3.0은 사기일까, 미래의 인터넷일까?',
  body: '웹 3.0은 무엇일까요? 읽기만 가능했던 1세대, 읽기와 쓰기가 모두 가능했던 2세대를 지나 이제 인터넷이 3세대로 진입하는 중이라는데? 블록체인과 암호화폐 산업의 발전과 맞물려 급부상 중인 웹 3.0의 현 주소와 미래를 확인해보세요!',
  image:
    'https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_30.png',
  link: 'twm70X8_PxI',
  upload_date: '2022-01-20',
  like_cnt: 0,
  like_top: 0,
};
const Youtube = () => {
  return (
    <YoutubeContainer>
      <Banner title={'블록체인 NOW'} />
      <iframe
        width="560"
        height="315"
        src={'https://www.youtube.com/embed/' + DUMMY_DATA.link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <TitleContainer title={DUMMY_DATA.title} />
      <Body>{DUMMY_DATA.body}</Body>
    </YoutubeContainer>
  );
};

const YoutubeContainer = styled.div`
  width: 720px;
  margin: 0 auto;
`;

const Body = styled.div`
  padding: 10px 0px;
  font-size: 16px;
  white-space: pre-wrap;
`;

export default Youtube;
