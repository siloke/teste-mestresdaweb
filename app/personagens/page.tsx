'use client'
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { PersonagensList } from "../data/personagens";
import Card from "../components/Card";


const Container = styled.div`
  margin: 100px auto;
  max-width: 1920px;
  padding: 0 1rem;

`
export default function PersonagensPage() {

  return (
    <Container>
      <Swiper breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }} 
      slidesPerView={1} 
      spaceBetween={10} 
      navigation={true} 
      modules={[Navigation]} 
      loop={false} 
      className="mySwiper">
        {PersonagensList.map((personagem) => <SwiperSlide><Card item={personagem} /></SwiperSlide>)}
      </Swiper>
    </Container>
  );
}
