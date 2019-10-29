import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default class App extends React.Component {

  getWeather = async (event) => {
    event.preventDefault();
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);
    const DATA = await API_CALL.json();
    console.log(DATA);
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};
