import React from 'react';
import BannerMessage from '../BannerMessage';
import Slider from './Slider';
const MainTop = () => {
  return (
    <div>
      {/* BannerMessage component 사용예시 */}
      <BannerMessage text="새로 올라왔어요" />
      <Slider />
    </div>
  );
};

export default MainTop;
