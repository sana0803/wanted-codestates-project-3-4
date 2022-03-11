import React from 'react';
import PropTypes from 'prop-types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Card = ({ liked, setLiked, index, item }) => {
  const handleLiked = () => {
    setLiked(!liked);
  };
  return (
    <>
      <li key={index}>
        <img src={item.image} alt={item.title} />
        <p>
          {item.upload_date}
          <span onClick={handleLiked}>
            {liked ? (
              <AiFillHeart color="red" size={25} />
            ) : (
              <AiOutlineHeart size={25} />
            )}
            7
          </span>
          <a
            href={`https://www.youtube.com/watch?v=${item.link}`}
            rel="noreferrer"
            target="_blank"
          >
            공유하기
          </a>
        </p>
      </li>
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
