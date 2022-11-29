import logo from '../../assets/logo.svg'
import { useRef } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import {Link} from 'react-router-dom'

export function Header () {
    return (
        <div className="sidebar">
            <div className="container">
                <Link to="/" className='logo-container'>
                    <img src={logo} alt="logo" className="logo" />
                    <h1>FinTech VO</h1>
                </Link>

                <div className="contacts-header">
                    <a href="">+89115382915</a>
                    <a href="">fintechVO@gmail.com</a>
                </div>
                
                <nav className="nav">
                    <a href="#main">Главная</a>
                    <a href="#about">О нас</a>
                    <a href="#footer">Подвал</a>
                    <Link to="/products">Каталог</Link>
                </nav>

            </div>
        </div>
    )
}