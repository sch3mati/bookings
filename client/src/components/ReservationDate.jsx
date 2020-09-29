import React from 'react';
import Select, { components } from 'react-select';
import styled from 'styled-components';

const SingleValue = props => (
  <components.SingleValue {...props}>
    {props.data.value}
  </components.SingleValue>
);

const options = new Array;
for (let hour = 7; hour < 24; hour++) {
  for (let minute = 0; minute <= 30; minute += 30) {
    const time = `${(hour <= 12 ? hour : hour - 12)}:${String(minute).padStart(2, '0')} ${hour <= 12 ? 'AM' : 'PM'}`;
    options.push({
      label: time,
      value: time
    });
  }
}

class ReservationDate extends React.Component {

  handleDate(e) {
    this.props.handleDate(e.value);
  }

  render() {
    return (
      <div>
        <div>Date</div>
        <Select onChange={this.handleDate.bind(this)} options={options} components={{ SingleValue }} />
      </div>
    );
  }
}

export default ReservationDate;