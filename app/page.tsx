'use client'
import Card from "./components/Card";
import CardTest from "./components/CardTest";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { PersonagensList } from "./data/personagens";
import ImageCard from "./components/ImageCard";

const Container = styled.div`
  // display: flex;
  margin: 100px auto;
  // max-width: 1280px;

`

export default function Home() {


  return (
    <Container className="teste">
      <Swiper slidesPerView={3} spaceBetween={30} navigation={true} modules={[Navigation]} loop={false} className="mySwiper">
        {PersonagensList.map((personagem) => <SwiperSlide><Card item={personagem} /></SwiperSlide>)}
      </Swiper>
    </Container>
  );
}
