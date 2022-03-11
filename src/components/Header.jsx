import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../../src/logo.svg';
// import { useSelector } from 'react-redux';

const tabMenu = [
  { sector: '알쓸B잡', content: 'news' },
  { sector: '유튜브', content: 'youtube' },
  { sector: '인사이트', content: 'report' },
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
            onClick={() => {
              setCurrentIdx(2);
              navigate(`/${item.content}`);
            }}
          >
            {item.sector}
          </li>
        ))}
        <BottomBar />
      </TabContainer>
      <SubscribeWrap>
        <span>샌드뱅크 오리지널</span>
        <SubscribeBtn>
          <span>구독하기</span>
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
  margin-bottom: 60px;
  img {
    width: 10rem;
    cursor: pointer;
    /* background-color: yellow; */
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
  transform: translateX(0rem);
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
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: var(--main-color);
  }
`;

export default Header;
