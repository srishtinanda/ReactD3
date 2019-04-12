export let chartOptions = {
  chart: {
      type: 'line'
  },
  title: {
      text: 'Daily Average Hours Worked'
  },
  xAxis: {
      type: 'datetime'
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
      pointStart: Date.UTC(2018, 8, 1),
      pointInterval: 24 * 3600 * 1000/2
  }]
};
