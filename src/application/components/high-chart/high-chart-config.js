import * as finalData from '../../data/dataCalculation';
console.log(finalData,'shdgui3rhfigt4');
export let chartOptions = {
  chart: {
      type: 'line'
  },
  title: {
      text: 'Monthly Average Temperature'
  },
  subtitle: {
      text: 'Source: WorldClimate.com'
  },
  xAxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  },
  yAxis: {
      title: {
          text: 'Hours'
      }
  },
  plotOptions: {
      line: {
          dataLabels: {
              enabled: true
          },
          enableMouseTracking: false
      }
  },
  series: [{
      name: 'Denny',
      data: []
  }, {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }]
};
