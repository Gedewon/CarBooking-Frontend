import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({ extraClasses }) => (
  <div>
    <Link to="/">
      <img src="/default.png" alt="car book app logo" className={`w-36 h-36 sm:w-72 sm:h-72 ${extraClasses}`} />
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
