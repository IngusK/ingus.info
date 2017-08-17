import React from 'react';
import propTypes from 'prop-types';
import WorldMap from '../../components/WorldMap';
import style from './styles.scss';

const Travel = (props, { instagram }) => {
  if (instagram.length < 1) return null;
  console.log('Instagram API data', instagram);

  return (
    <div className="travel-content">
      <WorldMap />
      <div className="photo-grid">
        {instagram.map((obj, key) => (
          <a href={obj.link} key={key} target="_blank">
            <img src={obj.images.low_resolution.url} alt={obj.caption.text.substring(0, 50)} />
          </a>
        ))}
      </div>
    </div>
  );
}

Travel.contextTypes = {
  instagram: propTypes.array.isRequired,
};

export default Travel;
