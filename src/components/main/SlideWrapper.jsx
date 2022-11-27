import { useRef } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import SwiperCore, { Autoplay } from 'swiper';

import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'

export function SlideWrapper () {
    SwiperCore.use([Autoplay])

    return (
        <Swiper 
            id='main'
            modules={[Navigation, EffectFade]}
            navigation
            effect
            speed={800}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000 }}
            className='slide-wrapper'
        >
        <SwiperSlide className='slide'>
            <h2>Готовый комплект <br /> с кассой для вашего <br /> бизнеса</h2>
            <img src={slide1} alt="изображение на слайдер" className='silde-img slide-img1'/>
        </SwiperSlide>
        <SwiperSlide className='slide'>
            <h2>Более 20 лет <br /> широкой экспертизы</h2>
            <img src={slide2} alt="изображение на слайдер" className='silde-img slide-img2' />
        </SwiperSlide>

        </Swiper>
    )
}