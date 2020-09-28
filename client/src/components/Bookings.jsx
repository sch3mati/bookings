import React from 'react';
import PartySize from './PartySize.jsx';
import DateTime from './DateTime.jsx';
import styled from 'styled-components';

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
      date: (new Date()).toLocaleDateString(),
      time: (new Date()).getHours()+1
    };
  }

  handlePartySize(e) {
    this.setState({
      partySize: e.target.value
    });
  }

  handleDate(e) {
    this.setState({
      date: e.target.value
    })
  }

  handleTime(e) {
    this.setState({
      time: e.target.value
    })
  }


  render() {
    return (
      <Wrapper>
        <Title>Make a reservation</Title>
        < PartySize handlePartySize={this.handlePartySize.bind(this)}/>
        < DateTime handleDate={this.handleDate.bind(this)} handleTime={this.handleTime.bind(this)}/>
        <Button>Find a table</Button>
        <ChartIcon src="https://cdn.icon-icons.com/icons2/1875/PNG/512/linechart_120376.png"></ChartIcon>
        <BookedAmount>
            Booked {5 + Math.floor(Math.random() * 5)} times today
        </BookedAmount>
      </Wrapper>
    );
  }
}

export default Bookings;