import React, {
  Component
} from 'react';
import '../App.css';
// Dependances
import {
  Bar,
  Doughnut,
  Line
} from 'react-chartjs-2';
import {
  Row,
  Col,
  Clearfix,
} from 'react-bootstrap';

export default class DataCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthly: {
        labels: [
          "January", "February", "March", "April", "May", "June", "July",
          "August", "September", "October", "November", "December"
        ],
        data: [750, 1250, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 250, 1800],
      },
      weekly: {
        labels: [
          "16-22", "23-29", "30-5", "6-12", "13-19",
          "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"
        ],
        data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
      },
      daily: {
        labels: [
          "Monday", "Tuesday", "Wednesday",
          "Thursday", "Friday", "Saturday", "Sunday"
        ],
        data: [75, 50, 75, 150, 100, 200, 175],
      },
      hourly: {
        labels: [
          "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
          "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
          "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
          "18:00", "19:00", "21:00", "22:00", "23:00"
        ],
        data: [75, 50, 75, 150, 100, 200, 175, 25, 5, 10, 10, 25, 50, 100, 250, 5, 0, 15, 30, 20, 25, 200, 170, 150]
      }
    };
  }

  componentDidMount() {
    console.log(this.refs.chart.chart_instance); // returns a Chart.js instance reference
  }

  render() {
    const dataLine = {
      displayName: 'Line Chart',
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [{
        label: 'Bandwith Used',
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(116, 119, 191, .25)",
        borderColor: "#7477bf",
        borderWidth: 1.5,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [750, 1250, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 250, 1800],
      }]
    };
    const dataBar = {
      displayName: 'Bar Chart',
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
        label: 'Weekly Traffic',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 0.2)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(153, 102, 255, 0.8)',
        hoverBorderColor: 'rgba(153, 102, 255, 0.2)',
        barPercentage: 0.5,
        data: [50, 75, 150, 105, 200, 170, 75],
      }],
    };
    const dataDoughnut = {
      displayName: 'MOBILE USERS',
      labels: ['Phones', 'Tablets', 'Desktop'],
      datasets: [{
        label: 'Mobile User\'s',
        data: [13, 12, 40],
        backgroundColor: [
          'rgba(129, 201, 143, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };


    return (
      <div>
        <Row>
          <Col xs={12} md={6}>
            <h3>TRAFFIC</h3>
          </Col>
          <Col md={6}>
            <div className="switch-toggle switch-candy">
              <input id="hour3" name="view3" type="radio" />
              <label className="widget-time" for="hour3" onclick="">Hourly</label>

              <input id="day3" name="view3" type="radio" />
              <label className="widget-time" for="day3" onclick="">Daily</label>

              <input id="week3" name="view3" type="radio" checked />
              <label className="widget-time" for="week3" onclick="">Weekly</label>

              <input id="month3" name="view3" type="radio" />
              <label className="widget-time" for="month3" onclick="">Monthly</label>

              <a></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h2>Line Example</h2>
            <Line
              data={dataLine}
              ref='chart'
              width={100}
              height={30}
              options={{
                maintainAspectRatio: true
            }}/>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
              <h2>Bar Example (custom size)</h2>
              <Bar
                data={dataBar}
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: true,
                  barPercentage: 0.1,
                  beginAtZero:true,
                }}
              />
          </Col>
          <Col xs={6} md={6}>
            <h2>Doughnut Example</h2>
            <Doughnut
              data={dataDoughnut}
              options={{
                maintainAspectRatio: true,
                rotation: 4,
                position: 'right',
                boxWidth: 14,
              }}
            />
          </Col>
        </Row>
        <Row>

        </Row>

        {/* <div className="full-line"></div>
        <div className="row">

          <div className="col-6">
            <h3>DAILY TRAFFIC</h3>
            <canvas id="myChart" width="100" height="50" />
          </div>
          <div className="col-6">
            <h3>MOBILE USERS</h3>
            <canvas id="myDoughnutChart" width="100" height="50" />
          </div>
        </div>
        <div class="center-line"></div> */}
      </div>
      // </Row>
    );
  }
}