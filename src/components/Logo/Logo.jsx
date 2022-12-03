import React from 'react';
import { FaCarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({ extraClasses }) => (
  <div>
    <Link to="/">
      <div className={`logo-box font-['Secular_One'] ${extraClasses}`}>
        <FaCarAlt />
        <span>CarBooking</span>
      </div>
    </Link>
  </div>
);

Logo.propTypes = {
  extraClasses: PropTypes.string,
};

Logo.defaultProps = {
  extraClasses: '',
};

export default Logo;
