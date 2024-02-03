'use client'
import Card from "./components/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import styled from "styled-components";

const Container = styled.div`
  margin: 100px auto;
  max-width: 1440px;
`

export default function Home() {

  return (
      <Container>
        <Swiper slidesPerView={3} navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide> <Card /> </SwiperSlide>
          <SwiperSlide> <Card /> </SwiperSlide>
          <SwiperSlide> <Card /> </SwiperSlide>
          <SwiperSlide> <Card /> </SwiperSlide>
          <SwiperSlide> <Card /> </SwiperSlide>
          <SwiperSlide> <Card /> </SwiperSlide>
        </Swiper>
      </Container>
  );
}
