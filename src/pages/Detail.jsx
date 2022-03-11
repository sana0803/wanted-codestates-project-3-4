import React from 'react';
import Youtube from '../components/detail/Youtube';
import Report from '../components/detail/Report';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';

const Detail = () => {
  let params = useParams();
  return (
    <div>
      <Header />
      <DetailWrap>
        {params.type === 'youtube' ? <Youtube /> : <></>}
        {params.type === 'report' ? <Report /> : <></>}
      </DetailWrap>
    </div>
  );
};

const DetailWrap = styled.div`
  padding-top: 80px;
`;

export default Detail;
