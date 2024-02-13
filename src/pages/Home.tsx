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
    </main>
  )
}

export default Home