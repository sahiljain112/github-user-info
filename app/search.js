import { Button, ButtonToolbar } from 'react-bootstrap';
import React, { Component } from 'react';

const styles = {
  container: {
    padding: '10px',
    borderRadius: '2px',
    textAlign: 'center',
  },
  input: {
    padding: '12px',
    marginRight: '5px',
  },
  button: {
    marginLeft: '5px',
  }
};

export class SearchBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    }
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }
  onKeyPressed(e) {
    if (e.key === 'Enter') {
      console.log(`Inside key pressed. Key value = ${e.key}`);
      this.props.handleChange(e.target.value);
    }
  }
  updateValue(e) {
    this.setState({ username: e.target.value }, () => {
      console.log(`Updated value ${this.state.username}`);
    });
  }
  render() {
     return (
       <div style = {styles.container}>
         <input style = {styles.input} type="text" placeholder="Search for GitHub User" value={this.state.username} onChange={(e) => this.updateValue(e)} onKeyPress={(e) => this.onKeyPressed(e)}/>
         <Button style = {styles.button} bsStyle="primary" bsSize="lg" onClick={() => this.props.handleChange(this.state.username)}>Search</Button>
       </div>
  );
  }
}
