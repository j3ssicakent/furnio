'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IconButton } from '@material-tailwind/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface Props {
    slides: Array<string>
  }

const Carousel = ({slides}: Props) => {

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            
        >
            {slides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Image src={slide} alt={`image ${index}`} width={300} height={300} className="h-full w-full object-cover" />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Carousel