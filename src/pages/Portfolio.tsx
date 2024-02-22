import React from 'react'
import '../global.css'
import './Portfolio.css'

type PortfolioProps = {
    handlePage: (pageNum: number) => void
}

const Portfolio = ({ handlePage }: PortfolioProps) => {
    React.useEffect(() => {
        handlePage(4)
    }, [handlePage]);


    return (
        <main>
            <div className="portfolio-video">
                <h2 className="portfolio-video-title">Інформаційні відео CBD</h2>
                <p className="portfolio-video-desc">
                    CBD співпрацює з головним відеооператором Маршаллом Леві для створення відео високої чіткості вашої події. 
                    Відеоформати доступні для перепродажу, онлайн та інші цифрові формати. Для отримання додаткової інформації 
                    про наші послуги відеозйомки натисніть тут
                </p>
                <button type='button' className='portfolio-video-more'>Детальніше</button>
            </div>
        </main>
    )
}

export default Portfolio