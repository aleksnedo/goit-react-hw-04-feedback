import React from 'react';
import { Container, Value } from './Counter.styled';
import ControlsFn from './Controls';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 10,
  };

  state = {
    value: this.props.initialValue,
  };

  onClickIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  onClickDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <Container>
        <Value>{this.state.value}</Value>

        <ControlsFn
          increment={this.onClickIncrement}
          decrement={this.onClickDecrement}
        />
      </Container>
    );
  }
}

export default Counter;
