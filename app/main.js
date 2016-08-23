import './assets/styles/bootstrap.min.css!';
import React, { Component } from 'react';
import Display from './display';
import ReactDOM from 'react-dom';
import { SearchBox } from './search';
import { user } from './api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        value: '',
        message: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(username) {
  console.log(`Target value: ${username}`);
  user(username).
    then((response) => {
      if (response.ok){
        response.json().then((jsonResponse) => {

          const data = { value: jsonResponse,
              message: 'Success'
            };

          this.setState({ data });
          console.log(jsonResponse);
        });
      }
      else {
        const data = { value: '',
          message: 'Error'
        };
        this.setState({ data }, () => console.log(this.state.data.message));
        console.log(`Error detected ${data}`);
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
