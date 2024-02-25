import React from 'react'
import '../global.css'
import './Cost.css'
import EventsSelect from '../components/EventsSelect/EventsSelect'

type CostProps = {
    handlePage: (pageNum: number) => void
}

const Cost = ({ handlePage }: CostProps) => {
    React.useEffect(() => {
        handlePage(5)
    }, [handlePage]);

    return (
        <main>
            <div className="cost-wr d-f align-center">
                <div>
                    <h2 className="cost-title">Заповніть таблицю</h2>
                    <p className="cost-note">* обов'язкові для заповнення поля</p>
                    <form action="" className='cost-fm d-f'>
                        <div className="input-bl d-f">
                            <label htmlFor="fname">Ім’я*</label>
                            <input type="text" name='fname' id='fname' placeholder='Вікторія' required />
                        </div>
                        <div className="input-bl d-f">
                            <label htmlFor="lname">Прізвище*</label>
                            <input type="text" name='lname' id='lname' placeholder='Литовченко' required />
                        </div>
                        <div className="input-bl d-f">
                            <label htmlFor="email">Пошта*</label>
                            <input type="email" name="email" id="email" placeholder='viktoria_litovchenko@gmail.com' required />
                        </div>
                        <div className="input-bl d-f">
                            <label htmlFor="remail">Повторіть пошту*</label>
                            <input type="email" name="remail" id="remail" placeholder='viktoria_litovchenko@gmail.com' required />
                        </div>
                        <div className="input-bl input-bl-subject d-f">
                            <label htmlFor="subject">Тема*</label>
                            <input type="text" name='subject' id='subject' placeholder='Запит ціни - зустрічі CBD' required />
                        </div>
                        <div className="input-bl d-f">
                            <label htmlFor="msg">Повідомлення*</label>
                            <textarea name="msg" id="msg" placeholder='Insert text here.' required></textarea>
                        </div>
                        <div className="input-bl d-f">
                            <label htmlFor="company">Компанія</label>
                            <input type="text" name='company' id='company' />
                        </div>
                        <div className="input-bl d-f">
                            <label htmlFor="">Бюджет*</label>
                            <div className="budget-box d-f">
                                <div className="budget-item">1000-2500</div>
                                <div className="budget-item">2501-3500</div>
                                <div className="budget-item">3501-5000</div>
                                <div className="budget-item">5001-10000</div>
                                <div className="budget-item">10000+</div>
                            </div>
                        </div>
                        <div className="input-bl d-f">
                            <label htmlFor="date">Дата заходу*</label>
                            <input type="text" className='input-date' name='date' id='date' placeholder='mm/dd/yyyy' />
                        </div>
                        <div className="input-bl d-f">
                            <label htmlFor="">Кількість гостей</label>
                            <div className="guests-box d-f">
                                <div className="guests-item">0-50</div>
                                <div className="guests-item">50-100</div>
                                <div className="guests-item">100-150</div>
                                <div className="guests-item">150-200</div>
                                <div className="guests-item">200+</div>
                            </div>
                        </div>
                        <div className="input-bl d-f">
                            <label htmlFor="">Це тематичний захід*</label>
                            <div className="events-box d-f">
                                <div className="events-item">Так</div>
                                <div className="events-item">Ні</div>
                                <div className="events-item events-item__question">Що таке тематичний захід?</div>
                            </div>
                        </div>
                        <div className="cost-fm-info d-f">
                            <p>
                                Зустрічі та спеціальні заходи CBD <br />
                                450 Massachusetts Ave, NW <br />
                                Вашингтон, округ Колумбія 20001
                            </p>
                            <p>
                                Телефон: <span>+1 202 742 5923 </span>x 160  <br />
                                Електронна адреса: <span>info@cbdmeetings.com</span>
                            </p>
                            <p>
                                Інтернет-магазин організації заходів <br />
                                Подарунковий Шоколад <br />
                                <span>http://www.giftedchocolate.com</span>
                            </p>
                            <p>
                                Соціальні мережі
                                Facebook.com/<span>CouturebyDesign</span> <br />
                                Twitter: <span>@couturebydesign</span> <br />
                                Електронна адреса: <span>info@cbdmeetings.com</span>
                            </p>
                        </div>
                        <button type='button' className='cost-fm-send'>Надіслати</button>
                    </form>
                </div>
                <div>
                    <h3 className="events-proposition-title">Якщо ви знаєте, який тип події хотіли б, надішліть запит на пропозицію.</h3>
                    <div><img src="images/events-proposition.png" alt="events-proposition" /></div>
                    <button type='button' className='events-proposition-download'>Загрузити брошуру</button>
                    <div className="events-select-content d-f">
                        <div>
                            <h3 className='events-select-title'>Тип заходу*</h3>
                            <div className="events-select-box d-f">
                                <div className="events-select-item">Вечірка</div>
                                <div className="events-select-item">Корпоративний захід</div>
                                <div className="events-select-item">Вечерній захід</div>
                                <div className="events-select-item">Збір коштів</div>
                                <div className="events-select-item">Рецепція</div>
                                <div className="events-select-item">Маркетинг стилю життя</div>
                                <div className="events-select-item">Святкова вечірка</div>
                                <div className="events-select-item">Політичний захід</div>
                                <div className="events-select-item">Ювілейне святкування</div>
                                <div className="events-select-item">Інше</div>
                                <div className="events-select-item">Весілля</div>
                            </div>
                        </div>
                        <div>
                            <h3 className='events-select-title'>Вимоги до логістики*</h3>
                            <div className="events-select-box d-f">
                                <EventsSelect title='Аудіовізуал' />
                                <EventsSelect title='Реєстраційний штат' />
                                <EventsSelect title='Звук' />
                                <EventsSelect title='Фотозйомка' />
                                <EventsSelect title='Відеозйомка' />
                                <EventsSelect title='Послуги планування' />
                                <EventsSelect title='Освітлення заходів (Кольорове освітлення)' />
                                <EventsSelect title='Мені не потрібні жодні з цих послуг' />
                            </div>
                        </div>
                        <div>
                            <h3 className='events-select-title'>Необхідне обладнання*</h3>
                            <div className="events-select-box d-f">
                                <EventsSelect title='Ноутбук' />
                                <EventsSelect title='Подіум' />
                                <EventsSelect title='Доступ в інтернет' />
                                <EventsSelect title='Проекційний екран' />
                                <EventsSelect title='Запис відео' />
                                <EventsSelect title='Проектор' />
                                <EventsSelect title='Мікрофон' />
                                <EventsSelect title='Сцена' />
                                <EventsSelect title='Накладні мікрофони' />
                                <EventsSelect title='Нічого не потрібно' />
                            </div>
                        </div>
                        <div>
                            <h3 className='events-select-title'>Елементи підтримки реєстрації*</h3>
                            <div className="events-select-box d-f">
                                <EventsSelect title='Власники значків' />
                                <EventsSelect title='Вивіски' />
                                <EventsSelect title='Шнурки' />
                                <EventsSelect title='Брошури' />
                                <EventsSelect title='Роздатковий матеріал' />
                                <EventsSelect title='Нічого не потрібно' />
                                <EventsSelect title='Плакати' />
                            </div>
                        </div>
                    </div>
                    <form action="" className="events-select-fm">
                        <p className="select-fm-note">
                            Будь ласка, надайте нам будь-яку додаткову інформацію про вашу подію
                            чи потреби в управлінні місцем призначення.
                        </p>
                        <textarea name="addedInfo" id="addedInfo"></textarea>
                        <div className="captcha-wr d-f align-center">
                            <div className="captcha-content"><img src="images/captcha.png" alt="captcha" /></div>
                            <label htmlFor="captchaInput">Введіть код:*</label>
                            <input type="text" name='captchaInput' id='captchaInput' />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Cost