import React, { Component } from "react";
import Spinner from './Spinner'

export class WeatherItem extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      temp: 0,
      description: "",
      pressure: 0,
      wind_speed: 0,
      cloud: 0,
      humidity: 0,
      loader: true,
    }
  }

  async componentDidMount() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.name}&appid=a543ddce70e8d60185426a9ef1e9e72c`;
    console.log("hello");
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({
      city: pdata.name,
      temp: ((pdata.main.temp) - 273.15).toPrecision(2),
      description: pdata.weather[0].description,
      pressure: pdata.main.pressure,
      wind_speed: pdata.wind.speed,
      cloud: pdata.clouds.all,
      humidity: pdata.main.humidity,
      loader: false,
    })

  }

  async componentDidUpdate(prev) {
    if (prev.name !== this.props.name) {
      this.setState({ loader: true });
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.name}&appid=a543ddce70e8d60185426a9ef1e9e72c`;
      console.log("hello");
      let data = await fetch(url);
      let pdata = await data.json();

      this.setState({
        city: pdata.name,
        temp: ((pdata.main.temp) - 273.15).toPrecision(2),
        description: pdata.weather[0].description,
        pressure: pdata.main.pressure,
        wind_speed: pdata.wind.speed,
        wind_degree: pdata.wind.deg,
        humidity: pdata.main.humidity,
        cloud: pdata.clouds.all,
        loader: false,
      })
    }
  }


  render() {


    return (
      <>
        {this.state.loader ? <Spinner /> : null}
        <div className="container ct my-4">
          <div className="card text-dark c1 mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header"><h4 className="cbody">City/Town</h4></div>
            <div className="card-body">

              <p className="card-text"><h5 className="cbody">{this.state.city}</h5></p>
            </div>
          </div>
           
          <div className="card text-dark  c1 mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header"><h4 className="cbody">Temperature</h4></div>
            <div className="card-body">

              <p className="card-text"><h5 className="cbody">{this.state.temp} &#8451;</h5></p>
            </div>
          </div>

          <div className="card text-dark c1 mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header"><h4 className="cbody">Description</h4></div>
            <div className="card-body">

              <p className="card-text"><h5 className="cbody" style={{textTransform:"capitalize"}}>{this.state.description}</h5></p>
            </div>
          </div>

          <div className="card text-dark c1 mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header"><h4 className="cbody">Humidity</h4></div>
            <div className="card-body">

              <p className="card-text"><h5 className="cbody">{this.state.humidity} %</h5></p>
            </div>
          </div>

          <div className="card text-dark c1 mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header"><h4 className="cbody">Wind Speed</h4></div>
            <div className="card-body">

              <p className="card-text"><h5 className="cbody">{this.state.wind_speed} Metre/Second</h5></p>
            </div>
          </div>

          <div className="card text-dark c1 mb-3 cd6" style={{maxWidth: "18rem"}}>
            <div className="card-header"><h4 className="cbody">Pressure</h4></div>
            <div className="card-body">

              <p className="card-text"><h5 className="cbody">{this.state.pressure} hPa</h5></p>
            </div>
          </div>
          
        </div>


      
      </>
    );
  }
}

export default WeatherItem;
