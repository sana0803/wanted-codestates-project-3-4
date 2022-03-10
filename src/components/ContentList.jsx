import React from 'react';
import data from './data.json';

const ContentList = () => {
  console.log(data.content);
  const dataList = data.content;
  // const news = dataList.filter(value => value.sector_id === 1);
  const youtube = dataList.filter(value => value.sector_id === 2);
  // const report = dataList.filter(value => value.sector_id === 3);
  // Link = https://www.youtube.com/watch?v=fNEdetWtoJg

  return (
    <ul>
      {youtube.map((value, index) => (
        <li key={index}>
          {/* <img src={value.image} alt={value.title} /> */}
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${value.link}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </li>
      ))}
    </ul>
  );
};

export default ContentList;
