import React from 'react'
import './Home.css'

type HomeProps = {
  handlePage: (pageNum: number) => void
}

const Home = ({ handlePage }: HomeProps) => {
  React.useEffect(() => {
    handlePage(1)

  }, []);

  const [aboutMore, setAboutMore] = React.useState(false)

  const handleAboutMore = () => {
    setAboutMore((prevState) => {
      return (
        !prevState
      )
    })
  }

  return (
    <main>
      <div className="home-about d-f">
        <div><img src="images/home-about.png" alt="home-about" /></div>
        <div style={{ marginLeft: "20px" }}>
          <h2 className="home-about-title">Про компанію</h2>
          <p className={aboutMore ? "d-n" : "home-about-desc"} >
            CBD Meetings & Events — готове рішення Вашингтона, округ Колумбія до повного планування заходів,
            організації заходів та маркетингу заходів. CBD є найкращим інтегрованим планува...
          </p>
          <p className={aboutMore ? "home-about-desc" : "d-n"}>
            CBD Meetings & Events — готове рішення Вашингтона, округ Колумбія до повного планування заходів,
            організації заходів та маркетингу заходів. CBD є найкращим інтегрованим планувальником зустрічей
            для міжнародної спільноти.Ми з гордістю обслуговуємо 8 країн на 5 континентах. CBD керує подіями
            для дипломатів, некомерційних організацій, фондів і асоціацій, корпорацій і окремих осіб.
          </p>
          <button
            type='button'
            className="home-about-more"
            onClick={handleAboutMore}
          >
            {aboutMore ? "Менше" : "Детальніше"}
          </button>
        </div>
        <div>
          <div className="chat-title">Натхнення можна знайти всюди</div>
          <button type='button' className='chat-btn'>Чат</button>
        </div>
      </div>
      <div className="home-protocol">
        <h2 className="home-protocol-title">Протокол заходів і зустрічей</h2>
        <div className="home-protocol-box d-f jc-sb">
          <div className="home-protocol-item">
            <h3 className="protocol-item-title">1. Планування</h3>
            <ul className='protocol-item-list'>
              <li>Менеджери контенту</li>
              <li>Укладання договору</li>
              <li>Концепція дизайну</li>
              <li>Бюджет</li>
              <li>Попередня реєстрація</li>
              <li>Зв'язки з громадськістю</li>
              <li>Вибір ділянки</li>
              <li>Бронювання спікерів</li>
              <li>Пошук талантів</li>
            </ul>
          </div>
          <div className="home-protocol-item">
            <h3 className="protocol-item-title">2. Логістика</h3>
            <ul className='protocol-item-list'>
              <li>Повітряна подорож</li>
              <li>Оренда декору</li>
              <li>Прокат урочистої білизни</li>
              <li>Наземний транспорт</li>
              <li>Бронювання готелю</li>
              <li>Друк</li>
              <li>Приватна охорона</li>
              <li>Кадрове забезпечення</li>
              <li>Зв’язок з постачальниками</li>
            </ul>
          </div>
          <div className="home-protocol-item">
            <h3 className="protocol-item-title">3. Виконання</h3>
            <ul className='protocol-item-list'>
              <li>Подарунки учасникам</li>
              <li>Аудіовізуал</li>
              <li>Обслуговування</li>
              <li>Декор</li>
              <li>Маркетинг</li>
              <li>Фотографія</li>
              <li>Рекламні товари</li>
              <li>Звук / Освітлення</li>
              <li>Відеозйомка</li>
            </ul>
          </div>
          <div className="home-protocol-item">
            <h3 className="protocol-item-title">4. Менеджмент</h3>
            <ul className='protocol-item-list'>
              <li>Управління контрактами</li>
              <li>Управління призначенням</li>
              <li>Управління логістикою</li>
              <li>Управління протоколом</li>
              <li>Виїзні події</li>
              <li>Реєстрація учасників <br /> на місці</li>
              <li>Закупівлі</li>
              <li>Стратегічний менеджмент</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="home-design">
        <h2 className="home-design-title">Вишукані концепції дизайну</h2>
        <div className='home-design-img'><img src="images/home-design.png" alt="home-design" /></div>
        <button type='button' className='home-design-more'>Детальніше</button>
      </div>
      <div className="home-services">
        <h2 className="home-services-title">Вибір послуг</h2>
        <div className="home-services-box d-f jc-sb">
          <div className="home-services-item">
            <div className="services-item-bl">
              <h3 className="services-item-title" style={{ marginLeft: "8px" }}>Логістика та реєстрація</h3>
            </div>
            <div className="services-item-bl d-f align-center">
              <div className="services-item-line"></div>
              <h3 className="services-item-title">Менеджмент призначення</h3>
            </div>
            <div className="services-item-bl d-f align-center">
              <div className="services-item-line"></div>
              <h3 className="services-item-title">Обговорення місця та об’єкта</h3>
            </div>
            <div className="services-item-bl d-f align-center">
              <div className="services-item-line"></div>
              <h3 className="services-item-title">Обслуговування</h3>
            </div>
          </div>
          <div className="home-services-item">
            <div className="services-item-bl d-f align-center">
              <h3 className="services-item-title">Аудіовізуал</h3>
              <div className="services-item-line"></div>
            </div>
            <div className="services-item-bl d-f align-center">
              <h3 className="services-item-title">Звук і освітлення</h3>
              <div className="services-item-line"></div>
            </div>
            <div className="services-item-bl d-f align-center">
              <h3 className="services-item-title">Креативний дизайн і декор</h3>
              <div className="services-item-line"></div>
            </div>
            <div className="services-item-bl d-f" style={{ marginRight: "8px" }}>
              <h3 className="services-item-title">Фотографія та відеозйомка</h3>
            </div>
          </div>
        </div>
        <button className="home-services-know">Ознайомитися</button>
      </div>
      <div className="home-thematic">
        <h2 className="home-thematic-title">
          Тематичні події під ключ - <span>незабутні святкові емоції</span>
        </h2>
        <div className="home-thematic-box d-f jc-sb align-center">
          <div>
            <h3 className="thematic-info-title">Використовуємо найсучасніший дизайн</h3>
            <p className="thematic-info-desc">
              Ключ до чудової події — зробити її незабутньою. У CBD ми використовуємо концепцію
              вашого бренду та особистості, щоб створювати настрій і встановлювати стандарти.
            </p>
            <p className="thematic-info-desc">
              Тут НЕМАЄ подій, пов’язаних із розрізанням тортів. Кожен елемент дизайну налаштований 
              на замовлення, і ми НІКОЛИ не ЗАБУВАЄМО дрібних деталей.
            </p>
            <button className='home-thematic-more'>Детальніше</button>
          </div>
          <div><img src="images/home-thematic.png" alt="home-thematic" /></div>
        </div>
      </div>
      <div className="home-video">
        <h2 className="home-video-title">Відео-тур</h2>
        <div className="home-video-content">
          <h3 className="video-content-title">Перегляд виконаних замовлень</h3>
           <div className='video-content-img'><img src="images/video-content.png" alt="video-content" /></div>
        </div>
        <button className="home-video-khow">Ознайомитися</button>
      </div>
      <div className="home-news">
        <h2 className="home-news-title">Останні новини</h2>
        <div className="home-news-box d-f jc-sb">
          <div className="home-news-item">
            <div className="news-item-date">04 Травня 2019</div>
            <div><img src="images/news1.png" alt="news1" /></div>
            <h3 className="news-item-title">Як планується захід</h3>
          </div>
          <div className="home-news-item">
            <div className="news-item-date">21 Серпня 2019</div>
            <div><img src="images/news2.png" alt="news2" /></div>
            <h3 className="news-item-title">Інформація для пошуку організатора</h3>
          </div>
          <div className="home-news-item">
            <div className="news-item-date">28 Серпня 2019</div>
            <div><img src="images/news3.png" alt="news3" /></div>
            <h3 className="news-item-title">Зустрічі та заходи. Брошура</h3>
          </div>
        </div>
        <button className='home-news-know'>Ознайомитися</button>
      </div>
    </main>
  )
}

export default Home