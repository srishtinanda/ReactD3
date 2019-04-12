import React from 'react';
import * as Highcharts from 'highcharts';
import { chartOptions } from './high-chart-config';
import axios from 'axios';
import * as denny from'../../fetch-data/data/denny.csv';
import { dataManipulation } from '../../fetch-data/data-calculation/dataCalculation';
// import { connect } from 'react-redux';

class Denny extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        denny: {}
    };
}
  chart;
  render() {
    return (
      <div id="high-chart-container">
        wrk in progress!!!!
        {this.check()}
      </div>
    );
  }
  componentDidMount() {
    this.getData();
    axios.get(`${denny}`)
    .then((response) => {
      let data = dataManipulation(Object.values(response.data.split('\n')));
      this.setState({
        denny: data
      })
    this.chart.series[0].setData(Object.values(this.state.data));
    })
    .catch(function (error) {
      console.log(error);
    });
   this.chart = Highcharts.chart('high-chart-container', chartOptions);
  }
}

export default Denny;