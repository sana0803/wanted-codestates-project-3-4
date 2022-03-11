import React, { useState, useEffect } from 'react';
import data from './data.json';
import { useParams, useNavigate } from 'react-router-dom';
import Card from './Card';
import AddButton from './AddButton';

const ContentList = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const [matchData, setMatchData] = useState([]);
  const [addData, setAddData] = useState(false);

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
      <button onClick={() => navigate('/youtube')}>유튜브</button>
      <button onClick={() => navigate('/news')}>뉴스</button>
      <button onClick={() => navigate('/report')}>인사이트</button>
      <ul>
        {matchData.map((item, index) => {
          if (addData ? index : index < 4) {
            return (
              <Card key={index} index={index} item={item} addData={addData} />
            );
          }
        })}
        <AddButton addData={addData} setAddData={setAddData} />
      </ul>
    </>
  );
};

export default ContentList;
