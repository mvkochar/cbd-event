import React from 'react'
import Header from '../Header/Header'
import './Top.css'
import { title } from 'process'

type TopProps = {
    pageNum?: number
}

const Top = ({ pageNum = 1 }: TopProps) => {
    const bgImage = () => {
        return "url('images/top-bg" + `${pageNum}.png') no-repeat`
    }

    const getTopHeight = ()=> {
        switch(pageNum) {
            case 1:
                return "844px"
            case 2:
                return "555px" 
            case 3:
                return "549px"       
        }
    }

    const getMarginLeft = () => {
        switch(pageNum) {
            case 1:
                return "475px"
            case 2:
                return "265px" 
            case 3:
                return "0"       
        }
    }


    return (
        <div className="cbd-top" style={{height: getTopHeight(), background: bgImage() }}>
            <Header />
            <div className="cbd-main" style={{marginLeft: getMarginLeft()}}>
                {
                    pageNum === 1
                        ?
                        <>
                            <h1 className="cbd-main-title">#1 Організатор корпоративних заходів</h1>
                            <h3 className="cbd-main-desc">
                                Протокол зустрічей і заходів CBD. Ми є фірмою №1 з корпоративного планування
                                у Вашингтоні для міжнародних урядів, дипломатів і банків.
                                <a href="" className='cbd-main-more'>Детальніше</a>
                            </h3>
                        </>
                        : pageNum === 2 ?
                            <>
                                <h1 className="cbd-main-title">Про CBD: Планування заходів</h1>
                                <h3 className="cbd-main-desc">
                                    Найкращий організатор у плануванні та проведенні різноманітних подій.
                                </h3>
                            </>
                            : pageNum === 3 ?
                            <h1 className="cbd-main-title" style={{textAlign: 'center'}}>Сервіси</h1>
                            :
                            null
                }
            </div>

        </div>
    )
}

export default Top