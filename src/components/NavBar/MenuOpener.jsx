import React from 'react';
import PropTypes from 'prop-types';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const MenuOpener = (props) => {
  const { open, toggleMenu } = props;
  const handleClick = () => {
    toggleMenu();
  };

  return (
    <div className={open ? 'opener translate-x-48' : 'opener'}>
      <button type="button" onClick={handleClick}>
        <div id="open" className={open ? 'scale-x-0' : ''}>
          <BiRightArrow />
        </div>
        <div id="close" className={open ? '' : 'scale-x-0'}>
          <BiLeftArrow />
        </div>
      </button>
    </div>
  );
};

MenuOpener.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MenuOpener;
