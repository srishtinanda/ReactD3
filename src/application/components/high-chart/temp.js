// import * as React from 'react';
// import * as Highcharts from 'highcharts';

// export const optionsTimeSeries = {
//     time: {
//         useUTC: false
//     },
//     chart: {
//         zoomType: 'x',
//         height: 222
//     },
//     credits: {
//         enabled: false
//     },
//     title: {
//         text: null
//     },
//     tooltip: {
//         borderRadius: 0,
//         backgroundColor: '#FFFFFF',
//         borderWidth: 0,
//         useHTML: true,
//         padding: 8,
//         shadow: true,
//         style: {
//             fontFamily: 'AkkuratPro-Regular vHelvetica Neue, Helvetica, Arial, sans-serif',
//             fontWeight: 'normal',
//             fontSize: '12px'
//         }

//     },
//     xAxis: {
//         lineColor: '#dadada',
//         startOnTick: false,
//         showFirstLabel: true,
//         type: 'datetime',
//         tickPosition: 'inside',
//         tickColor: '#dadada',
//         tickInterval: 60 * 60 * 1000,
//         labels: {
//             style: {
//                 color: '#767676',
//                 fontFamily: 'AkkuratPro-Regular vHelvetica Neue, Helvetica, Arial, sans-serif',
//                 fontWeight: 'normal',
//                 fontSize: '12px'
//             },
//             format: '{value:%l%P}'
//         },
//         plotLines: [{
//             color: '#dadada'
//         }]
//     },
//     yAxis: {
//         lineWidth: 1,
//         lineColor: '#dadada',
//         plotLines: [{
//             color: '#FF0000',
//             width: 1,
//             value: 0
//         }],
//         tickInterval: 25,
//         max: 100,
//         min: 0,
//         labels: {
//             format: '{value}%',
//             style: {
//                 color: '#767676',
//                 fontFamily: 'AkkuratPro-Regular vHelvetica Neue, Helvetica, Arial, sans-serif',
//                 fontWeight: 'normal',
//                 fontSize: '12px'
//             }
//         },
//         title: {
//             text: null
//         }
//     },
//     legend: {
//         enabled: false
//     },
//     plotOptions: {
//         series: {
//             lineWidth: 2,
//             shadow: false,
//             cursor: 'pointer',
//             marker: {
//                 enabled: false,
//                 radius: 2,
//                 fillColor: '#FFFFFF',
//                 lineColor: '#5E50BF',
//                 lineWidth: 1,
//                 states: {
//                     hover: {
//                         radiusPlus: 2
//                     }
//                 }
//             },
//             states: {
//                 hover: {
//                     halo: {
//                         size: 2,
//                         opacity: 100
//                     },
//                     lineWidthPlus: 0
//                 }
//             }
//         }
//     }
// }

// export class TCHighcharts extends React.Component {

//   chart;
//   chartElement;

//     componentDidMount() {
//         const chartOptions = {
//             ...optionsTimeSeries,
//             ...this.props.chartOptions
//         }
//         this.chart = Highcharts.chart(this.chartElement, chartOptions);
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         const { chartOptions } = this.props;
//         const { chartOptions: nextChartOptions } = nextProps;
//         return chartOptions !== nextChartOptions;
//     }

//    componentWillUnmount() {
//         this.chart.destroy();
//     }

//     componentDidUpdate() {
//         const chartOptions = {
//             ...optionsTimeSeries,
//             ...this.props.chartOptions
//         }

//         this.chart.update(chartOptions);
//     }

//   render() {
//         return (
//             <div ref={(element) => this.chartElement = element} className={this.props.className} />
//         );
//     }

// }
