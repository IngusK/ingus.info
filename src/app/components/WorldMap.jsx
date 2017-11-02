import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import json from '../world-110m.json';
import ReactTooltip from 'react-tooltip';

export default class WorldMap extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      window: {
        width: window.innerWidth,
      },
      travelPageContent: [],
      worlddata: [],
      cities: [],
      countries: {},
    }

    this.handleCountryClick = this.handleCountryClick.bind(this)
    this.setResizer = this.setResizer.bind(this)
    this.getCountry = this.getCountry.bind(this)
  }

  getValue(val, nr) {
    return this.state.travelPageContent[nr] && this.state.travelPageContent[nr][val];
  }

  projection() {
    return geoMercator()
      .scale(100)
      .translate([ 800 / 2, 450 / 2 ])
  }
  handleCountryClick(countryIndex) {
    console.log("Clicked on country: ", this.state.worlddata[countryIndex])
  }

  componentDidMount() {
    const worlddata = feature(json, json.objects.countries).features;
    this.setState({
      worlddata,
    })

    window.addEventListener('resize', this.setResizer);

    const travelPage = database().ref('travel/');
    travelPage.on('value', (data) => {
      const value = data.val();
      this.setState({ cities: value });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setResizer);
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  setResizer() {
    this.setState({
      window: {
        width: window.innerWidth,
      }
    })
  }

  getCountry(id) {
    const filteredData = this.state.cities.filter(city => {
      return city.country_id.toString() === id;
    });
    return {
      value: filteredData.length,
      country: filteredData[0] && filteredData[0].country,
    }
  }

  render() {
    return (
      <div>
        <ReactTooltip />
        <svg width={ this.state.window.width - 200 } viewBox="0 0 800 450">
          <g className="countries">
            {
              this.state.worlddata.map((country,i) => {
                const filteredData = this.getCountry(country.id);
                const colorType = filteredData.value === 1 ? 'rgba(0,0,0,.4)' : (filteredData.value > 1 ? 'rgba(0,0,0,.6)' : 'rgba(0,0,0,.15)');
                return (
                  <path
                    data-tip={filteredData.country}
                    key={ `path-${ i }` }
                    d={ geoPath().projection(this.projection())(country) }
                    className="country"
                    fill={colorType}
                    stroke="#FFFFFF"
                    strokeWidth={ 0.5 }
                    onClick={ () => this.handleCountryClick(i) }
                  />
                );
              })
            }
          </g>
          <g className="markers">
            {
                this.state.cities.length > 0 && this.state.cities.map((city, i) => (
                <a href={city.url || 'https://www.triptemptation.com'} key={i} target="_blank">

                <circle
                  data-tip={city.name}
                  key={`marker-${i}`}
                  cx={ this.projection()(city.coordinates)[0] }
                  cy={ this.projection()(city.coordinates)[1] }
                  r={ city.population * 2 }
                  fill="#ff4084"
                  stroke="#FFFFFF"
                  strokeWidth={ 0.4 }
                  className="marker"
                />
              </a>
              ))
            }
          </g>
        </svg>
      </div>
    )
  }
}
