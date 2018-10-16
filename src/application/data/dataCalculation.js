// // import CsvParse from '@vtex/react-csv-parse'
// // import React from 'react';

// // export class DataCalculation extends React.Component {
// //   render() {
// //     const keys = [
// //       "Start_Date",
// //       "Start_Time",
// //       "Start_Time_Symbol",
// //       "Stop_Date",
// //       "Stop_Time",
// //       "Stop_Time_Symbol"
// //     ]
// //     console.log('it comes?')
// //     return (
// //       <CsvParse
// //         keys={keys}
// //         onDataUploaded={this.handleData}
// //         onError={this.handleError}
// //         render={onChange => <input type="file" onChange={onChange} />}
// //       />
// //     );
// //   }

// // handleData = data => {
// //   console.log(data,'does it calculate');
// //   this.setState({ data })
// // }
// // }
import * as d3 from 'd3';

// d3.csv("./denny.csv", function(error, data) {
//   console.log(data);
//   // data.forEach(function(data) {
//           // create country object out of parsed fields
//          return { "name" : data[0]
//                         , "code" : data[1]
//                         , "continent" : data[2]
//                         , "population" : data[4]
//                         , "size" : data[5]
//                         };
//              //         });
// });
console.log('hcsjdbfkjdnghg',d3, d3.csv());
d3.csv("./denny.csv")
  .get(function(data) {
        console.log(data);
  });


// // // import * as fs from 'fs';
// var fs = require("fs");
// // //import 'fs' as fs;
// // // import * as CSV from 'fast-csv';

// // export let finalData = [];

 //  fs.createReadStream('./denny.csv')
 // .pipe(CSV())
// .on('data', function(data){
// console.log(data);
 // finalData= data;
 // })
// .on('end', function(data){
// console.log('parsing finished');
 // });

 // import Papa from 'papaparse';
 // var file =  require('./denny.txt');
//// import * as file from './denny.txt';
// // var parse = require('csv-parse');
// console.log("Processing Countries file");
 
// var parser = parse({delimiter: ','}, function (err, data) {
//     // when all countries are available,then process them
//     // note: array element at index 0 contains the row of headers that we should skip
//     data.forEach(function(line) {
//       // create country object out of parsed fields
//       var country = { "name" : line[0]
//                     , "code" : line[1]
//                     , "continent" : line[2]
//                     , "population" : line[4]
//                     , "size" : line[5]
//                     };
//      console.log(JSON.stringify(country));
//      console.log(data,'what it shoewzs');
//     });    
// });
 
// // read the inputFile, feed the contents to the parser
// // fs.readFileSync(inputFile).pipe(parser);
// fs.open(inputFile, 'r', (err, fd) => {
//   if (err) {
//     if (err.code === 'ENOENT') {
//       console.error('myfile does not exist');
//       return;
//     }

//     throw err;
//   }

//   // readMyData(fd);
//   console.log(fd)
// });
// const config = {
//   delimiter: ','
// };
// console.log(file,'is it there');
// '********************',Papa.parse('./denny.csv', config, {
// 	complete: function(results) {
// 		console.log("Finished:", results.data);
//	}}));
