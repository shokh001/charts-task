import { useState } from 'react'
import help from '../../assets/icons/help.svg'
import './finranksScore.css'

const FinranksScore = () => {

    const [data, setData] = useState([
        { id: 1, rate: 9, title: 'Financial strength' },
        { id: 2, rate: 10, title: 'Profitability' },
        { id: 3, rate: 10, title: 'Effectiveness' },
        { id: 4, rate: 7, title: 'Growth' },
        { id: 5, rate: 5, title: 'Forecast' },
        { id: 6, rate: 8, title: 'Valuation' },
        { id: 7, rate: 6, title: 'Economic moat' },
    ])

    return (
        <div className='finranksScore'>
            <div className="card-header">
                <h3>Finranks SCORE</h3>
                <img src={help} alt="help" />
            </div>

            <div className="card-body">
                <div className='card-body_head'>
                    <h2>7.7 / 10.0</h2>
                    <div className="head-bar">
                        <div className='after'></div>
                    </div>
                </div>

                <ul>
                    {
                        data.map(({ id, title, rate }) => <li key={id}>
                        <div className="card-body_head-left">{title}</div>
                        <div className="card-body_head-right">
                            <div style={{color:  rate>=9? '#006B3D': rate>=7? '#3CDA73': '#FFCA2D'}} className="info">{rate}</div>
                            <div className='body-bar'>
                                <div style={{ width: `${rate / 10 * 100}%`, 
                                background: rate>=9? '#006B3D': rate>=7? '#3CDA73': '#FFCA2D'                                
                            }} className='after'></div>
                            </div>
                        </div>
                    </li>)
                    }

                </ul>
            </div>
        </div>
    )
}
export default FinranksScore;