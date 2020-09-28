import React from 'react';
import Select, { components } from 'react-select';

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
    this.state = {
      partySize: ''
    };
  }

  render() {
    return (
      <div>
        <div>Party Size</div>
        <div>
          <Select options={options} components={{ SingleValue }} />
        </div>
      </div>
    );
  }
}

export default PartySize;