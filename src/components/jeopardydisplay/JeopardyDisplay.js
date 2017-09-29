import React, { Component } from 'react';
import _ from 'lodash';


export class JeopardyDisplay extends Component {

  componentDidMount() {
    this.props.renderQuestion();
  }

  render() {
    let question = this.props.question.question ? this.props.question.question : ""
    return (
        <div>
        {question.question}
        </div>
    );
  }
}

export default JeopardyDisplay;