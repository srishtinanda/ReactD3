
export function dataManipulation(params) {
  let dataObject = {};
  params.slice(1).forEach(element => {
    const item = element.split(',');
    if(!(item[0] in dataObject)) {
      dataObject[item[0].toString()] = {
        startTime: new Date(item[0] + ' ' + item[1] + ' ' + item[2]),
        endTime: new Date(item[3] + ' ' + item[4] + ' ' + item[5])
      }
    } else {
      let newValue = [new Date(item[0] + ' ' + item[1] + ' ' + item[2]),
      new Date(item[3] + ' ' + item[4] + ' ' + item[5])];
      dataObject[item[0].toString()] = {
        startTime: dataObject[item[0].toString()].startTime > newValue[0] ? newValue[0] : dataObject[item[0].toString()].startTime,
        endTime: dataObject[item[0].toString()].endTime < newValue[1] ? newValue[1] : dataObject[item[0].toString()].endTime
      }
    }
  });
  return filterHoursWorked(dataObject);
}

function filterHoursWorked(hours) {
  for (let key in hours) {
    hours[key] = Math.round((hours[key].endTime - hours[key].startTime)*0.277/1000000*100)/100;
  }
  return hours;
}
