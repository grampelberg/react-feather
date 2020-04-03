import React from 'react';
import PropTypes from 'prop-types';

const Navigation = (props) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
};

Navigation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Navigation.defaultProps = {
  color: 'currentColor',
  size: '16',
};

export default Navigation;
