import React, { Component } from 'react';
import '../App.css';

export default class DataCharts extends Component {
  render() {
    return (

      <div>
        <div className="row">
          <div className="col-8">
            <h3>TRAFFIC</h3>
          </div>
          <div className="col-4">
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
          </div>
          <div className="col-11">
            <canvas id="trafficChart" width="300" height="100" />
          </div>
        </div>

        <div className="full-line"></div>
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
        <div class="center-line"></div>
      </div>
      );
    }
  }
