import React from 'react';
import propTypes from 'prop-types';
import WorldMap from '../../components/WorldMap.jsx';
import style from './styles.scss';
import ReactTooltip from 'react-tooltip';

const Travel = (props, { instagram }) => {
  // if (instagram.length < 1) return null;
  // console.log('Instagram API data', instagram);

  return (
    <div className="travel-content">
      <ReactTooltip />
      <div className="title">
        <h2>I've been to..</h2>
        <p>This is a map of the countires I've visited so far.<br/>It total <strong>42</strong> countries and more than <strong>100</strong> different cities around the world.</p>
      </div>
      <div className="map-wrapper">
        <WorldMap />
      </div>
      {/* <h3>Some of my recent travel adventures..</h3>
      <h4>Feel free to follow me on <a href="https://www.instagram.com/ingus/" target="_blank">Instagram</a></h4>
      <div className="photo-grid">
        {instagram.map((obj, key) => (
          <a href={obj.link} key={key} target="_blank">
            <img src={obj.images.low_resolution.url} alt={obj.caption.text.substring(0, 50)} />
          </a>
        ))}
      </div> */}
    </div>
  );
}

// Travel.contextTypes = {
//   instagram: propTypes.array.isRequired,
// };

export default Travel;
