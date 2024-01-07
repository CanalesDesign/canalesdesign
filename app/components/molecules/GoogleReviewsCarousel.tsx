'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Reviews } from '../organisms/reviews_section/GoogleReviewsData';
import 'swiper/css';
import 'swiper/css/pagination';
import GoogleCard from './GoogleCard';

export default function GoogleReviewsCarousel() {
  return (
    <div className="google__reviews--carousel-wrapper">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        autoHeight={true}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 10000,
        }}
      >
        {Reviews.map((item) => {
          return (
            <>
              <SwiperSlide key={item.id}>
                <div className="google__reviews--carousel-card mb-6 md:mb-0 rounded-xl bg-neutrals-500">
                  <GoogleCard
                    img={item.img}
                    alt={item.alt}
                    people={item.people}
                    logo={item.logo}
                    testimonial={item.testimonial}
                  />
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
}
