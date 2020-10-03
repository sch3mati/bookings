import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const ConfirmationContainer = styled.div `
background-color: #55b68d;
padding: 1rem;
padding-left: 5.5rem;
font-family: Helvetica;
height: 41px;
margin: 0px;
font-weight: bold;
font-size: 18px;
color: #ffffff;
`;

const ConfirmationNumber = styled.div `
  font-size: 14px;
  color: #ffffff;
  line-height: 1.3em;
  font-weight: 700;
  padding-top: 4px;
`;

const CheckMark = styled.img `
height: 48px;
display: inline-block;
position: absolute;
transform: translateX(-70px)
`;

const DetailsContainer = styled.div `
  background-color: #fffff;
  font-family: Helvetica;
  display: grid;
  padding: 12px;
  grid-template-columns: 120px 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid #d8d9db;
`;

const RestaurantImage = styled.img `
  grid-row: 1 / span 4;
  width: 104px;
`;

const RestaurantName = styled.div `
font-size: 20px;
font-weight: bold;
line-height: 1em;
color: #2d333f;
`;

const Icon = styled.img `
  height: 24px;
  margin-right: .8rem;
  vertical-align: middle;
`;

const Details = styled.span `
  font-family: Helvetica;
  vertical-align: middle;
  font-size: 16px;
`;

const Modify = styled.span `
  font-size: 1rem;
  color: #60b2d0;
  cursor: pointer;
  align-self: end;
  padding: 0 1rem;
  &:hover {
    color: #da3743;
  }
`;

const ModifyDiv = styled.div `
  margin-left: -1rem;
  transform: translateY(6px)
`;

const Button = styled.div `
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 500;
  width: 222px;
  line-height: 24px;
  padding: 12px 0;
  border: 1px solid #d8d9db;
  border-radius: 4px;
  text-align: center;
  color: #2d333f;
  cursor: pointer;
  display: inline-block;
  margin-left: 16px;
  margin: 16px auto auto 16px;
`;

const Exit = styled.img `
  position: absolute;
  right: 6px;
  top: 6px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

class SummaryModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleExit() {
    this.props.hideModal();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Modal
          ariaHideApp={false}
          isOpen={true}
          style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,.8)'
            },
            content: {
              margin: '150px auto',
              borderRadius: '5px',
              width: '744px',
              height: '292px',
              padding: '0px'
            }
          }}
        >
          <ConfirmationContainer>
            <CheckMark src = 'https://www.clker.com/cliparts/G/d/S/g/r/N/white-checkmark-in-circle-md.png'></CheckMark>
            <div>
              Thanks, Your reservation is confirmed.
              <ConfirmationNumber>Confirmation #28425</ConfirmationNumber>
            </div>
          </ConfirmationContainer>
          <DetailsContainer>
            <RestaurantImage src="https://media.radissonhotels.net/image/radisson-montevideo-victoria-plaza-hotel/restaurant/16256-114279-f63607438_3xl.jpg?impolicy=CustomCrop&cwidth=256&cheight=256"></RestaurantImage>
            <RestaurantName>{this.props.restaurantName}</RestaurantName>
            <div>
              <Icon src='https://images.echocommunity.org/85032db6-de87-47fc-abaf-d1fa3a5f498f/calendar-icon-marketing-image.png?w=200'></Icon>
              <Details>{`${(new Date(this.props.date)).toLocaleString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}, ${this.props.time}`}</Details>
            </div>
            <div>
              <Icon src='https://freeiconshop.com/wp-content/uploads/edd/person-outline.png'></Icon>
              <Details>{this.props.partySize === 1 ? '1 person' : `${this.props.partySize} people`}</Details>
            </div>
            <ModifyDiv>
              <Modify>Modify</Modify>|<Modify>Cancel</Modify>
            </ModifyDiv>
          </DetailsContainer>
          <div>
            <Button>
              <Icon src='https://images.echocommunity.org/85032db6-de87-47fc-abaf-d1fa3a5f498f/calendar-icon-marketing-image.png?w=200'></Icon>
              Invite Guests
            </Button>
            <Button>
              <Icon src='https://images.echocommunity.org/85032db6-de87-47fc-abaf-d1fa3a5f498f/calendar-icon-marketing-image.png?w=200'></Icon>
              Add to Calendar
            </Button>
          </div>
          <Exit src='https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/letter-x-icon-18-256.png' onClick={this.handleExit.bind(this)}></Exit>
        </Modal>
      </div>
    );
  }
}

export default SummaryModal;