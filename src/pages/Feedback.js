import React, { Component } from 'react';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    return (
      <div data-testid="feedback-text">
        <Header />
        Feedback
      </div>
    );
  }
}

export default Feedback;