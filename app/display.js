import React, { Component } from 'react';

const defaultValue = 'Not Set';

export default class Display extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let displayContent = (<p>Search for a GitHub User</p>);

    if (this.props.data.message === 'Success') {
     displayContent = (<ul>
      <li>Name: {this.props.data.value.name || defaultValue}</li>
      <li>Username: {this.props.data.value.login || defaultValue}</li>
      <li>Email: {this.props.data.value.email || defaultValue}</li>
    </ul>);
    }
    if (this.props.data.message === 'Error') {
      console.log(`This is the message: ${this.props.data.message}`);
      displayContent = (<p>No results found</p>);
    }

    return (
      <div className = "container">
        { displayContent }
       </div>
    );
  }
}
