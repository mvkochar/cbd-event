import React from 'react'
import '../global.css'
import './Services.css'

type ServicesProps = {
    handlePage: (pageNum: number) => void
}

const Services = ({ handlePage }: ServicesProps) => {
    React.useEffect(() => {
        handlePage(3)
    }, [handlePage]);

    return (
        <main>
            <div className="services-features">
                <h2 className="services-features-title">Послуги та можливості</h2>
                <div className="services-features-content d-f jc-sb">
                    <div><img src="images/services-features.png" alt="services-features" /></div>
                    <div>
                        <p className="services-features-desc">
                            CBD планує заходи у Вашингтоні, округ Колумбія, на національному рівні в Чикаго,
                            Атланті, Маямі, Лос-Анджелесі,Лас-Вегас і Нью-Йорк, на Багамах і для наших міжнародні партнери.
                        </p>
                        <p className="services-features-desc">
                            Наш готовий підхід до вражаючих подій є другим ніком. Ми наймаємо графічних дизайнерів,
                            менеджерів з логістики, фахівці зі зв’язків з громадськістю та мають власний залік і компонент
                            цифрового друку. У нас є плани поверхіві специфікації майже на кожному місці, конференц-центрі і
                            приміщення для зустрічей у Вашингтоні, округ Колумбія і чудові відносини з нашими сторонніми
                            постачальниками. Ми також пропонуємо послуги перекладу на іспанську, португальську, французька та німецька.
                        </p>
                    </div>
                </div>
                <div className="services-features-actions d-f jc-sb">
                    <button type='button' className='services-features-download'>Загрузити брошуру</button>
                    <button type='button' className='services-features-more'>Детальніше</button>
                </div>
            </div>
            <div className="services-opportunities">
                <h2 className="services-opportunities-title">Що ми можемо зробити</h2>
                <div className="services-opportunities-desc">Ми можемо показати вам краще, ніж розповісти.</div>
            </div>
            <div className="services-selection">
                <h2 className="services-selection-title">Вибір послуги</h2>
                <div className="services-selection-box d-f jc-sb">
                    <div className="services-selection-item">
                        <h3 className="selection-item-title">Список-нагадування для гостей</h3>
                        <p className="selection-item-desc">
                            Можливості включають список гостей управління через наш онлайн фірмовий веб-сайт
                            клієнта або через попередній захід CBD система реєстрації, що забезпечує Ваші гості пораховані.
                        </p>
                    </div>
                    <div className="services-selection-item">
                        <h3 className="selection-item-title">Маркетинг і зв’язки з громадскістю</h3>
                        <p className="selection-item-desc">
                            Усі аспекти маркетингу і зв'язки з громадськістю обробляються. Комунікаційне агентство.
                            Ми пропонуємо рішення під ключдо брендингу, реклами продукти та повідомлення.
                        </p>
                    </div>
                    <div className="services-selection-item">
                        <h3 className="selection-item-title">Графічний дизайн та запрошення</h3>
                        <p className="selection-item-desc">
                            Ми розробляємо офіційні запрошення: високий друк, бавовна, льон та індивідуальні послуги,
                            такі як каліграфія. Ми також продаємо листівки для запрошень своїми руками.
                        </p>
                    </div>
                    <div className="services-selection-item">
                        <h3 className="selection-item-title">Планування заходів і виробництво</h3>
                        <p className="selection-item-desc">
                            Це серйозний процес. Наші навчені організатори заходів охоплюють кожну дрібницю.
                            Можливості включають: концепт-дизайн, декор та переговори щодо місця проведення.
                        </p>
                    </div>
                    <div className="services-selection-item">
                        <h3 className="selection-item-title">Конс’єрж та протокол</h3>
                        <p className="selection-item-desc">
                            CBD організовує заходи в деяких із найбезпечніших місць у Вашингтоні, округ Колумбія.
                            Ми є експертами в отриманні дозволів на проведення заходів, допусків безпеки, протокол
                            прибуття гостей і стандарти переговорів.
                        </p>
                    </div>
                    <div className="services-selection-item">
                        <h3 className="selection-item-title">Освітлення для особливих подій</h3>
                        <p className="selection-item-desc">
                            Можливості освітлення спеціальних заходів включають верхнє освітлення, індивідуальне освітлення,
                            освітлені меблі для заходів, освітлення для зйомок та інше спеціальне освітлення.
                        </p>
                    </div>
                    <div className="services-selection-item">
                        <h3 className="selection-item-title">Декор заходів та квітковий дизайн</h3>
                        <p className="selection-item-desc">
                            Квітковий дизайн, виготовлення бутафорії, освітлення, спеціальна постільна білизна
                            і багато іншого делікатно відібрано співробітниками нашої команди дизайнерів.
                        </p>
                    </div>
                    <div className="services-selection-item">
                        <h3 className="selection-item-title">Звук та аудіовізуал</h3>
                        <p className="selection-item-desc">
                            Звукові та аудіовізуальні вимоги до знятих концертів і виступів спікерів, малих і великих зустрічей.
                            Ми підтримуємо: презентації PowerPoint, вебінари, Skype, цифрові та соціальні медіа.
                        </p>
                    </div>
                    <div className="services-selection-item">
                        <h3 className="selection-item-title">Реєстрація гостей</h3>
                        <p className="selection-item-desc">
                            Перше враження може викликати ажіотаж або зіпсувати настрій гостю. Процес реєстрації
                            CBD було ретельно розробленощоб забезпечити легкий процес реєстрації.
                        </p>
                    </div>
                </div>
            </div>
            <div className="services-reviews">
                <h2 className="services-reviews-title">Відгуки</h2>
                <div className="services-reviews-item d-f">
                    <div><img src="images/review-author3.png" alt="reviews-author3" /></div>
                    <div>
                        <p className="reviews-item-desc">
                            Це фантастична фірма з планування заходів. У нас була видатна подія в США,
                            і єдине, що нам потрібно було зробити, це з’явитися. Айві та її команда виконали
                            вражаючу роботу для уряду Бразилії.
                        </p>
                        <div className="reviews-item-author">Адріана Кастро, директор</div>
                    </div>
                </div>
                <div className="services-reviews-item d-f">
                    <div>
                        <p className="reviews-item-desc">
                            Команда виконала фантастичну роботу для семінарів Світового банку з розвитку консолідації
                            центральних банків приватного сектора. Ми в Африці, тому ми могли довірити їм усі деталі.
                        </p>
                        <div className="reviews-item-author">Маллам Санусі Ламідо Санусі, губернатор Центрального банку Нігерії</div>
                    </div>
                    <div><img src="images/review-author1.png" alt="reviews-author1" /></div>
                </div>
                <button type='button' className="services-reviews-more">Детальніше</button>
            </div>
            <div className="services-standards">
                <h2 className="services-standarts-title">Стандарти логістики</h2>
                <p className="services-standarts-desc">
                    Найважливішим аспектом планування заходів є зв’язки та передбачення подій в останню хвилину.
                </p>
                <button type='button' className='services-standarts-more'>Детальніше</button>
            </div>
            <div className="services-tariffs d-f jc-sb">
                <div className="services-tariffs-item d-f jc-sb">
                    <h2 className="tariffs-item-title">Базовий</h2>
                    <h3 className="tariffs-item-price">$5,000</h3>
                    <h3 className="tariffs-item-guests">до 100 гостей</h3>
                    <ul className="tariffs-item-list">
                        <li>Переговори щодо місця проведення</li>
                        <li>Попередня реєстрація</li>
                        <li>Список гостей</li>
                        <li>Подія</li>
                        <li>Дизайн запрошень</li>
                        <li>Реєстрація на місці</li>
                    </ul>
                    <button type='button' className='tariffs-item-buy'>Buy Now</button>
                </div>
                <div className="services-tariffs-item d-f jc-sb">
                    <h2 className="tariffs-item-title">Делюкс</h2>
                    <h3 className="tariffs-item-price">$5,500 - 10,000</h3>
                    <h3 className="tariffs-item-guests">100-200 гостей</h3>
                    <ul className="tariffs-item-list">
                        <li>Управління логістикою</li>
                        <li>Переговори щодо місця проведення</li>
                        <li>Дизайн запрошень</li>
                        <li>Реєстрація на місці</li>
                    </ul>
                    <button type='button' className='tariffs-item-buy'>Buy Now</button>
                </div>
                <div className="services-tariffs-item d-f jc-sb">
                    <h2 className="tariffs-item-title">Преміум</h2>
                    <h3 className="tariffs-item-price">$10,000+</h3>
                    <h3 className="tariffs-item-guests">100-200 гостей</h3>
                    <ul className="tariffs-item-list">
                        <li>Відданий старший <br/> менеджер з роботи з клієнтами</li>
                        <li>Переговори щодо місця проведення</li>
                        <li>Преміум-запрошення</li>
                        <li>Розширена реєстрація <br /> на місці</li>
                    </ul>
                    <button type='button' className='tariffs-item-buy'>Buy Now</button>
                </div>
                <div className="services-tariffs-item d-f jc-sb">
                    <h2 className="tariffs-item-title">PRO</h2>
                    <h3 className="tariffs-item-price">Індивідуально</h3>
                    <ul className="tariffs-item-list">
                        <li>Веб-сайт події</li>
                        <li>Переговори щодо місця проведення</li>
                        <li>Старший організатор заходів</li>
                        <li>Преміальні запрошення</li>
                        <li>Розширена реєстрація</li>
                        <li>Підтримка в чаті</li>
                        <li>Персонал реєстрації на місці</li>
                    </ul>
                    <button type='button' className='tariffs-item-buy'>Buy Now</button>
                </div>
            </div>
        </main>
    )
}

export default Services