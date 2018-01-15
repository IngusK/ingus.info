import React from 'react';
import propTypes from 'prop-types';
import WorldMap from '../../components/WorldMap.jsx';
import {database} from "firebase";
import {NavLink, withRouter} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import TravelItem from '../../components/travel_destination/index.jsx';

import style from './styles.scss';


export default class Travel extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    travelPageContent: [],
  }

  componentDidMount() {
    var travelPage = database().ref('travel/');
    travelPage.on('value', (data) => {
      this.setState({ travelPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.travelPageContent[nr] && this.state.travelPageContent[nr][val];
  }

  render() {
    const { travelPageContent } = this.state;
    return (
      <div className="travel-content">
        <ReactTooltip />
        <div className="title">
          <h2>{this.getValue('mainBlock', 0)}</h2>
          <p dangerouslySetInnerHTML={{__html:this.getValue('mainBlock', 1)}} />
        </div>
        <div className="map-wrapper">
          <WorldMap />
        </div>
        <h3>{this.getValue('mainBlock', 2)}</h3>
        <h4 dangerouslySetInnerHTML={{__html:this.getValue('mainBlock', 3)}} />
        <div className="photo-grid">
          {travelPageContent.slice(0,12).map((item, index) => (
            <TravelItem key={index}
              img={item.img}
              name={item.name}
            />
          ))}
        </div>
      </div>
    );
  }
};

// const Travel = (props, { instagram }) => {
//   if (instagram && instagram.length < 1) return null;
//   console.log('Instagram API data', instagram);
//
//   return (
//     <div className="travel-content">
//       <ReactTooltip />
//       <div className="title">
//         <h2>I've been to..</h2>
//         <p>This is a map of the countires I've visited so far.<br/>It total <strong>42</strong> countries and more than <strong>100</strong> different cities around the world.</p>
//       </div>
//       <div className="map-wrapper">
//         <WorldMap />
//       </div>
//
//       {instagram &&
//         <div>
//           <h3>Some of my recent travel adventures..</h3>
//           <h4>Feel free to follow me on <a href="https://www.instagram.com/ingus/" target="_blank">Instagram</a></h4>
//           <div className="photo-grid">
//             {instagram.map((obj, key) => (
//               <a href={obj.link} key={key} target="_blank">
//                 <img src={obj.images.low_resolution.url} alt={obj.caption.text.substring(0, 50)} />
//               </a>
//             ))}
//           </div>
//         </div>
//       }
//     </div>
//   );
// }
//
// Travel.contextTypes = {
//   instagram: propTypes.array,
// };
//
// export default Travel;
