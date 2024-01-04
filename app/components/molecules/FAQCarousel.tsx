'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FAQQuestions } from '../organisms/faq_section/FAQData';
import 'swiper/css';
import 'swiper/css/pagination';
import Balancer from 'react-wrap-balancer';

export default function FAQCarousel() {
  return (
    <div className="faq__carousel--wrapper">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 10000,
        }}
        loop={true}
      >
        {FAQQuestions.map((item) => {
          return (
            <>
              <SwiperSlide key={item.id}>
                <div className="faq__card px-8 py-10 bg-primary-200 rounded-xl">
                  <span className="number text-[2.5rem] leading-[2.5rem] text-primary-500">
                    {item.number}
                  </span>
                  <h3 className="heading__3 mt-6 mb-4">
                    <Balancer>{item.question}</Balancer>
                  </h3>
                  <p className="body__large leading-x-loose">
                    <Balancer>{item.answer}</Balancer>
                  </p>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
}
