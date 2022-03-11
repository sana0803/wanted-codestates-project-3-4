// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs';

import styled from 'styled-components';

const CardContent = styled.li`
  padding: 10px 10px 20px 10px;
  img {
    width: 100%;
    height: 200px;
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

const Card = ({ liked, setLiked, index, item }) => {
  const handleLiked = () => {
    setLiked(!liked);
  };

  // const [href, setHref] = useState();
  return (
    <>
      <CardContent key={index}>
        <img
          src={item.image === '' ? '../image/none.png' : item.image}
          alt={item.title}
        />
        <p>
          {item.upload_date}
          <span onClick={handleLiked}>
            {liked ? (
              <AiFillHeart color="red" size={18} />
            ) : (
              <AiOutlineHeart size={18} />
            )}
            7
            <a
              href={`https://www.youtube.com/watch?v=${item.link}`}
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
};

export default Card;
