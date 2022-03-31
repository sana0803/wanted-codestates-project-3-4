import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Slide from './Slide';
import BannerMessage from '../BannerMessage';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Slider = () => {
  const TotalSlides = 3;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();
  const state = useSelector(state => state.dataReducer.data.content);
  const { type } = useParams();
  const nextSlide = () => {
    slideRef.current.style.transition = 'all 0.3s ease-in-out';
    const percent = (720 * 3) / TotalSlides;
    if (currentSlide >= TotalSlides - 1) {
      setCurrentSlide(0);
      slideRef.current.style.transform = `translateX(${0}%)`;
    } else {
      setCurrentSlide(currentSlide + 1);
      slideRef.current.style.transform = `translateX(-${
        (currentSlide + 1) * percent
      }px)`;
    }
  };

  useEffect(() => {
    setTimeout(nextSlide, 5000);
    clearTimeout();
  }, [currentSlide]);
  let filteredData = [];
  if (state) {
    filteredData = state.filter(obj => obj.like_top === 1);
    if (type === 'youtube') {
      filteredData = filteredData.filter(obj => obj.sector_id === 2);
    }
    if (type === 'news') {
      filteredData = filteredData.filter(obj => obj.sector_id === 1);
    }
    if (type === 'report') {
      filteredData = filteredData.filter(obj => obj.sector_id === 3);
    }
  }
  return (
    <div>
      <Container>
        <BannerMessage text="새로 올라왔어요" />
        <SliderConatiner ref={slideRef}>
          {filteredData.map((obj, index) => {
            return (
              <Slide
                key={index}
                img={obj.image}
                title={obj.title}
                id={obj.id}
                type={type}
              />
            );
          })}
        </SliderConatiner>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 720px;
  margin: 0 auto;
  overflow: hidden;
  background-color: white;
  font-weight: bold;
`;

const SliderConatiner = styled.div`
  width: 100%;
  display: flex;
`;

export default Slider;
