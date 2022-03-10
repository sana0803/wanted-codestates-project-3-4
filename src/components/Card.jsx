import React from 'react';
import PropTypes from 'prop-types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Card = ({ matchData, addData, liked, setLiked }) => {
  const handleLiked = () => {
    setLiked(!liked);
  };
  return (
    <>
      {matchData.map((value, index) => {
        if (addData ? index : index < 4) {
          return (
            <li key={index}>
              <img src={value.image} alt={value.title} />
              <p>
                {value.upload_date}
                <span onClick={handleLiked}>
                  {liked ? (
                    <AiFillHeart color="red" size={25} />
                  ) : (
                    <AiOutlineHeart size={25} />
                  )}
                  7
                </span>
                <a
                  href={`https://www.youtube.com/watch?v=${value.link}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  공유하기
                </a>
              </p>
            </li>
          );
        }
      })}
    </>
  );
};

Card.propTypes = {
  matchData: PropTypes.array,
  addData: PropTypes.bool,
  liked: PropTypes.bool,
  setLiked: PropTypes.func,
};

export default Card;
