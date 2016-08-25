import './assets/styles/bootstrap.min.css!';
import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
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
        progress: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(username) {
  this.setState({ progress: true });
  console.log(`Target value: ${username}`);
  user(username).
    then((response) => {
      if (response.ok){
        response.json().then((jsonResponse) => {

          const data = { value: jsonResponse,
              message: 'Success'
            };

          this.setState({
            data,
            progress: false
          });
          console.log(jsonResponse);
        });
      }
      else {
        const data = { value: '',
          message: 'Error'
        };

        this.setState({
          progress: false,
          data },
            () => {
            console.log(this.state.data.message);
          }
        );
        console.log(`Error detected ${data}`);
      }
    }).
    catch((error) => {
      console.log(error);
    });
  }
  render() {
    const display = this.state.progress
                    ? <p style = {{ textAlign: 'center' }}> Loading...</p>
                    : (<Display data = {this.state.data} />);

    return (
      <div>
        <SearchBox handleChange={this.handleChange} />
        <br/>
        { display }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
