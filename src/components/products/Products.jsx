import product1 from '../../assets/product1.png'
import product2 from '../../assets/cloud2.jpg'
import product3 from '../../assets/ml.jpg'
import product4 from '../../assets/ai2.jpeg'
import product5 from '../../assets/ro2.avif'
import product6 from '../../assets/bi2.jpg'
import product7 from '../../assets/bl2.jpeg'
import product8 from '../../assets/bg2.jpeg'
import product9 from '../../assets/au2.webp'

export function Products() {

  return (
    <div className="content general-content products">
      <div className="container p1">
          <h2 className='heading' id='about'>Каталог</h2>

          <div className="productBody">
            <img src={product2} alt="товар" className='product1 i1'/>
            <div className="description1 d3 f1">
              <h2>Облачная инфраструктура</h2>
              <h3>Готовые вычислительные ресурсы в облаке
                    для построения <br /> отказоустойчивой ИТ-инфраструктуры <br /> для бизнеса и физических лиц.</h3>
              <h3 className='price p3'>от 5 000 ₽</h3>
            </div>
          </div>

          <div className="productBody">
            <img src={product1} alt="товар" className='product1'/>
            <div className="description1">
              <h2>Мобильная товар <br /> с предустановленным ПО</h2>
              <h3>Все кассы подходят для торговли маркированными товарами и крепким алкоголем.</h3>
              <h3 className='price'>от 1 950 ₽ в рассрочку</h3>
            </div>
          </div>

          <div className="productBody">
            <img src={product3} alt="товар" className='product1 i1'/>
            <div className="description1 d3 f1">
              <h2>Машинное обучение</h2>
              <h3>Разработка прогнозных систем оттока, поведения потребителей, 
                прогноза <br /> поломок и нагрузки оборудования, прогнозирования конверсии продаж, спроса и страхового 
                случая, <br /> предсказания трифика, ДТП и т.д.</h3>
              <h3 className='price p3 p4'>от 30 000 ₽</h3>
            </div>
          </div>

          <div className="productBody">
            <img src={product4} alt="товар" className='product1 i1'/>
            <div className="description1 d3 f1">
              <h2>Искусственный интеллект</h2>
              <h3>Интеллектуальный анализ данных на основе математического анализа <br /> выявляет закономерности и тенденции, существующие в данных, которые невозможно обнаружить при традиционном анализе.</h3>
              <h3 className='price p3 p4'>от 30 000 ₽</h3>
            </div>
          </div>

          <div className="productBody">
            <img src={product5} alt="товар" className='product1 i1'/>
            <div className="description1 d3 f1">
              <h2>Роботизация</h2>
              <h3>В соответствии с требованиями клиентов, компания производит роботов, обладающих превосходными характеристиками, а также разрабатывает и производит рабочие приспособления и логистические конвейерные линии, предназначенные для использования роботов в составе автоматических линий.</h3>
              <h3 className='price p3 p4'>от 30 000 ₽</h3>
            </div>
          </div>

          <div className="productBody">
            <img src={product6} alt="товар" className='product1 i1'/>
            <div className="description1 d3 f1">
              <h2>Биометрия</h2>
              <h3>Разрабатываем биометрических систем учета и слежения под ключ.</h3>
              <h3 className='price p3'>от 15 000 ₽</h3>
            </div>
          </div>

          <div className="productBody">
            <img src={product7} alt="товар" className='product1 i1'/>
            <div className="description1 d3 f1">
              <h2>Блокчейн</h2>
              <h3>Настроим и запустим платформу за <br /> 3 дня с момента оплаты. Тысячи токенов <br /> и криптовалют поддерживаются по умолчанию. Добавление других — за пару часов
                 </h3>
              <h3 className='price'>от 100 000 ₽ в рассрочку</h3>
            </div>
          </div>
          
          <div className="productBody">
            <img src={product8} alt="товар" className='product1 i1'/>
            <div className="description1 d3 f1">
              <h2>Big Data</h2>
              <h3> Строим хранилища данных, развиваем и поддерживаем существующие. Настраиваем интеграционные потоки из различных источников. Обеспечиваем консолидацию и контроль качества данных, мгновенный расчет <br /> аналитических показателей.</h3>
              <h3 className='price p3 p4'>от 20 000 ₽</h3>
            </div>
          </div>

          <div className="productBody">
            <img src={product9} alt="товар" className='product1 i1'/>
            <div className="description1 d3 f1">
              <h2>Автоматизация и <br /> Оптимизация процессов </h2>
              <h3>Мы проводим полноценный аудит, погружаемся в ваш бизнес, описываем процессы, фиксируем первичные показатели и составляем Техническое Задание и предлагаем вам наивыгодный вариант.</h3>
              <h3 className='price p3 p4'>от 50 000 ₽</h3>
            </div>
          </div>

      </div>
    </div>
  )
}