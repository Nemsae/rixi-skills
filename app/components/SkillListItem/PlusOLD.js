import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Plus = (props) => {
  const PlusPrimitive = styled.div.attrs({ className: 'plus-icon' })`
    position: absolute;
    bottom: -5px;
    right: -5px;

    height: 15px;
    width: 15px;

    font-size: 14px;
    line-height: 14px;

    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
    border-radius: 15px;

    background-color: #00A4BB;
    color: #fff;

    -webkit-transition: -webkit-transform 0.1s ease-out;
    -moz-transition: -moz-transform 0.1s ease-out;
    -o-transition: -o-transform 0.1s ease-out;
    transition: transform 0.1s ease-out;

    ${'' /* ${props.added && {
      WebkitTransform: 'scale(0, 0)',
      MozTransform: 'scale(0, 0)',
      MsTransform: 'scale(0, 0)',
      OTransform: 'scale(0, 0)',
      transform: 'scale(0, 0)',
    }} */}
  `;

  return <PlusPrimitive>{ props.children }</PlusPrimitive>;
};

Plus.propTypes = {
  added: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Plus;
