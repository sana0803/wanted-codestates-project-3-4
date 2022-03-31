import React, { useState, useEffect } from 'react';
// import data from './data.json';
import Card from './Card';
import AddButton from './AddButton';
import PropTypes from 'prop-types';
import BannerMessage from './BannerMessage';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CardList = styled.section`
  ul {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(2, minmax(200px, auto));
    padding: 10px;
  }
`;

const ContentList = ({ type }) => {
  const dataList = useSelector(state => state.dataReducer.data.content);
  const [matchData, setMatchData] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [subheading, setSubheading] = useState('알쓸B잡');

  const filterData = id => dataList?.filter(value => value.sector_id === id);

  useEffect(() => {
    setIsAdd(false);
  }, [type]);

  useEffect(() => {
    if (type === 'news') {
      setMatchData(filterData(1));
      setSubheading('알쓸B잡');
    } else if (type === 'youtube') {
      setMatchData(filterData(2));
      setSubheading('블록체인 NOW');
    } else if (type === 'report') {
      setMatchData(filterData(3));
      setSubheading('어떻게 투자할까');
    }
  }, [type, dataList]);

  return (
    <CardList>
      <BannerMessage text={subheading} />
      <ul>
        {matchData &&
          matchData.map((item, index) => {
            if (isAdd ? isAdd : index < 4) {
              return (
                <Card
                  key={index}
                  item={item}
                  type={type}
                  link={item.link}
                  id={item.id}
                />
              );
            }
          })}
      </ul>
      <AddButton isAdd={isAdd} setIsAdd={setIsAdd} />
    </CardList>
  );
};

ContentList.propTypes = {
  type: PropTypes.string,
};

export default ContentList;
