import React from 'react';
import Youtube from '../components/detail/Youtube';
import Report from '../components/detail/Report';
import { useParams } from 'react-router-dom';
const Detail = () => {
  let params = useParams();
  return (
    <div>
      {params.type === 'youtube' ? <Youtube /> : <></>}
      {params.type === 'report' ? <Report /> : <></>}
    </div>
  );
};

export default Detail;
