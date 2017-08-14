import React from 'react';
import propTypes from 'prop-types';
import style from './styles.scss';

const Travel = (props, { instagram }) => {
  console.log('FUCK', instagram);
  if (instagram.length < 1) return null;
  return (
    <div className="wrapper">
      {instagram[2].id}
    </div>
  );
}

Travel.contextTypes = {
  instagram: propTypes.array.isRequired,
};

export default Travel;
