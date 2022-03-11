import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../../src/logo.svg';
// import { useSelector } from 'react-redux';

const tabMenu = [
  { id: 0, sector: '알쓸B잡', content: 'news' },
  { id: 1, sector: '유튜브', content: 'youtube' },
  { id: 2, sector: '인사이트', content: 'report' },
];

const Header = () => {
  const navigate = useNavigate();
  const barRef = useRef(null);
  const { type } = useParams();

  const [currentIdx, setCurrentIdx] = useState(
    tabMenu.filter(({ content }) => {
      // console.log(content, type);
      return content === type;
    })[0].id,
  );
  console.log(currentIdx);

  const moveBar = id => {
    barRef.current.style.transform = `translateX(${id}00%)`;
  };

  return (
    <HeaderWrap>
      <img src={logo} />
      <TabContainer>
        {tabMenu.map((item, idx) => (
          <li
            className={currentIdx === idx ? 'active' : ''}
            key={idx}
            onClick={() => {
              navigate(`/${item.content}`);
              setCurrentIdx(idx);
              moveBar(idx);
            }}
          >
            {item.sector}
          </li>
        ))}
        <BottomBar currentIdx={currentIdx} ref={barRef} />
      </TabContainer>
      <SubscribeWrap>
        <span>샌드뱅크 오리지널</span>
        <SubscribeBtn>
          <a href="https://sandbank.io " target="_blank" rel="noreferrer">
            구독하기
          </a>
        </SubscribeBtn>
      </SubscribeWrap>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  height: 60px;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 10;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  img {
    width: 10rem;
    cursor: pointer;
  }
`;

const TabContainer = styled.ul`
  max-width: 720px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  position: relative;

  li {
    transition: all 0.2s ease-in-out;
    width: 8rem;
    height: 100%;
    line-height: 60px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    color: var(--gray);
    font-weight: 600;

    :hover {
      background-color: var(--light-gray);
    }
  }
  .active {
    color: #222;
  }
`;

const BottomBar = styled.div`
  width: 8rem;
  height: 4px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  background-color: var(--main-color);
  transition: all 0.3s ease-in-out;
  transform: translateX(${props => props.currentIdx * '100%'});
`;

const SubscribeWrap = styled.div`
  color: var(--blue);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;

  & > span {
    margin-right: 10px;
  }
`;

const SubscribeBtn = styled.div`
  width: 5.5rem;
  height: 32px;
  background-color: var(--blue);
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  a {
    color: #fff;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: var(--main-color);
  }
`;

export default Header;
