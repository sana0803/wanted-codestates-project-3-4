import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../../src/logo.svg';
// import { useSelector } from 'react-redux';

const tabMenu = [
  { sector: '알쓸B잡', content: '' },
  { sector: '유튜브', content: '' },
  { sector: '인사이트', content: '' },
];

const Header = () => {
  const navigate = useNavigate();
  // 나중에 redux에서 받아올거
  const [currentIdx, setCurrentIdx] = useState(0);
  // const currentIdx = useState(state => )

  return (
    <HeaderWrap>
      <img src={logo} />
      <TabContainer>
        {tabMenu.map((item, idx) => (
          // currentIdx={currentIdx}
          <li
            className={currentIdx === idx ? 'active' : ''}
            key={idx}
            currentIdx={currentIdx}
            onClick={() => navigate('/:type')}
          >
            {item.sector}
          </li>
        ))}
        <BottomBar />
      </TabContainer>
      <SubscribeBtn>구독하기</SubscribeBtn>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  height: 60px;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const TabContainer = styled.ul`
  max-width: 720px;
  height: 100%;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  position: relative;

  li {
    transition: all 0.3s ease-in-out;
    /* background-color: var(--light-gray); */
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
  transform: translateX(8rem);
`;

const SubscribeBtn = styled.div`
  width: 7rem;
  height: 32px;
  background-color: var(--blue);
`;

export default Header;
