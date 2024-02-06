'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { CardInfo } from '../data/cardinfo';
import Card from "../components/Card";

interface CarouselProps {
    lista: CardInfo[],
}
const Carousel = ({ lista }: CarouselProps) => {
    return (
        <Swiper breakpoints={{
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 20
            },

        }}
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="mySwiper">
            {lista.map((currentItem) => <SwiperSlide><Card item={currentItem} /></SwiperSlide>)}
        </Swiper>
    );
}

export default Carousel;