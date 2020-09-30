import React from 'react';
import styled from 'styled-components';

const options = new Array;
for (let i = 1; i <= 10; i++) {
  options.push(i);
}

const Container = styled.div `
  display: inline-block
`;

const PartyTitle = styled.div `
  font-size: .875rem;
  font-weight: 500;
  padding-bottom: .25rem;
  font-family: Helvetica;
  text-align: left;
`;

const PartySelect = styled.select `
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #d8d9db;
  width: 312px;
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

class PartySize extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePartySize(e) {
    this.props.handlePartySize(e.value);
  }

  render() {
    return (
      <Container>
        <PartyTitle>Party Size</PartyTitle>
        <PartySelect>
          {options.map(option => (
            <option key={option} value={option} label={`For ${option}`}>{option}</option>
          ))};
        </PartySelect>
      </Container>

    );
  }
}

export default PartySize;