import React from 'react';

import { Button } from 'react-bootstrap';

class CustomButtonBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      currentSelection: 'Last 24 Hours',
      active: false
    };
  }

  toggleClass = event => {
    const currentState = this.state.active;
    event.preventDefault();
    this.setState({
      currentSelection: event.target.value,
      active: !currentState
    });

    switch (event.target.value) {
      case 'Last 10 Days':
        this.props.callback_1(this.props.callback_1_arg);
        break;

      default:
        this.props.callback_0(this.props.callback_0_arg);
        break;
    }
  };

  render() {
    return (
      <div>
        <Button
          style={{ width: '150px', marginRight: '7px' }}
          value='Last 24 Hours'
          variant='outline-dark'
          className={this.state.currentSelection === 'Last 24 Hours' ? 'active' : null}
          onClick={this.toggleClass}
        >
          Last 24 Hours
        </Button>
        <Button
          style={{ width: '150px', marginleft: '7px' }}
          value='Last 10 Days'
          variant='outline-dark'
          className={this.state.currentSelection === 'Last 10 Days' ? 'active' : null}
          onClick={this.toggleClass}
        >
          Last 10 Days
        </Button>
      </div>
    );
  }
}

export default CustomButtonBar;
