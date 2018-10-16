import React from 'react';
import * as Highcharts from 'highcharts';
import { chartOptions } from './high-chart-config';

class HighChart extends React.Component {
  chart;
  chartOptions;
  render() {
    return (
      <div id ="high-chart-container">
        wrk in progress!!!!
      </div>
    );
  }
   componentDidMount() {
    this.chartOptions = chartOptions;
    this.chart = Highcharts.chart('high-chart-container', chartOptions);
}
}

export default HighChart;