import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header d-f'>
        <div> <Link to='/'><img src="images/logo.svg" alt="Logo" /></Link></div>
        <div>
            <div className="header-info d-f">
                <div className="header-contacts d-f align-center">
                    <div className="header-social d-f">
                        <div><img src="images/header-social1.svg" alt="header-social1" /></div>
                        <div><img src="images/header-social2.svg" alt="header-social2" /></div>
                        <div><img src="images/header-social3.svg" alt="header-social3" /></div>
                    </div>
                    <div className="header-contacts-item">202.742.5923 ext. 160</div>
                    <div className="header-contacts-item">info@cbdmeetings.com</div>
                </div>
                <button className='header-login-btn'>Логін | Зареєструватися</button>
            </div>
            <div className="header-bar d-f">
                <nav>
                    <ul className="header-nav d-f align-center">
                        <li className="header-nav-item"><a href="">Про нас</a></li>
                        <li className="header-nav-item"><a href="">Сервіси</a></li>
                        <li className="header-nav-item"><a href="">Портфоліо</a></li>
                        <li className="header-nav-item"><a href="">Клієнти</a></li>
                        <li className="header-nav-item"><a href="">Магазин</a></li>
                        <li className="header-nav-item"><a href="">Контакти</a></li>
                        <li className="header-nav-item"><a href="">Вартість</a></li>
                        <li className="header-nav-item"><a href="">Події</a></li>
                    </ul>
                </nav>
                <form action="" className="header-form-search d-f align-center">
                    <input type="text" name='searchQuery' placeholder='Пошук' />
                    <button type='button'><img src="images/search.svg" alt="Search" /></button>
                </form>

            </div>
        </div>
    </header>
  )
}

export default Header