import aboutImg from '../assets/about.jpg'
import {Link} from 'react-router-dom'

export function GeneralPage() {

  return (
    <div className="content general-content">
      <div className="container o2">
          <h2 className='heading' id='about'>О компании</h2>
          <div className="about">
          <h3 className='aboutTxt'>Компания Fintech VO - основной поставщик и интегратор финансовых технологий в Вологодской области.
          <br /> В частности - мы занимаемся облачными технологиями, машинным обучением, а также поставками торгового оборудования для бизнеса.</h3>
            <img src={aboutImg} alt="о нас" className='aboutImg a2'/>
            <h3 className='aboutTxt'>Специалисты нашей компании работают 
            в области финансовых технологий уже более 20 лет.</h3>
        </div>
        <Link to='/products'><button className='cta'>Перейти в каталог</button></Link>
      </div>
    </div>
  )
}