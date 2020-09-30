import React from 'react';
import Select, { components } from 'react-select';
import styled from 'styled-components';

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

const DateSelect = styled.select `
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

  handleDate(e) {
    this.props.handleDate(e.value);
  }

  render() {
    return (
      <Container>
        <DateTitle>Date</DateTitle>
        <DateSelect>
        </DateSelect>
      </Container>
    );
  }
}

export default ReservationDate;