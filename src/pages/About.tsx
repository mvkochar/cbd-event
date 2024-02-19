import React from 'react'
import '../global.css'
import './About.css'

type AboutProps = {
    handlePage: (pageNum: number) => void
}

const About = ({ handlePage }: AboutProps) => {
    React.useEffect(() => {
        handlePage(2)

    }, []);

    return (
        <main>
            <div className="about-features">
                <h2 className="about-features-title">Чому CBD: <br /> Зустрічі та події</h2>
                <div className="d-f" style={{ gap: "48px" }}>
                    <div>
                        <ul className="about-features-list">
                            <li>Корпоративні заходи, зустрічі, конференції та інше</li>
                            <li>Некомерційні організації, асоціації, Центральні банки</li>
                            <li>Міжнародні зустрічі</li>
                            <li>Спеціальність: Закордонний <br /> приватний сектор <br /> Інвестиційні семінари</li>
                        </ul>
                        <button type='button' className='about-features-download'>Загрузити брошуру</button>
                    </div>
                    <div>
                        <p className="about-features-desc">
                            Штаб-квартира організації з планування заходів у Вашингтоні, округ Колумбія.
                            CBD керує подіями для міжнародних урядів, некомерційних організацій, корпорацій,
                            малих підприємств та приватних осіб. Ми є малим бізнесом. Нашою власницею є жінка,
                            яка має членство у Washington Women In PR та Destination DC.
                        </p>
                        <p className="about-features-desc">
                            Наш корпоративний відділ пропонує планування конференцій, щорічних зустрічей і
                            управління при проведенні заходів. Наш соціальний відділ планує соціальні заходи,
                            збори коштів для неприбуткових організацій і весілля.
                        </p>
                        <p className="about-features-desc">
                            Ми керували подіями від концептуалізації до завершення для кількох історичних
                            та широко розрекламованих подій, наприклад: The Journer Truth Unveiling with
                            First Lady Сполучених Штатів пані Мішель Обама, секретар США Гілларі Клінтон,
                            Уряд Бразилії, Посольство Швеції, Coca-Cola, Time Warner, Dodge, Atlanta Committee
                            Олімпійських ігор (ACOG) та багато інших.
                        </p>
                        <button className="about-features-more">Детальніше</button>
                    </div>
                </div>
            </div>
            <div className="about-place">
                <h2 className="about-place-title">Розкішне місце з управління <br /> та планування послуг</h2>
                <p className="about-place-desc">Пропонуємо рішення під ключ. Обслуговування країн по всьому світу.</p>
                <div className='about-place-info'>
                    <div className="about-place-item">
                        <span>100+</span>
                        Заходів
                    </div>
                    <div className="about-place-item">
                        <span>5</span>
                        Континетів
                    </div>
                </div>
            </div>
            <div className="about-solutions">
                <h2 className="about-solutions-title">Рішення під ключ: <br /> Події, якими ми керуємо</h2>
                <div className="d-f jc-sb align-center">
                    <div>
                        <p className="about-solutions-desc">
                            Ми плануємо заходи у Вашингтоні, округ Колумбія, на національному рівні,
                            на Багамах і для наших міжнародних партнерів.
                        </p>
                        <p className="about-solutions-desc">
                            Наш готовий підхід до вражаючих заходів є неперевершеним. Ми наймаємо графічних дизайнерів,
                            менеджерів з логістики, Фахівці зі зв’язків з громадськістю та мають власний залік і компонент
                            цифрового друку.
                        </p>
                        <p className="about-solutions-desc">
                            У нас є плани поверхів і характеристики майже кожного приміщення, конференц-центр
                            і приміщення для зустрічей у Вашингтоні, округ Колумбія столична область і чудові
                            відносиниз нашими сторонніми постачальниками. Ми також пропонуємо послуги перекладу
                            іспанською, португальською, французькою та німецькою мовами.
                        </p>
                    </div>
                    <div>
                        <ul className="about-solutions-list">
                            <li>Радники з протоколу</li>
                            <li>Послуги перекладу</li>
                            <li>Маркетинг і зв'язки з громадськістю</li>
                            <li>Пошук місця, управління логістикою</li>
                        </ul>
                        <div><img src="images/about-solutions.png" alt="about-solutions" /></div>
                    </div>
                </div>
            </div>
            <div className="about-services">
                <h2 className="about-services-title">Вибір сервісу</h2>
                <div className="about-services-box d-f">
                    <div><img src="images/about-services1.png" alt="about-services1" /></div>
                    <div className="about-services-item services-item__first">
                        <h3 className="services-item-title">Логістика та попередня реєстрація</h3>
                        <ul className="services-item-list">
                            <li>Внутрішні сертифіковані маркетологи</li>
                            <li>Новітні технології на місці</li>
                            <li>Повні послуги з керування даними</li>
                            <li>Надійні постачальники</li>
                        </ul>
                    </div>
                    <div><img src="images/about-services2.png" alt="about-services2" /></div>
                    <div className="about-services-item">
                        <h3 className="services-item-title">Спеціальне меню</h3>
                        <ul className="services-item-list">
                            <li>Приватний обід для невеликих <br /> зустрічей</li>
                            <li>Параметри спеціального меню</li>
                            <li>Декор подій</li>
                            <li>Звук і освітлення</li>
                        </ul>
                    </div>
                    <div style={{ marginTop: "-48px" }}><img src="images/about-services3.png" alt="about-services3" /></div>
                    <div className="about-services-item">
                        <h3 className="services-item-title">Управління зустріччю</h3>
                        <ul className="services-item-list">
                            <li>Управління зустріччю</li>
                            <li>Вибір місця та укладення договору</li>
                            <li>Зелені зустрічі</li>
                            <li>Конференції та управління виставками</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-team">
                <h2 className="about-team-title">Наша команда</h2>
                <div className="about-team-box d-f jc-sb">
                    <div className="about-team-item">
                        <div className='team-item-img'><img src="images/team1.png" alt="team1" /></div>
                        <div className="team-item-info">
                            <p className="team-item-desc">Айві Пендлтон — креативний директор і головний планувальник. Во</p>
                            <button type='button' className='team-item-more'>Детальніше</button>
                            <div className="team-item-name">Айві К. Пендлтон</div>
                            <div className="team-item-pos">Головний планувальник</div>
                        </div>
                    </div>
                    <div className="about-team-item">
                        <div className='team-item-img'><img src="images/team2.png" alt="team2" /></div>
                        <div className="team-item-info">
                            <p className="team-item-desc">Камарія Салау є старшим спеціалістом з логістики в CBD. Вона тісно співпрацю...</p>
                            <button type='button' className='team-item-more'>Детальніше</button>
                            <div className="team-item-name">Камарія Салау</div>
                            <div className="team-item-pos">Спеціаліст з логістики</div>
                        </div>
                    </div>
                    <div className="about-team-item">
                        <div className='team-item-img'><img src="images/team3.png" alt="team3" /></div>
                        <div className="team-item-info">
                            <p className="team-item-desc">Майкл — досвідчений фахівець з логістики, який працює в CBD з 2007 року...</p>
                            <button type='button' className='team-item-more'>Детальніше</button>
                            <div className="team-item-name">Майкл Дюбуа</div>
                            <div className="team-item-pos">Спеціаліст з логістики</div>
                        </div>
                    </div>
                </div>
                <div className="about-team-box d-f jc-sa" style={{ marginTop: "28px" }}>
                    <div className="about-team-item">
                        <div className='team-item-img'><img src="images/team4.png" alt="team4" /></div>
                        <div className="team-item-info">
                            <p className="team-item-desc">Грегорі Блейкі — найкращий фотограф у Вашингтоні, округ Колумбія...</p>
                            <button type='button' className='team-item-more'>Детальніше</button>
                            <div className="team-item-name">Грегорі Блейкі</div>
                            <div className="team-item-pos">Офіційний фотограф</div>
                        </div>
                    </div>
                    <div className="about-team-item">
                        <div className='team-item-img'><img src="images/team5.png" alt="team5" /></div>
                        <div className="team-item-info">
                            <p className="team-item-desc">Ми працюємо виключно з лауреатом нагород оператором Маршаллом Л...</p>
                            <button type='button' className='team-item-more'>Детальніше</button>
                            <div className="team-item-name">Маршалл Леві</div>
                            <div className="team-item-pos">Головний відеооператор</div>
                        </div>
                    </div>
                </div>
                <div className="about-connect">
                    <h2 className="about-connect-title">Ми хочемо з вами працювати</h2>
                    <div className="about-connect-desc">Будь ласка, заповніть форму, щоб наша команда могла оцінити ваші потреби.</div>
                    <button type='button' className='about-connect-know'>Ознайомитися</button>
                </div>
            </div>
            <div className="about-reviews">
                <h2 className="about-reviews-title">Відгуки</h2>
                <div className="about-reviews-item d-f">
                    <div><img src="images/review-author1.png" alt="review-author1" /></div>
                    <div>
                        <p className="reviews-item-desc">
                            Команда виконала фантастичну роботу для приватного сектору Світового банку семінари
                            з розвитку консолідації центрального банку. Ми в Африці, тому ми могли довірити
                            їм усі деталі.
                        </p>
                        <div className="reviews-item-author">Маллам Санусі Ламідо Санусі, губернатор Центрального банку Нігерії</div>
                    </div>
                </div>
                <div className="about-reviews-item d-f">
                    <div>
                        <p className="reviews-item-desc">
                            Айві займалася зв'язками з громадськістю та комунікаціями для історичного Sojourner Truth Unveiling 
                            з першою леді Мішель Обамою. Вона та її команда надзвичайно вразили.
                        </p>
                        <div className="reviews-item-author">Маллам Санусі Ламідо Санусі, губернатор Центрального банку Нігерії</div>
                    </div>
                    <div><img src="images/review-author2.png" alt="review-author2" /></div>
                </div>
                <button type='button' className="about-reviews-more">Детальніше</button>
            </div>
        </main>
    )
}

export default About