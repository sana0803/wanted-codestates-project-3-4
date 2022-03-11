import React from 'react';
import styled from 'styled-components';
import { BsUpload } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
// import Banner from 'Banner';
const DUMMY_DATA = {
  id: 57,
  sector_id: 2,
  title: '웹 3.0은 사기일까, 미래의 인터넷일까?',
  body: '웹 3.0은 무엇일까요? 읽기만 가능했던 1세대, 읽기와 쓰기가 모두 가능했던 2세대를 지나 이제 인터넷이 3세대로 진입하는 중이라는데? 블록체인과 암호화폐 산업의 발전과 맞물려 급부상 중인 웹 3.0의 현 주소와 미래를 확인해보세요!',
  image:
    'https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_30.png',
  link: 'tnJwx53uLEU',
  upload_date: '2022-01-20',
  like_cnt: 0,
  like_top: 0,
};
const Youtube = () => {
  return (
    <YoutubeContainer>
      {/* <Banner /> */}
      <MainContainer>
        <Title>{DUMMY_DATA.title}</Title>
        <ButtonContainer>
          <IconBtn>
            <FiHeart size="32" />
          </IconBtn>
          <IconBtn>
            <BsUpload size="32" />
          </IconBtn>
        </ButtonContainer>
      </MainContainer>
    </YoutubeContainer>
  );
};

const YoutubeContainer = styled.div`
  width: 720px;
  background-color: white;
`;
const MainContainer = styled.div`
  display: flex;
  width: 720px;

  justify-content: space-between; ;
`;
const ButtonContainer = styled.div``;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 20px;
`;
const IconBtn = styled.button`
  border: none;
  color: silver;
  background-color: white;
  padding: 20px;
`;

export default Youtube;
