import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import axios from 'axios';

const Container = styled.div `
  width: 636px;
  text-align: center
`;

const RestaurantImage = styled.img `
  height: 4rem;
  width: 4rem;
  border-radius: 4px;
  display: inline-block
`;

const Icon = styled.img `
  height: 24px;
  margin: 8px .8rem;
  vertical-align: middle;
`;

const Header = styled.h2 `
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin: 0 0 16px;
  min-height: 24px;
  font-family: Helvetica;
`;

const Details = styled.span `
  font-family: Helvetica;
  display: inline-block;
  vertical-align: middle;
`;

const RestaurantName = styled.h2 `
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  font-family: Helvetica;
  margin: 0px;
  text-align: center;
`;

const ReservationDetails = styled.div `
  display: inline-block
`;

const Button = styled.button `
  font-family: sans-serif;
  background-color: #da3743;
  font-size: 1rem;
  color: #fff;
  width: 100%;
  border: none;
  border-radius: 2px;
  font-weight: 500;
  padding: .75rem 1rem;
  display: block;
  margin: auto;
`;

class ReservationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      firstName: '',
      lastName: '',
      contactInfo: '',
      occasion: '',
      email: ''
    };
  }

  handleCloseModal () {
    this.props.handleDisplayTimes();
    this.props.hideModal();
    const data = {
      date: `${this.props.date} ${this.props.time}`,
      partySize: this.props.partySize,
      name: `${this.state.firstName} ${this.state.lastName}`,
      contactInfo: this.state.contactInfo,
      occasion: this.state.occasion,
    };
    axios.post(`/api/bookings/${this.props.restaurantId}`, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleFirst(e) {
    this.setState ({
      firstName: e.target.value
    });
  }

  handleLast(e) {
    this.setState ({
      lastName: e.target.value
    });
  }

  handleContact(e) {
    this.setState ({
      contactInfo: e.target.value
    });
  }

  handleEmail(e) {
    this.setState ({
      email: e.target.value
    });
  }

  handleOccasion(e) {
    this.setState ({
      occasion: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Modal
            ariaHideApp={false}
            isOpen={this.state.showModal}
            style={{
              overlay: {
                backgroundColor: 'rgba(0,0,0,.8)'
              },
              content: {
                top: '25%',
                left: '25%',
                right: '25%',
                bottom: '25%',
              }
            }}
          >
            <Header>You're almost done!</Header>
            <div>
              <RestaurantImage src="https://media.radissonhotels.net/image/radisson-montevideo-victoria-plaza-hotel/restaurant/16256-114279-f63607438_3xl.jpg?impolicy=CustomCrop&cwidth=256&cheight=256"></RestaurantImage>
              <ReservationDetails>
                <RestaurantName>{this.props.restaurantName}</RestaurantName>
                <Icon src='https://cdn.iconscout.com/icon/premium/png-256-thumb/calendar-2513417-2104741.png'></Icon>
                <Details>{this.props.date}</Details>
                <Icon src='https://freeiconshop.com/wp-content/uploads/edd/clock-outline.png'></Icon>
                <Details>{this.props.time}</Details>
                <Icon src='https://freeiconshop.com/wp-content/uploads/edd/person-outline.png'></Icon>
                <Details>{`${this.props.partySize} people`}</Details>
              </ReservationDetails>
            </div>
            <div>Diner Details</div>
            <div>
              <input onChange={this.handleFirst.bind(this)} type="text" placeholder="First name"></input>
              <input onChange={this.handleLast.bind(this)} type="text" placeholder="Last name"></input>
            </div>
            <div>
              <input type="tel" autocomplete="tel" placeholder="Phone number" onChange={this.handleContact.bind(this)}></input>
              <input type="email" placeholder="Email" autocomplete="email" onChange={this.handleEmail.bind(this)}></input>
            </div>
            <div>
              <select onChange={this.handleOccasion.bind(this)}>
                <option value="default">Select an occasion (optional)</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="date">Date night</option>
                <option value="business_meal">Business Meal</option>
                <option value="special_occasion">Celebration</option>
              </select>
              <input placeholder="Special Request (Optional)"></input>
            </div>
            <div>
              <input type="checkbox"></input>
              <span>Sign me up to receive dining offers and news from this restaurant by email</span>
            </div>
            <div>
              <input type="checkbox"></input>
              <span>Yes, I want to collect 100 points for this reservation.</span>
            </div>
            <Button onClick={this.handleCloseModal.bind(this)}>Complete Reservation</Button>
            <div>By clicking “Complete reservation” you agree to the OpenTable Terms of Use and Privacy Policy. Standard text message rates may apply. You may opt out of receiving text messages at any time.</div>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default ReservationModal;