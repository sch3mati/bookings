import React from 'react';
import {mount, shallow, render} from 'enzyme';
import Bookings from '../client/src/components/Bookings.jsx';

describe('< Bookings />', () => {
  const wrapper = mount(<Bookings />);
  it('renders a button', () => {
    expect(wrapper.find('button')).toExist();
  });
  it('has partySize and dateTime state', () => {
    expect(wrapper).toHaveState('partySize');
    expect(wrapper).toHaveState('reservationDate');
    expect(wrapper).toHaveState('reservationTime');
  });
});
