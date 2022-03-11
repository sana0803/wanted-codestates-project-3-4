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
  background-color: ${props =>
    props.type === 'youtube' ? '#D80404' : null}; // youtube일 때 색깔
  background-color: ${props =>
    props.type === 'news' ? '#659DF9' : null}; // news일 때 색깔
  background-color: ${props =>
    props.type === 'report' ? '#B72CA0' : null}; // Report일 때 색깔
  background-color: ${props =>
    props.text === '새로 올라왔어요' ? '#1276f0' : null};
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
  return (
    <div>
      <BannerContainer>
        <div>{text}</div>{' '}
        <Banner2 type={type} text={text}>
          {text === '새로 올라왔어요' ? 'new' : type}
        </Banner2>
      </BannerContainer>
    </div>
  );
};

BannerMessage.propTypes = {
  text: PropTypes.string,
};

export default BannerMessage;
