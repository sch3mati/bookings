import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
  font-family: Helvetica;
  background-color: #da3743;
  font-size: .875rem;
  color: #fff;
  width: 95px;
  height: 32px;
  border: none;
  border-radius: 2px;
  font-weight: 100;
  padding: 0 4px;
  display: inline;
  margin: 0 .25rem .5rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(218, 55, 67, .4)
  }
`;

const Select = styled.div `
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  font-family: Helvetica;
  margin: .5rem;
  text-align: left
`;

class Availabilities extends React.Component {
  constructor(props) {
    super(props);
  }

  pickTime (e) {
    this.props.handleReserve(e.target.value);
  }

  render() {
    return (
      <div>
        <Select>Select a time:</Select>
        {this.props.availabilities.map((availability) => (
          <Button onClick={this.pickTime.bind(this)} key={availability} value={(new Date(availability)).toLocaleTimeString()}>{(new Date(availability)).toLocaleTimeString([], {timeStyle: 'short'})}</Button>
        ))}
      </div>
    );
  }
}

export default Availabilities;