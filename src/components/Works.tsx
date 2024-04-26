import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import useScrollAnimation from '../hooks/useScrollAnimation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const worksData = [
  { name: "블로그",
    people:"1인",
    date: "2023.12 ~ 2023.3",
    url: "https://github.com/aypooo/blog" },
  { name: "쇼핑몰",
    people:"3인",
    date: "2022.3 ~ 2022.4",
    url: "https://github.com/aypooo/web-market" },
  // Add more work data objects as needed
];

const Works = () => {
  const { ref, inView } = useScrollAnimation();
  return (
    <div ref={ref} className={`section-content ${inView ? 'animate' : ''}`}>
      <div className="works">
        <h2>Works</h2>
        <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
          {worksData.map((work, index) => (
            <SwiperSlide key={index}>
              <p>프로젝트명: {work.name}</p>
              <p>개발인원: {work.people}</p>
              <p>개발기간: {work.date}</p>
              <p onClick={() => window.open(work.url)}>{work.url}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Works;
