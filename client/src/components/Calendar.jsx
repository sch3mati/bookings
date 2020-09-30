import React from 'react';
import styled from 'styled-components';

const October = new Array;
for (let i = 27; i < 27 + 42; i++) {
  October.push(i % 30);
}

const Container = styled.div `
  margin: 0px;
  width: 290px;
  height: 305px;
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
`;

const Date = styled.div `
  border: 2px white solid;
  font-family: helvetica;
  font-size: .875rem;
  font-weight: 700;
  color: #2d333f;
  text-align: center;
  align-self: stretch;
  &:hover {
    border: 2px solid #da3743;
  }
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDate (e) {
    console.log(e.target.innerText);
  }

  render() {
    return (
      <Container>
        <MonthContainer>
          <Arrow>&lsaquo;</Arrow>
          <Month>September 2020</Month>
          <Arrow>&rsaquo;</Arrow>
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
          {October.map((date) => (
            <Date onClick={this.handleDate.bind(this)}>{date}</Date>
          ))}
        </DateContainer>
      </Container>

    );
  }
}

export default Calendar;