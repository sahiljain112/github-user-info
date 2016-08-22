import React, { Component } from 'react';

export class SearchBox extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
     return (
      <input type="text" value={this.props.value} onChange={(e) => this.props.handleChange(e)}/>
    );
  }
}
