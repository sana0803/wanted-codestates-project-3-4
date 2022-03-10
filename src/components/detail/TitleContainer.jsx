import React from 'react';
import styled from 'styled-components';
import { BsUpload } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import PropTypes from 'prop-types';

const TitleContainer = ({ title }) => {
  return (
    <MainContainer>
      <Title>{title}</Title>
      <ButtonContainer>
        <IconBtn>
          <FiHeart size="32" />
        </IconBtn>
        <IconBtn>
          <BsUpload size="32" />
        </IconBtn>
      </ButtonContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  width: 720px;
  justify-content: space-between;
`;

const ButtonContainer = styled.div``;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const IconBtn = styled.button`
  border: none;
  background-color: white;
`;

TitleContainer.propTypes = {
  title: PropTypes.string,
};

export default TitleContainer;
