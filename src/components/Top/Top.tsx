import React from 'react'
import Header from '../Header/Header'
import './Top.css'

type TopProps = {
    pageNum?: number
}

const Top = ({ pageNum = 1 }: TopProps) => {
    const bgImage = () => {
        console.log ("url('images/top-bg" +   `${pageNum}.png') no-repeat`)
       return "url('images/top-bg" +   `${pageNum}.png') no-repeat`
    }


    return (
        <div className="cbd-top" style={{background: bgImage()}}>
            <Header />
            <div className="cbd-main">
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
                        :
                        null
            }
            </div>

        </div>
    )
}

export default Top