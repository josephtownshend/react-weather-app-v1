import React from 'react';

export default class Weather extends React.Component {

  render() {
    return (
      <div>
        <p>Location: { this.props.city }, { this.props.country }</p>
        <p>Temperature: { this.props.temperature }</p>
        <p>Humidity: { this.props.humidity }</p>
        <p>Conditions: { this.props.description }</p>
        <p>{ this.props.error }</p>
      </div>
    );
  }
};
