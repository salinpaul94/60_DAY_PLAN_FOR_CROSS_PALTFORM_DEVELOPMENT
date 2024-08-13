import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: props.initialSeconds || 0  };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1
    }));
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>
  }
}

export default Timer;