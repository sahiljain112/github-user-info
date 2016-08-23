import React, { Component } from 'react';
import Display from './display';
import ReactDOM from 'react-dom';
import { SearchBox } from './search';
import { user } from './api';


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      data: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(username) {
  console.log(`Target value: ${username}`);
  user(username).
    then((response) => {
      if (response.ok){
        response.json().then((jsonResponse) => {
          this.setState({ data: jsonResponse });
          console.log(jsonResponse);
        });
      }
      else {
        console.log('Error detected');
      }
    }).
    catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div>
        <SearchBox handleChange={this.handleChange} />
        <br/>
        <Display data = {this.state.data} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
