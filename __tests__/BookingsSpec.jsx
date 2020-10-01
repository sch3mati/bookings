import React from 'react';
import {mount, shallow, render} from 'enzyme';
import Bookings from '../client/src/components/Bookings.jsx';
import Calendar from '../client/src/components/Calendar.jsx';
import ReservationModal from '../client/src/components/ReservationModal.jsx';
import Availabilities from '../client/src/components/Availabilities.jsx';

describe('Bookings', () => {
  const wrapper = mount(<Bookings />);
  it('renders correct tags', () => {
    expect(wrapper.find('button')).toExist();
    expect(wrapper.find('select')).toExist();
    expect(wrapper.find('span')).toExist();
    expect(wrapper.find('img')).toExist();
  });
  it('has states', () => {
    expect(wrapper).toHaveState('partySize');
    expect(wrapper).toHaveState('reservationDate');
    expect(wrapper).toHaveState('reservationTime');
  });
});

describe('Calendar', () => {
  const wrapper = mount(<Calendar />);
  it('has states', () => {
    expect(wrapper).toHaveState('month');
  });
  it('renders correct tags', () => {
    expect(wrapper.find('button')).toExist();
    expect(wrapper.find('div')).toExist();
  });
});

describe('Reservation Modal', () => {
  const wrapper = mount(<ReservationModal />);
  it('has correct state', () => {
    expect(wrapper).toHaveState('showModal');
    expect(wrapper).toHaveState('firstName');
    expect(wrapper).toHaveState('lastName');
    expect(wrapper).toHaveState('contactInfo');
    expect(wrapper).toHaveState('occasion');
  });
});

describe('Availabilities', () => {
  const wrapper = mount(<Availabilities availabilities={new Array}/>);
  it('Does not render', () => {
    expect(wrapper.exists()).toBe(true);
  });
});