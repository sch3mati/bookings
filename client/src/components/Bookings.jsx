import React from 'react';
import PartySize from './PartySize.jsx';
import ReservationTime from './ReservationTime.jsx';
import ReservationDate from './ReservationDate.jsx';
import styled from 'styled-components';
import axios from 'axios';
import Availabilities from './Availabilities.jsx';
import ReservationModal from './ReservationModal.jsx';
import Calendar from './Calendar.jsx';

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
  font-family: Helvetica;
  border-bottom: 1px solid #d8d9db;
  margin-bottom: 16px;
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
  font-family: Helvetica;
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
      reservationDate: (new Date()).toLocaleDateString(),
      reservationTime: '7:00 PM',
      availabilities: new Array,
      displayTimes: false,
      modalOpen: false
    };
  }

  handlePartySize(partySize) {
    this.setState({
      partySize: partySize,
      displayTimes: false
    });
  }

  handleDate(date) {
    console.log(date);
  }

  handleTime(time) {
    this.setState({
      reservationTime: time,
      displayTimes: false
    });
  }

  handleSearch() {
    axios.get('/api/bookings/20', {
      params: {
        date: `${this.state.reservationDate} ${this.state.reservationTime}`,
        partySize: this.state.partySize
      }
    })
      .then(response => {
        this.setState({
          availabilities: response.data,
          displayTimes: true
        });
      });
  }

  handleReserve(time) {
    this.setState({
      reservationTime: time,
      modalOpen: true
    });
  }

  handleDisplayTimes() {
    this.setState({
      displayTimes: !this.state.displayTimes
    });
  }

  hideModal() {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    const renderModal = this.state.modalOpen;
    let modal;
    if (renderModal) {
      modal = < ReservationModal partySize={this.state.partySize} date={this.state.reservationDate} time={this.state.reservationTime} hideModal={this.hideModal.bind(this)} handleDisplayTimes={this.handleDisplayTimes.bind(this)}/>;
    } else {
      modal = <div></div>;
    }
    return (
      <div>
        <Wrapper>
          <Title>Make a reservation</Title>
          < PartySize handlePartySize={this.handlePartySize.bind(this)}/>
          < ReservationDate handleDate={this.handleDate.bind(this)} />
          < ReservationTime handleTime={this.handleTime.bind(this)} />
          {this.state.displayTimes ? < Availabilities handleReserve={this.handleReserve.bind(this)} availabilities={this.state.availabilities} /> : < Button onClick={this.handleSearch.bind(this)} >Find a table</Button>}
          <ChartIcon src="https://cdn.icon-icons.com/icons2/1875/PNG/512/linechart_120376.png"></ChartIcon>
          <BookedAmount>
              Booked {5 + Math.floor(Math.random() * 5)} times today
          </BookedAmount>
        </Wrapper>
        {modal}
        < Calendar />
      </div>
    );
  }
}

export default Bookings;