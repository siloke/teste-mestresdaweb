'use client'
import Card from "./components/Card";
import CardTest from "./components/CardTest";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

const Container = styled.div`
  // display: flex;
  margin: 100px auto;
  // max-width: 1280px;

`

export default function Home() {
  

  return (
    <Container className="teste">
      <Swiper slidesPerView={3} spaceBetween={30} navigation={true} modules={[Navigation]} loop={false} className="mySwiper">
        <SwiperSlide className="teste"><CardTest image="/heros/spider-man.jpg"/></SwiperSlide>
        <SwiperSlide className="teste"><CardTest image="/heros/wanda-maximoff.jpg"/></SwiperSlide>
        <SwiperSlide className="teste"><CardTest image="background.png"/></SwiperSlide>
        <SwiperSlide className="teste"><CardTest image="background.png"/></SwiperSlide>
      </Swiper>

    </Container>
  );
}
