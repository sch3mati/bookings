import React from 'react';
import PartySize from './PartySize.jsx';
import ReservationTime from './ReservationTime.jsx';
import ReservationDate from './ReservationDate.jsx';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.section `
  width: 320px;
  border-radius: 2px;
  background-color: #fff;
  text-align: center;
  font-size: 21px;
  padding: .75rem 1rem;
  box-shadow: 0 2px 8px rgba(153,153,153,.4);
  margin: 0;
`;

const Title = styled.div `
  font-family: 'Mukta', Helvetica;
  border-bottom: 1px solid #d8d9db;
`;

const Button = styled.button `
  font-family: sans-serif;
  background-color: #da3743;
  font-size: 1rem;
  color: #fff;
  width: 18rem;
  border: none;
  border-radius: 2px;
  font-weight: 500;
  padding: .75rem 1rem;
  display: block;
  margin: auto;
`;

const BookedAmount = styled.span `
  font-family: 'Mukta', Helvetica;
  height: 24px;
  font-size: 14px;
  font-weight: 500;
  padding: .75rem;
  vertical-align: bottom
`;

const ChartIcon = styled.img `
vertical-align: -webkit-baseline-middle;
  height: 24px;
`;

class Bookings extends React.Component {
  constructor() {
    super();
    this.state = {
      partySize: 2,
      ReservationDate: (new Date()).toLocaleDateString(),
      ReservationTime: '7:00 PM'
    };
  }

  handlePartySize(partySize) {
    this.setState({
      partySize: partySize
    });
  }

  handleDate(date) {
    console.log(date);
  }

  handleTime(time) {
    console.log(time);
  }

  handleSearch() {
    console.log(this.state);
    axios.get('/api/bookings/5', {
      params: {
        date: `${this.state.ReservationDate} ${this.state.ReservationTime}`,
        partySize: this.state.partySize
      }
    })
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <Wrapper>
        <Title>Make a reservation</Title>
        < PartySize handlePartySize={this.handlePartySize.bind(this)}/>
        < ReservationDate handleDate={this.handleDate.bind(this)} />
        < ReservationTime handleTime={this.handleTime.bind(this)} />
        < Button onClick={this.handleSearch.bind(this)} >Find a table</Button>
        <ChartIcon src="https://cdn.icon-icons.com/icons2/1875/PNG/512/linechart_120376.png"></ChartIcon>
        <BookedAmount>
            Booked {5 + Math.floor(Math.random() * 5)} times today
        </BookedAmount>
      </Wrapper>
    );
  }
}

export default Bookings;