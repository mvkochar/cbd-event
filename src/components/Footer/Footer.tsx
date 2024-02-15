import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="d-f jc-sb">
        <div>
          <div className="d-f" style={{ gap: "135px" }}>
            <div><img src="images/footer-logo.svg" alt="footer-logo" /></div>
            <div>
              <h3 className="footer-bl-title">Про CBD</h3>
              <p className="footer-bl-desc" style={{ width: "240px" }}>
                CBD - головна керуюча компанія для планування заходів для корпорацій, некомерційних організацій,
                міжнародних урядів та громадських заходів у Вашингтоні.
              </p>
              <button className='footer-bl-download'>Загрузити брошуру</button>
            </div>
          </div>
          <p className="footer-bl-desc" style={{ marginTop: "38px" }}>
            NAICS Коди: <br />
            541820 | 541613 | 611699 | 323111 | 541810 | 541840 | <br />
            541850 | 541840 | 541870 |  541890 | 711510 | 511130 | <br />
            561990 | 541430 | 541611
          </p>
        </div>
        <div>
          <h3 className="footer-bl-title">Планування заходів</h3>
          <ul className="footer-bl-list">
            <li><a href="">Зустрічі CBD і події</a></li>
            <li><a href="">Планування заходів</a></li>
            <li><a href="">Послуги організації</a></li>
            <li><a href="">Галерея</a></li>
            <li><a href="">Вартість</a></li>
            <li><a href="">Прайс</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-bl-title">Сервіси для клієнтів</h3>
          <ul className="footer-bl-list">
            <li><a href="">Планування зустрічі</a></li>
            <li><a href="">Планування заходів</a></li>
            <li><a href="">Обслуговування</a></li>
            <li><a href="">Зв'язки з громадськістю</a></li>
            <li><a href="">Маркетинг</a></li>
            <li><a href="">Місце проведення</a></li>
            <li><a href="">Оренда матеріалів</a></li>
            <li><a href="">Аудіовізуал</a></li>
            <li><a href="">Фотографія</a></li>
            <li><a href="">Реєстрація</a></li>
            <li><a href="">Організація заходів</a></li>
            <li><a href="">Звук і освітлення</a></li>
            <li><a href="">Концепція  дизайну</a></li>
            <li><a href="">Менеджмент призначення</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-bl-title">Контакти</h3>
          <p className="footer-bl-desc">
            CBD Зустрічі та <br /> індивідуальні заходи <br />
            Поштова скринька 76096 <br />
            Вашингтон ДС 20013
          </p>
          <p className="footer-bl-desc" style={{marginTop: "16px"}}>Гаряча лінія</p>
          <p className="footer-bl-desc" style={{marginTop: "16px"}}><span>+1 800-956-4514</span> код 160 </p>
          <p className="footer-bl-desc" style={{marginTop: "16px"}}>Вашингтон ДС <span>+1 202-742-5923</span></p>
          <p className="footer-bl-desc" style={{marginTop: "16px"}}>Атланта <span>+1 404-806-0153</span></p>
          <div className="footer-bl-email">info@cbdmeetings.com</div>
          <div className="footer-socilal d-f">
            <div><img src="images/footer-social1.svg" alt="foooter-social1" /></div>
            <div><img src="images/footer-social2.svg" alt="foooter-social2" /></div>
            <div><img src="images/footer-social3.svg" alt="foooter-social3" /></div>
            <div><img src="images/footer-social4.svg" alt="foooter-social4" /></div>
          </div>
        </div>

      </div>
      <div className="footer-bar d-f jc-sb align-center">
        <nav>
          <ul className="footer-nav d-f">
            <li className="footer-nav-item"><a href="">Головна</a></li>
            <li className="footer-nav-item"><a href="">Продукти</a></li>
            <li className="footer-nav-item"><a href="">Кар’єра</a></li>
            <li className="footer-nav-item"><a href="">Терміни</a></li>
          </ul>
        </nav>
        <h3 className="footer-redesign">Редизайн сайту 2022/2023</h3>
      </div>
    </footer>
  )
}

export default Footer