import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'flowbite-react';

const Loading = ({ message }) => (
  <div className="w-full grid col-span-full place-items-center p-8">
    <Spinner size="xl" />
    <span>{message}</span>
  </div>
);

Loading.propTypes = {
  message: PropTypes.string,
};

Loading.defaultProps = {
  message: 'Loading...',
};

export default Loading;
