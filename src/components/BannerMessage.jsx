import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
const BannerContainer = styled.div`
  display: flex;
  font-size: 22px;
  align-items: center;
`;

const Banner2 = styled.span`
  background-color: #1276f0;
  background-color: ${props =>
    props.type === 'youtube' ? '#D80404' : null}; // youtube일 때 색깔
  background-color: ${props =>
    props.type === 'news' ? '#659DF9' : null}; // news일 때 색깔
  background-color: ${props =>
    props.type === 'report' ? '#7F73B0' : null}; // Report일 때 색깔

  // 6AE0AA
  color: white;
  font-size: 15px;
  padding: 3px 5px;
  margin-left: 20px;
  margin-bottom: 3px;
  border-radius: 5px;
`;

// BannerMessage 컴포넌트 사용예시
// <BannerMessage text="여기에 적으면 내용이 나옵니다">

const BannerMessage = ({ text }) => {
  const { type } = useParams();
  // let capitalizedType = type[0].toUpperCase() + type.slice(1);
  // console.log(capitalizedType);
  return (
    <div>
      <BannerContainer>
        {/* <div>{text}</div> <Banner2 type={type}>{capitalizedType}</Banner2> */}
      </BannerContainer>
    </div>
  );
};

BannerMessage.propTypes = {
  text: PropTypes.string,
};

export default BannerMessage;
