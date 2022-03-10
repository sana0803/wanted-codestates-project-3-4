import React, { useState, useEffect } from 'react';
import data from './data.json';
import { useParams, useNavigate } from 'react-router-dom';

const ContentList = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const [matchData, setMatchData] = useState();

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
  }, [type]);

  return (
    <>
      <button onClick={() => navigate('/youtube')}>유튜브</button>
      <button onClick={() => navigate('/news')}>뉴스</button>
      <button onClick={() => navigate('/report')}>인사이트</button>
      <ul>
        {matchData &&
          matchData.map((value, index) => {
            if (index < 4) {
              return (
                <li key={index}>
                  <img src={value.image} alt={value.title} />
                  <p>
                    {value.upload_date} <span>7</span>
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
      </ul>
    </>
  );
};

export default ContentList;
