import React, { Component } from 'react';

export default class Display extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let displayContent = (<p>Search for a GitHub User</p>);

    if (!(Object.keys(this.props.data).length === 0 && this.props.data.constructor === Object)) {
     displayContent = (<ul>
      <li>Name: {this.props.data.name}</li>
      <li>Username: {this.props.data.login}</li>
      <li>Email: {this.props.data.email}</li>
    </ul>);
  }

    return (
       displayContent
    );
  }
}
