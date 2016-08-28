import './main.css!';
import React, { Component } from 'react';

const defaultValue = 'Private/ Not Set',
      styles = {
        container: {
          textAlign: 'center',
          fontSize: '1.1em',
        },
      };

export default class Display extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let displayContent = (<p>Search for a GitHub User</p>);

    if (this.props.data.message === 'Success') {
    displayContent = (
      <table>
        <thead>
          <tr>
            <th> Entity </th>
            <th> Value </th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <th> Name </th>
          <th> {this.props.data.value.name || defaultValue} </th>
        </tr>
        <tr>
          <th> Username </th>
          <th> {this.props.data.value.login || defaultValue} </th>
        </tr>
        <tr>
          <th> Email </th>
          <th> {this.props.data.value.email || defaultValue} </th>
        </tr>
        <tr>
          <th> Location </th>
          <th> {this.props.data.value.location || defaultValue} </th>
        </tr><tr>
          <th> Followers </th>
          <th> {this.props.data.value.followers || '0'} </th>
        </tr>
        </tbody>
      </table>
    )
    }
    if (this.props.data.message === 'Error') {
      console.log(`This is the message: ${this.props.data.message}`);
      displayContent = (<p>No results found</p>);
    }

    return (
      <div style = {styles.container} >
        { displayContent }
       </div>
    );
  }
}

// displayContent = (<ul>
//  <li>Name: {this.props.data.value.name || defaultValue}</li>
//  <li>Username: {this.props.data.value.login || defaultValue}</li>
//  <li>Email: {this.props.data.value.email || defaultValue}</li>
// </ul>);
