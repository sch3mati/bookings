import React from 'react';
import styled from 'styled-components';

const october = [27, 28, 29, 30];
for (let i = 1; i <= 38; i++) {
  october.push(i % 31 ? i % 31 : 31);
}

const september = [30, 31];
for (let i = 1; i <= 40; i++) {
  september.push(i % 30 ? i % 30 : 30);
}

const months = {
  9: { name: 'September', dates: september },
  10: { name: 'October', dates: october }
};

const Container = styled.div `
  margin: 0px;
  1px solid #d8d9db;
  padding: 16px;
  width: 288px;
  height: 305px;
  background-color: #f1f2f4;
  margin: 16px;
  transform: translate(0px,-110px);
`;

const MonthContainer = styled.div `
  display: grid;
  height: 20%;
  grid-template-columns: 20% 60% 20%;
  gap: 0px 0px;
`;

const Month = styled.div `
  font-family: helvetica;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  grid-column: 2;
  align-self: center;
`;

const Arrow = styled.button `
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px gray solid;
  font-size: 20px;
  align-self: center;
  justify-self: center;
  cursor: pointer;
  &:focus {
    outline: none !important;
    }
  &:hover {
    border: 2px solid #da3743;
  }
`;

const DayContainer = styled.div `
  display: grid;
  height: 10%;
  grid-template-columns: repeat(7, 1fr);
`;

const Day = styled.div `
  font-family: helvetica;
  font-size: .875rem;
  font-weight: 700;
  color: #2d333f;
  text-align: center;
  align-self: center;
  text-decoration: underline dotted;
`;

const DateContainer = styled.div `
  display: grid;
  height: 70%;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const Date = styled.div `
  box-sizing: border-box;
  border: 1px #d8d9db solid;
  background-color: white;
  font-family: helvetica;
  font-size: .875rem;
  font-weight: 700;
  color: #2d333f;
  text-align: center;
  align-self: stretch;
  line-height: 250%;
  vertical-align: middle;
  &:hover {
    border: 1px solid #da3743;
  }
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 10
    };
  }

  handleDate(e) {
    this.props.pickDate(`${months[this.state.month].name} ${e.target.innerText}, 2020`);
  }

  nextMonth(e) {
    this.setState({
      month: this.state.month + 1
    });
  }

  previousMonth(e) {
    this.setState({
      month: this.state.month - 1
    });
  }

  render() {
    return (
      <Container>
        <MonthContainer>
          <Arrow onClick={this.previousMonth.bind(this)}>&lsaquo;</Arrow>
          <Month>{months[this.state.month].name} 2020</Month>
          <Arrow onClick={this.nextMonth.bind(this)}>&rsaquo;</Arrow>
        </MonthContainer>
        <DayContainer>
          <Day>Sun</Day>
          <Day>Mon</Day>
          <Day>Tue</Day>
          <Day>Wed</Day>
          <Day>Thu</Day>
          <Day>Fri</Day>
          <Day>Sat</Day>
        </DayContainer>
        <DateContainer>
          {months[this.state.month].dates.map((date) => (
            <Date onClick={this.handleDate.bind(this)}>{date}</Date>
          ))}
        </DateContainer>
      </Container>

    );
  }
}

export default Calendar;