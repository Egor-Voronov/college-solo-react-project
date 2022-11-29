import product1 from '../../assets/product1.png'
import product2 from '../../assets/cloud.png'
import product3 from '../../assets/ml.jpg'


export function Products() {

  return (
    <div className="content general-content products">
      <div className="container p1">
          <h2 className='heading' id='about'>Каталог</h2>
          <div className="productBody">
            <img src={product1} alt="касса" className='product1'/>
            <div className="description1">
              <h2>Мобильная касса <br /> с предустановленным ПО</h2>
              <h3>Все кассы подходят для торговли маркированными товарами и крепким алкоголем.</h3>
              <h3 className='price'>от 1 950 ₽ в рассрочку</h3>
            </div>
          </div>

          <div className="productBody">
            <img src={product2} alt="касса" className='product1'/>
            <div className="description1 d2">
              <h2>Облачная инфраструктура</h2>
              <h3>Готовые вычислительные ресурсы в облаке
                    для построения <br /> отказоустойчивой ИТ-инфраструктуры <br /> для бизнеса и физических лиц.</h3>
              <h3 className='price p3'>от 5 000 ₽</h3>
            </div>
          </div>

          <div className="productBody">
            <img src={product3} alt="касса" className='product1 i1'/>
            <div className="description1 d3 f1">
              <h2>Машинное обучение</h2>
              <h3>Разработка прогнозных систем оттока, поведения потребителей, 
                прогноза <br /> поломок и нагрузки оборудования, прогнозирования конверсии продаж, спроса и страхового 
                случая, <br /> предсказания трифика, ДТП и т.д.</h3>
              <h3 className='price p3 p4'>от 30 000 ₽</h3>
            </div>
          </div>

      </div>
    </div>
  )
}