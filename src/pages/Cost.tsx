import React from 'react'
import '../global.css'
import './Cost.css'

type CostProps = {
    handlePage: (pageNum: number) => void
}

const Cost = ({ handlePage }: CostProps) => {
    React.useEffect(() => {
        handlePage(5)
    }, [handlePage]);

    return (
        <main>
            <div className="cost-wr d-f jc-sb align-center">
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
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Cost