import help from '../../assets/icons/help.svg'
import './analystRating.css'
import ReactApexChart from 'react-apexcharts'

const AnalystRating = () => {

  const series = [{
    name: 'Strong sell',
    data: [44, 55, 41, 67]
  }, {
    name: 'Sell',
    data: [13, 23, 20, 8]
  }, {
    name: 'Hold',
    data: [11, 17, 15, 15]
  }, {
    name: 'Buy',
    data: [21, 7, 25, 13]
  },
   {
    name: 'Strong buy',
    data: [21, 7, 25, 13]
  }]

  const options = {
    colors: ['#006B3D', '#3CDA73', '#FFCA2D', '#FF7A49', '#D3212C'],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    xaxis: {
      type: 'datetime',
      categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT'
      ],
      labels: {
        style: {
            colors: ['#8D9092', '#8D9092', '#8D9092', '#8D9092'],
            fontSize: '12px',
            fontWeight: 400,
        },
      }
    },
    legend: {
      position: 'bottom',
      offsetY: 40,
      markers: {
        width: 10,
        height: 21,
        radius: 10
      },
    },
    fill: {
      opacity: 1
    }
  }

  return (
    <div className='analystRating'>
      <div className="card-header">
        <h3>Analyst rating</h3>
        <img src={help} alt="help" />
      </div>

      <div className="card-body">
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
    </div>
  )
}

export default AnalystRating