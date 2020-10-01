import React from 'react';
import Select, { components } from 'react-select';
import styled from 'styled-components';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Container = styled.div `
  display: inline-block
`;

const DateTitle = styled.div `
  font-size: .875rem;
  font-weight: 500;
  padding-bottom: .25rem;
  font-family: Helvetica;
  text-align: left;
`;

const DateButton = styled.button `
background-color: white;
text-align: left;
box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #d8d9db;
  width: 152px;
  height: 34px;
  margin: 0 .5rem .5rem 0;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #da3743;
  }
    &:focus {
    outline: none !important;
    }
`;

class ReservationDate extends React.Component {

  constructor(props) {
    super(props);
  }

  handleDate(e) {
    this.props.handleDate();
  }

  render() {
    const selectedDate = new Date(this.props.selectedDate);
    return (
      <Container>
        <DateTitle>Date</DateTitle>
        <DateButton onClick={this.props.handleDate}>
          {`${days[selectedDate.getDay()]}, ${selectedDate.getMonth()}/${selectedDate.getDate()}`}
        </DateButton>
      </Container>
    );
  }
}

export default ReservationDate;