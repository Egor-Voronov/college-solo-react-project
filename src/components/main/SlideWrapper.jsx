import { useRef } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import SwiperCore, { Autoplay } from 'swiper';

import slide1 from '../../assets/vo.png'
import slide2 from '../../assets/slide2.png'
import {Link} from 'react-router-dom'

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
        <div className="flex">
            <h2>Главная Финтех компания <br /> Вологодский Области</h2>
            <a href='#footer'><button className='cta'>Узнать больше</button></a>
        </div>
        <img src={slide1} alt="изображение на слайдер" className='silde-img slide-img1'/>

        </SwiperSlide>
        <SwiperSlide className='slide'>
            <div className="flex">
                <h2>Большой перечень <br /> Разнообразных услуг</h2>
                <a href="#footer"><button className='cta'>Узнать больше</button></a>
            </div>
            <img src={slide2} alt="изображение на слайдер" className='silde-img slide-img2' />
        </SwiperSlide>

        </Swiper>
    )
}