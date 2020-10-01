import React from 'react';
import styled from 'styled-components';

const november = new Array;
for (let i = 1; i <= 42; i++) {
  if (i <= 30) {
    november.push(`11-${i}`);
  } else {
    november.push(`12-${i - 30}`);
  }
}

const october = ['9-27', '9-28', '9-29', '9-30'];
for (let i = 1; i <= 38; i++) {
  if (i <= 31) {
    october.push(`10-${i}`);
  } else {
    october.push(`11-${i - 31}`);
  }
}

const september = ['8-30', '8-31'];
for (let i = 1; i <= 40; i++) {
  if (i <= 30) {
    september.push(`9-${i}`);
  } else {
    september.push(`10-${i - 30}`);
  }
}

const months = {
  9: { name: 'September', dates: september },
  10: { name: 'October', dates: october },
  11: { name: 'November', dates: november }
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
  font-size: .875rem;
  font-weight: 700;
  align-self: stretch;
  text-align: center;
  font-family: helvetica;
  line-height: 250%;
  box-sizing: border-box;
`;

const AvailableDate = styled.div `
  border: 1px #d8d9db solid;
  background-color: white;
  color: #2d333f;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    border: 1px solid #da3743;
  }
`;

const OldDate = styled.div `
  border: 1px #d8d9db solid;
  background-color: #f1f2f4;
  color: #d8d9db;
  vertical-align: middle;
  cursor: default;
`;

const NextMonthDate = styled.div `
  border: 1px #d8d9db solid;
  background-color: #f1f2f4;
  color: #2d333f;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    border: 1px solid #da3743;
  }
`;

const TodayDate = styled.div `
  border: 1px solid #da3743;
  background-color: white;
  color: #2d333f;
  vertical-align: middle;
  cursor: pointer;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: (new Date()).getMonth() + 1,
      date: (new Date()).getDate()
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     month: (new Date(this.props.selectedDate)).getMonth() + 1,
  //     date: (new Date(this.props.selectedDate)).getDate()
  //   });
  // }

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
    console.log(this.state, 'here');
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
          {months[this.state.month].dates.map((date) => {
            if (Number(date.split('-')[0]) === (new Date()).getMonth() + 1 && Number(date.split('-')[1]) === (new Date()).getDate()) {
              return <TodayDate key={date}>{date.split('-')[1]}</TodayDate>;
            } else if (Number(date.split('-')[0]) < (new Date()).getMonth() + 1 || (Number(date.split('-')[0]) === (new Date()).getMonth() + 1 && Number(date.split('-')[1]) < (new Date()).getDate())) {
              return <OldDate key={date}>{date.split('-')[1]}</OldDate>;
            } else if (Number(date.split('-')[0]) > (new Date()).getMonth() + 1) {
              return <NextMonthDate key={date} onClick={this.handleDate.bind(this)}>{date.split('-')[1]}</NextMonthDate>;
            } else {
              return <AvailableDate key={date} onClick={this.handleDate.bind(this)}>{date.split('-')[1]}</AvailableDate>;
            }
          })
          }
        </DateContainer>
      </Container>

    );
  }
}

export default Calendar;