import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BsUpload } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clickLike } from '../../redux/actions';

const Slide = ({ img, title, id, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector(state => state);

  let data = [];

  data = state?.dataReducer.data.content;
  data = data?.filter(obj => obj.id === id);

  return (
    <div>
      <ImgContainer
        width="720px"
        height="360px"
        src={
          img
            ? img
            : 'https://images.unsplash.com/photo-1634117622592-114e3024ff27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'
        }
        onClick={() => {
          navigate(`/${type}/${id}`);
        }}
      />
      <YoutubeContainer>
        {/* <Banner /> */}
        <MainContainer>
          <Title>{title}</Title>
          <ButtonContainer>
            <IconBtn clicked={+data[0]?.isClick}>
              <FiHeart
                size="32"
                onClick={() => {
                  dispatch(clickLike(id));
                }}
              />
              {data[0].like_cnt}
            </IconBtn>
            <IconBtn>
              <BsUpload
                size="32"
                onClick={() => {
                  type === 'youtube'
                    ? window.open(
                        `https://www.youtube.com/watch?v=${data[0].link}`,
                      )
                    : window.open(data[0].link);
                }}
              />
            </IconBtn>
          </ButtonContainer>
        </MainContainer>
      </YoutubeContainer>
    </div>
  );
};

const ImgContainer = styled.img`
  cursor: pointer;
`;

const YoutubeContainer = styled.div`
  width: 720px;
  background-color: white;
`;
const MainContainer = styled.div`
  /* display: flex; */
  width: 720px;

  justify-content: space-between; ;
`;
const ButtonContainer = styled.div`
  text-align: right;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 20px;
`;
const IconBtn = styled.button`
  border: none;
  color: ${props => (props.clicked === 1 ? 'red' : 'silver')};
  background-color: white;
  padding: 10px;
  cursor: pointer;
`;

Slide.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string,
};

export default Slide;
