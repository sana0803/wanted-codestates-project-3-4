import React from 'react';
import styled from 'styled-components';
import { BsUpload } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { clickLike } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const TitleContainer = ({ title, link }) => {
  const { id, type } = useParams();
  const dispatch = useDispatch();
  const newId = Number(id);
  const contentObj = useSelector(
    state => state.dataReducer.data.content,
  )?.filter(({ id }) => id === newId)[0];

  const clickHeartBtn = () => {
    dispatch(clickLike(newId));
  };

  return (
    <MainContainer>
      <Title>{title}</Title>
      <ButtonContainer>
        <IconBtn onClick={clickHeartBtn}>
          {contentObj?.isClick ? (
            <FaHeart size="32" color="red" />
          ) : (
            <FiHeart size="32" />
          )}
        </IconBtn>
        <IconHref
          href={
            type === 'youtube'
              ? 'https://www.youtube.com/watch?v=' + link
              : link
          }
        >
          <BsUpload size="32" />
        </IconHref>
      </ButtonContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 15px;
  display: flex;
  width: 720px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  appearance: none;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  width: 590px;
`;

const IconBtn = styled.button`
  border: 0;
  outline: 0;
  background-color: white;
  cursor: pointer;
`;

const IconHref = styled.a`
  background-color: white;
  text-decoration: none;
  color: black;
  margin: 10px;
`;

TitleContainer.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

export default TitleContainer;
