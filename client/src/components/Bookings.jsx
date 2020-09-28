import React from 'react';
import PartySize from './PartySize.jsx';
import DateTime from './DateTime.jsx';
import styled from 'styled-components';

const Button = styled.button`
  font-family: sans-serif;
  background-color: #da3743;
  font-size: 1rem;
  color: #fff;
  width: 18rem;
  border: none;
  border-radius: 2px;
  font-weight: 500;
  padding: .75rem 1rem
`;

class Bookings extends React.Component {
  constructor() {
    super();
    this.state = {
      partySize: 2,
      dateTime: ''
    };
  }

  render() {
    return (
      <div>
        <div>Make a reservation</div>
        < PartySize />
        < DateTime />
        <Button>Find a table</Button>
        <div>
          <img src="https://cdn.icon-icons.com/icons2/1875/PNG/512/linechart_120376.png"></img>
          Booked {5 + Math.floor(Math.random() * 5)} times today</div>
      </div>
    );
  }
}

export default Bookings;