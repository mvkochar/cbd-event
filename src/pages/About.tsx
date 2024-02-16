import React from 'react'
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
        </main>
    )
}

export default About