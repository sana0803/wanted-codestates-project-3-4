import React, { useState, useEffect } from 'react';
import data from './data.json';
// import { useParams } from 'react-router-dom';
import Card from './Card';
import AddButton from './AddButton';
import PropTypes from 'prop-types';
import BannerMessage from './BannerMessage';

const ContentList = ({ type }) => {
  // const { type } = useParams();

  const [matchData, setMatchData] = useState([]);
  const [addData, setAddData] = useState(false);
  const [liked, setLiked] = useState();

  const dataList = data.content;
  const filterData = id => dataList.filter(value => value.sector_id === id);

  useEffect(() => {
    if (type === 'news') {
      setMatchData(filterData(1));
    } else if (type === 'youtube') {
      setMatchData(filterData(2));
    } else if (type === 'report') {
      setMatchData(filterData(3));
    }
    setAddData(false);
  }, [type]);

  return (
    <>
      <BannerMessage text="예시" />
      <ul>
        {matchData.map((item, index) => {
          if (addData ? index : index < 4) {
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
        <AddButton addData={addData} setAddData={setAddData} />
      </ul>
    </>
  );
};

ContentList.propTypes = {
  type: PropTypes.string,
};

export default ContentList;
