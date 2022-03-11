import React from 'react';
import styled from 'styled-components';
import TitleContainer from './TitleContainer';
import Banner from './Banner';
const DUMMY_DATA = {
  id: 51,
  sector_id: 2,
  title: 'SEC의 소송은 앞으로도 계속된다 쭈~~욱!',
  body: "법이 없으니 소송이라도 해서 막겠다!\n크립토 세상을 '서부개척 시대'와 비슷하다고 한 개리 겐슬러 위원장.\n리플, 루나에 이어 앞으로도 소송은 계속될까요?",
  image:
    'https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_26.png',
  link: '3IYrMTKnxTQ',
  upload_date: '2021-12-17',
  like_cnt: 0,
  like_top: 0,
};
const Youtube = () => {
  return (
    <YoutubeContainer>
      <Banner title={'블록체인 NOW'} />
      <CustomIframe>
        <iframe
          width="720"
          height="350"
          src={'https://www.youtube.com/embed/' + DUMMY_DATA.link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </CustomIframe>
      <TitleContainer
        id={DUMMY_DATA.id}
        title={DUMMY_DATA.title}
        link={DUMMY_DATA.link}
      />
      <Body>{DUMMY_DATA.body}</Body>
    </YoutubeContainer>
  );
};

const YoutubeContainer = styled.div`
  width: 720px;
  margin: 0 auto;
`;

const CustomIframe = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
`;

const Body = styled.div`
  padding: 15px;
  font-size: 16px;
  white-space: pre-wrap;
`;

export default Youtube;
