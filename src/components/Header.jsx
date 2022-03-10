import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
      <TabContainer>
        {tabMenu.map((item, idx) => (
          // currentIdx={currentIdx}
          <TabItem
            key={idx}
            currentIdx={currentIdx}
            onClick={() => navigate('/:type')}
          >
            {item.sector}
          </TabItem>
        ))}
      </TabContainer>
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

const TabContainer = styled.div`
  width: 720px;
  height: 100%;
  background-color: green;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const TabItem = styled.div`
  background-color: var(--blue);
  font-size: 18px;
  cursor: pointer;
`;

export default Header;
