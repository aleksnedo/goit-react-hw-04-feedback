import React from 'react';
import { Component } from 'react';
// import Counter from 'components/Counter/Counter';
import Section from '../Section';
import Feedback from '../Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const nameKeys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <>
        {/* <Counter /> */}
        <Section title="Please leave feedback">
          <Feedback options={nameKeys} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
      </>
    );
  }
}
