import React, { useEffect } from 'react';
import styled from 'styled-components';
import TitleContainer from './TitleContainer';
import Banner from './Banner';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Youtube = () => {
  const { id } = useParams();
  const ContentId = id;
  const filterData = useSelector(
    state => state.dataReducer.data.content,
  )?.filter(({ id }) => id === Number(ContentId))[0];
  useEffect(() => {
    console.log(filterData);
  }, [filterData]);

  return (
    <YoutubeContainer>
      <Banner title={'블록체인 NOW'} />
      <CustomIframe>
        <iframe
          width="720"
          height="350"
          src={'https://www.youtube.com/embed/' + filterData?.link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </CustomIframe>
      <TitleContainer
        id={filterData?.id}
        title={filterData?.title}
        link={filterData?.link}
      />
      <Body>{filterData?.body}</Body>
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
