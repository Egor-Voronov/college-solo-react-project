import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'

export function Products() {

  return (
    <div className="content general-content products">
      <div className="container">
          <h2 className='heading' id='about'>Каталог</h2>
          <div className="productBody">
            <img src={product1} alt="касса" className='product1'/>
            <div className="description1">
              <h2>Мобильная касса MSPOS-K</h2>
              <h3>Все кассы подходят для торговли маркированными товарами и некрепким алкоголем.</h3>
              <h3 className='price'>от 1 950 ₽ в рассрочку</h3>
            </div>
          </div>

          <div className="productBody">
            <img src={product2} alt="касса" className='product1'/>
            <div className="description1 d2">
              <h2>Мобильная касса<br />  MSPOS-Е-Ф с эквайрингом</h2>
              <h3>Все кассы подходят для торговли маркированными товарами и некрепким алкоголем.</h3>
              <h3 className='price'>от 2 500 ₽ в рассрочку</h3>
            </div>
          </div>
      </div>
    </div>
  )
}