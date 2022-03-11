// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { clickLike } from '../redux/actions';

const CardContent = styled.li`
  padding: 10px 10px 20px 10px;
  img {
    width: 100%;
    height: 200px;
    cursor: pointer;
  }
  p {
    color: #9fa0a6;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    span {
      display: flex;
      align-items: center;
    }
    a {
      color: #9fa0a6;
      margin-left: 20px;
    }
  }
`;

const Card = ({ item, type, link, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likeData = useSelector(state => state.dataReducer.data.content);
  const likeDataArr = likeData.filter(value => value.id === id);

  const clickCardContent = () => {
    if (type === 'news') {
      window.open([link], '_blank');
    } else {
      navigate(`/${type}/${id}`);
    }
  };

  const isLiked = () => {
    dispatch(clickLike(id));
  };

  return (
    <>
      <CardContent>
        <img
          src={item.image === '' ? '../image/none.png' : item.image}
          alt={item.title}
          onClick={clickCardContent}
        />
        <p>
          {item.upload_date}
          <span>
            <span onClick={isLiked}>
              {likeDataArr[0].isClick ? (
                <AiFillHeart color="red" size={18} />
              ) : (
                <AiOutlineHeart size={18} />
              )}
              {likeDataArr[0].like_cnt}
            </span>

            <a
              href={
                type === 'youtube'
                  ? 'https://www.youtube.com/watch?v=' + link
                  : link
              }
              rel="noreferrer"
              target="_blank"
            >
              <BsUpload size={18} />
            </a>
          </span>
        </p>
      </CardContent>
    </>
  );
};

Card.propTypes = {
  liked: PropTypes.bool,
  setLiked: PropTypes.func,
  index: PropTypes.number,
  item: PropTypes.object,
  type: PropTypes.string,
  link: PropTypes.string,
  id: PropTypes.number,
};

export default Card;
