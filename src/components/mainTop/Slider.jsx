import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
// import Slide from './Slide';

const TotalSlides = 3;
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();

  const nextSlide = () => {
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
    console.log('currentSlide : ', currentSlide);
    console.log(slideRef.current.style.transform);
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.3s ease-in-out';
    // setInterval(nextSlide, 2000);
    setTimeout(nextSlide, 2000);
  }, [currentSlide]);

  return (
    <div>
      <Container>
        <SliderConatiner ref={slideRef}>
          <div>
            <img
              width="720px"
              height="720px"
              src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
            />
          </div>
          <div>
            <img
              width="720px"
              height="720px"
              src="https://images.unsplash.com/photo-1542157565-4607d82cf417?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            />
          </div>
          <div>
            <img
              width="720px"
              height="720px"
              src="https://images.unsplash.com/photo-1512036594830-51cea3a8df78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80"
            />
          </div>
        </SliderConatiner>

        <button onClick={nextSlide}>이동</button>
      </Container>
    </div>
  );
}

const SliderConatiner = styled.div`
  width: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 720px;
  margin: 0 auto;
  overflow: hidden;
`;

export default Slider;
