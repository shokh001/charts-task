import help from '../../assets/icons/help.svg'
import './octagonView.css'
import ReactApexChart from 'react-apexcharts'

const OctagonView = () => {

  const series = [{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20, 30, 10],
  }, {
    name: 'Series 2',
    data: [20, 30, 40, 80, 20, 80, 30, 10],
  }, {
    name: 'Series 3',
    data: [44, 76, 78, 13, 43, 10, 30, 10],
  }]

  const options = {
    chart: {
      height: 400,
      type: 'radar',
      toolbar: { show: false },
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },
    legend: { show: false },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: '#736FF2',
          strokeWidth: 1,
          connectorColors: '#736FF2',
          fill: {
            colors: ['rgba(206, 231, 253, 0.5)', '#fff']
          }
        }
      }
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 2,
      fillOpacity: 0.2,
      hover: {
        size: 3
      }
    },
    xaxis: {
      categories: ['Financial strength', 'Profitability', 'Effectiveness', 'Growth', 'Forecast', 'Dividend', 'Economic moat']
    },
    yaxis: {
      show: false
    }

  }

  return (
    <div className='octagonView'>
      <div className="card-header">
        <h3>Octagon view</h3>
        <img src={help} alt="help" />
      </div>

      <div className="card-body">
        <ReactApexChart options={options} series={series} type="radar" height={400} width={'100%'} />
      </div>
    </div>
  )
}

export default OctagonView