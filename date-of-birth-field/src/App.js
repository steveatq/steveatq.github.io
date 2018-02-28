import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classnames from 'classnames';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dayValue: '',
      monthValue: '',
      yearValue: '',
      isFocused: false
    };
  }

  handleDayInput = (event) => {
    const { value } = event.target;
    if (value.length <= 2) {
      this.setState({ dayValue: value });

      if (value.length === 2) {
        console.log('Time to focus the month input!');
        this.monthInput.focus();
        this.monthInput.select();
      }
    }
  }

  handleMonthInput = (event) => {
    const { value } = event.target;
    if (value.length <= 2) {
      this.setState({ monthValue: value });

      if (value.length === 2) {
        this.yearInput.focus();
        this.yearInput.select();
      }
    }
  }

  handleYearInput = (event) => {
    const { value } = event.target;
    if (value.length <= 4) {
      this.setState({ yearValue: value });
    }
  }

  handleClick = (event) => {
    event.target.select();
  }

  handleFocus = (event) => {
    const { value } = event.target;
    console.log('focus in');
    event.target.select();
    this.setState({ isFocused: true });
  }

  handleBlur = (event) => {
    this.setState({ isFocused: false });
    console.log('blur');
  }

  handleKeyUp = (event) => {

  }

  render() {
    return (
      <div className="App">
        <div
          className={classnames('container', { 'focused': this.state.isFocused })}
          onFocus={(event) => this.handleFocus(event)}
          onBlur={(event) => this.handleBlur(event)}
        >
          <input
            type="number"
            placeholder="DD"
            value={this.state.dayValue}
            onChange={(event) => this.handleDayInput(event)}
            onClick={(event) => this.handleClick(event)}
            onKeyUp={(event) => this.handleKeyUp(event)}
            ref={(element) => { this.dayInput = element; }}
            aria-label="Date of Birth Day"
          />

          <span className="separator" aria-hidden="true">/</span>

          <input
            id="month"
            type="number"
            placeholder="MM"
            value={this.state.monthValue}
            onChange={(event) => this.handleMonthInput(event)}
            onClick={(event) => this.handleClick(event)}
            pattern="\d*"
            aria-label="Date of Birth Month"
            ref={(element) => { this.monthInput = element; }}
          />

          <span className="separator" aria-hidden="true">/</span>

          <input
            type="number"
            placeholder="YYYY"
            value={this.state.yearValue}
            onChange={(event) => this.handleYearInput(event)}
            onClick={(event) => this.handleClick(event)}
            pattern="\d*"
            aria-label="Date of Birth Year"
            ref={(element) => { this.yearInput = element; }}
            className="year"
          />
        </div>
        <div className="inline-error">Invalid date</div>
      </div>
    );
  }
}

export default App;
