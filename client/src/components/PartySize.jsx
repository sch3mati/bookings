import React from 'react';
import Select, { components } from 'react-select';
import styled from 'styled-components';

const SingleValue = props => (
  <components.SingleValue {...props}>
    {props.data.chipLabel}
  </components.SingleValue>
);

const options = new Array;
for (let i = 1; i <= 10; i++) {
  options[i] = {
    label: i,
    chipLabel: `For ${i}`,
    value: i
  };
}

class PartySize extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePartySize(e) {
    this.props.handlePartySize(e.value);
  }

  render() {
    return (
      <div>
        <div>Party Size</div>
        <div>
          <Select defaultValue={{ label: 2, chipLabel: 'For 2', value: 2 }} onChange={this.handlePartySize.bind(this)} options={options} components={{ SingleValue }} />
        </div>
      </div>
    );
  }
}

export default PartySize;