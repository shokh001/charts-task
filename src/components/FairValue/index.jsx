import GaugeChart from 'react-gauge-chart'
import help from '../../assets/icons/help.svg'
import triangle from '../../assets/icons/traingle.svg'
import './fairValue.css'


const FairValue = () => {

  return (
    <div className='fairValue'>
      <div className="card-header">
        <h3>fair value</h3>
        <img src={help} alt="help" />
      </div>

      <div className="card-body">
        <div className="max-price">
          <span>Fire value</span>
          <h4>$142.45</h4>
          <img src={triangle} alt="" />
        </div>

        <GaugeChart
          nrOfLevels={420}
          arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
          colors={['#006B3D', '#3CDA73', '#FFCA2D', '#FF7A49', '#FF2A3A']}
          percent={0.37}
          arcWidth={0.35}
          arcPadding={0}
          needleColor={'#746FF2'}
          needleBaseColor={'#746FF2'}
          hideText={true}
          className={'Guage'}
        />

        <div className="price">
          <span>Stock Price</span>
          <h4>$131.19</h4>
        </div>

        <span className='Undervalued'>Undervalued</span>
        <span className='Overvalued'>Overvalued</span>
      </div>
    </div>
  )
}

export default FairValue