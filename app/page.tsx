'use client'
import Card from "./components/Card";
import CardTest from "./components/CardTest";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from "react";


const Container = styled.div`
  display: flex;
  margin: 100px auto;
  max-width: 1920px;
`

export default function Home() {


  return (
    <Container>
      <Swiper slidesPerView={4} navigation={true} modules={[Navigation]} loop={false} className="mySwiper">
        <SwiperSlide><CardTest image="/heros/wanda-maximoff.jpg" /></SwiperSlide>
        <SwiperSlide><CardTest image="/heros/wanda-maximoff.jpg" /></SwiperSlide>
        <SwiperSlide><CardTest image="/background.jpg" /></SwiperSlide>
        <SwiperSlide><CardTest image="/heros/spider-man.jpg" /></SwiperSlide>
        <SwiperSlide><CardTest image="/heros/spider-man.jpg" /></SwiperSlide>

      </Swiper>
      {/* <CardTest /> */}

    </Container>
  );
}
