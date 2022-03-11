import React, { useState, useEffect } from 'react';
import data from './data.json';
// import { useParams } from 'react-router-dom';
import Card from './Card';
import AddButton from './AddButton';
import PropTypes from 'prop-types';
import BannerMessage from './BannerMessage';
import styled from 'styled-components';

const CardList = styled.section`
  ul {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(2, minmax(200px, auto));
    padding: 10px;
  }
`;

const ContentList = ({ type }) => {
  // const { type } = useParams();

  const [matchData, setMatchData] = useState([]);
  const [addData, setAddData] = useState(false);
  const [subheading, setSubheading] = useState('알쓸B잡');
  const [liked, setLiked] = useState();

  const dataList = data.content;
  const filterData = id => dataList.filter(value => value.sector_id === id);

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
    setAddData(false);
  }, [type]);

  return (
    <CardList>
      <BannerMessage text={subheading} />
      <ul>
        {matchData.map((item, index) => {
          if (addData ? index + 1 : index < 4) {
            return (
              <Card
                key={index}
                index={index}
                item={item}
                liked={liked}
                setLiked={setLiked}
              />
            );
          }
        })}
      </ul>
      <AddButton addData={addData} setAddData={setAddData} />
    </CardList>
  );
};

ContentList.propTypes = {
  type: PropTypes.string,
};

export default ContentList;
