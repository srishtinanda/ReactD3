import React from 'react';
import * as Highcharts from 'highcharts';
import { chartOptions } from './high-chart-config';
import axios from 'axios';
import * as denny from'../../fetch-data/data/denny.csv';
import { dataManipulation } from '../../fetch-data/data-calculation/dataCalculation';
// import { connect } from 'react-redux';
class HighChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        data: {}
    };
}
  chart;
  render() {
    return (
      <div id="high-chart-container">
        wrk in progress!!!!
      </div>
    );
  }
  componentDidMount() {
    this.getData();
  }

  getData =()=> {
    axios.get(`${denny}`)
      .then((response) => this.dothisthing(response))
      .catch(function (error) {
        console.log(error);
      });
     this.chart = Highcharts.chart('high-chart-container', chartOptions);
  }
  dothisthing = (response) =>{
    let data = dataManipulation(Object.values(response.data.split('\n')));
    this.setState({
      data: data
    });
    this.chart.series[0].setData(Object.values(this.state.data).reverse());
  }
}

export default HighChart