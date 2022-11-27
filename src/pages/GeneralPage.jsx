import aboutImg from '../assets/about.png'
import {Link} from 'react-router-dom'

export function GeneralPage() {

  return (
    <div className="content general-content">
      <div className="container">
          <h2 className='heading' id='abou  '>О компании</h2>
          <div className="about">
            <h3 className='aboutTxt'>Компания GARANT - основной поставщик и интегратор онлайн-касс, торгового 
            оборудования и поставляемого из коробки программного обеспечения в Вологодской области.</h3>
            <img src={aboutImg} alt="о нас" className='aboutImg'/>
            <h3 className='aboutTxt'>Специалисты нашей компании работают 
            в области автоматизации магазинов (автоматизации складов, ресторанов) уже более 20 лет.</h3>
        </div>
        <Link to='/products'><button className='cta'>Перейти в каталог</button></Link>
      </div>
    </div>
  )
}