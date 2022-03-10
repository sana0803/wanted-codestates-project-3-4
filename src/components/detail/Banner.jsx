import { IoIosArrowBack } from 'react-icons/io';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Banner = ({ title = '제목' }) => {
  return (
    <BannerContainer>
      <IoIosArrowBack size="36" />
      <Title>{title}</Title>
      <div></div>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 22px;
`;
Banner.propTypes = {
  title: PropTypes.string,
};

export default Banner;
