import arrow from '../assets/arrow.svg'
import ln from '../assets/ln.svg'
import yt from '../assets/yt.svg'

import {Link} from 'react-router-dom'

export function Footer () {
    return (
        <footer className="footer" id='footer'>
            <div className="container">
                <div className="contacts-header">
                    <a href="">+89115382915</a>
                    <a href="">fintechVO@gmail.com</a>
                </div>

                <a href="#main"><img src={arrow} alt="домой" className='arrow' /></a>

                <div className="socialcs">
                    <a href=""><img src={ln} alt="линкедин" /></a>
                    <a href=''><img src={yt} alt="ютуб" /></a>
                </div>
            </div>
        </footer>
    )
}