import React from 'react';
import styled from 'styled-components';

const options = new Array;
for (let i = 1; i <= 10; i++) {
  options.push(i);
}

const PartyTitle = styled.div `
  font-size: .875rem;
  font-weight: 500;
  padding-bottom: .25rem;
  font-family: 'Mukta', Helvetica;
  text-align: left;
`;

const PartySelect = styled.select `
  border: none;
  border-bottom: 1px solid #d8d9db;
  width: 288px;
  height: 34px;
  margin: .5rem;
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
      <div>
        <PartySelect>
          {options.map(option => (
            <option value={option} label={`For ${option}`}>{option}</option>
          ))};
        </PartySelect>
      </div>

    );
  }
}

export default PartySize;