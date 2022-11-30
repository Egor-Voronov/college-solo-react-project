import { useRef } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import SwiperCore, { Autoplay } from 'swiper';

import slide1 from '../../assets/cloud.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/ml2.png'
import slide4 from '../../assets/bd.png'
import slide5 from '../../assets/ai.png'
import slide6 from '../../assets/bi.png'
import slide7 from '../../assets/ro.png'
import slide8 from '../../assets/bl.png'
import slide9 from '../../assets/au.png'

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
            <h2>Самое мощное облако в Вологде <br /> Первый месяц бесплатно </h2>
            <a href='#portal'><button className='cta'>Узнать больше</button></a>
        </div>
        <img src={slide1} alt="изображение на слайдер" className='silde-img slide-img1'/>
        </SwiperSlide>

        <SwiperSlide className='slide'>
            <div className="flex">
                <h2>Современные и удобные кассы <br />Скидки для малого бизнеса </h2>
                <a href="#portal"><button className='cta'>Узнать больше</button></a>
            </div>
            <img src={slide2} alt="изображение на слайдер" className='silde-img slide-img2' />
        </SwiperSlide>

        <SwiperSlide className='slide'>
        <div className="flex">
            <h2>Эффективное машинное обучение <br />
            Гарантируем большие конверсии продаж</h2>
            <a href='#portal'><button className='cta'>Узнать больше</button></a>
        </div>
        <img src={slide3} alt="изображение на слайдер" className='silde-img slide-img3'/>
        </SwiperSlide>

        <SwiperSlide className='slide'>
            <div className="flex">
                <h2>Персональная аналитика. <br />Подскажем выгодное применение <br /> Собранной <span className='str'>Big Data</span></h2>
                <a href="#portal"><button className='cta'>Узнать больше</button></a>
            </div>
            <img src={slide4} alt="изображение на слайдер" className='silde-img slide-img4' />
        </SwiperSlide>

        <SwiperSlide className='slide'>
        <div className="flex">
            <h2>Внедрим искусственный интеллект <br />  Скидка 50% новым пользователям</h2>
            <a href='#portal'><button className='cta'>Узнать больше</button></a>
        </div>
        <img src={slide5} alt="изображение на слайдер" className='silde-img slide-img5'/>
        </SwiperSlide>

        <SwiperSlide className='slide'>
            <div className="flex ff1">
                <h2>Масштабируемая биометрия<br />Поможем узнать все о ваших струдниках</h2>
                <a href="#portal"><button className='cta'>Узнать больше</button></a>
            </div>
            <img src={slide6} alt="изображение на слайдер" className='silde-img slide-img6' />
        </SwiperSlide>

        <SwiperSlide className='slide'>
        <div className="flex">
            <h2>Роботизируем мануальные процессы <br /> Производительность труда возрастет вдвое</h2>
            <a href='#portal'><button className='cta'>Узнать больше</button></a>
        </div>
        <img src={slide7} alt="изображение на слайдер" className='silde-img slide-img7'/>
        </SwiperSlide>

        <SwiperSlide className='slide'>
        <div className="flex">
            <h2>Спроектируем вашу собственную <br /> блокчейн платформу.<br />Предложение ограничено</h2>
            <a href='#portal'><button className='cta'>Узнать больше</button></a>
        </div>
        <img src={slide8} alt="изображение на слайдер" className='silde-img slide-img8'/>
        </SwiperSlide>

        <SwiperSlide className='slide'>
        <div className="flex">
            <h2>Автоматизируем и оптимизируем <br />Ваши бизнес-процессы.<br />Скидка новым клиентам</h2>
            <a href='#portal'><button className='cta'>Узнать больше</button></a>
        </div>
        <img src={slide9} alt="изображение на слайдер" className='silde-img slide-img9'/>
        </SwiperSlide>

        </Swiper>
    )
}