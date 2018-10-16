import React, { Component } from 'react';
import './time-sheet.css';
import HighChart from './components/high-chart/high-chart';

class TimeSheet extends Component {
  render() {
    return (
      <div className="application">
        <h2 className = "header">
          Employee TimeSheet
        </h2>
        <HighChart/>
      </div>
    );
  }
}

export default TimeSheet;