import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SearchBox } from './search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log("Target value", e.target.value);
    this.setState({ username: e.target.value });
  }
  render() {
    return (<SearchBox value={this.state.username} handleChange={this.handleChange} />);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
