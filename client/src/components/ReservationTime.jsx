import React from 'react';
import Select, { components } from 'react-select';
import styled from 'styled-components';

const Container = styled.div `
  display: inline-block
`;

const TimeTitle = styled.div `
  font-size: .875rem;
  font-weight: 500;
  padding-bottom: .25rem;
  font-family: Helvetica;
  text-align: left;
`;

const TimeSelect = styled.select `
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #d8d9db;
  width: 152px;
  height: 34px;
  margin: 0 .5rem .5rem .0;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #da3743;
  }
  &:focus {
    outline: none !important;
    }
`;

const options = new Array;
for (let hour = 7; hour < 24; hour++) {
  for (let minute = 0; minute <= 30; minute += 30) {
    const time = `${(hour <= 12 ? hour : hour - 12)}:${String(minute).padStart(2, '0')} ${hour <= 12 ? 'AM' : 'PM'}`;
    options.push(time);
  }
}

class ReservationTime extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTime(e) {
    this.props.handleTime(e.value);
  }

  render() {
    return (
      <Container>
        <TimeTitle>Time</TimeTitle>
        <TimeSelect>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))};
        </TimeSelect>
      </Container>
    );
  }
}

export default ReservationTime;