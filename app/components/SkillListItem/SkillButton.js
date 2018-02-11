import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// const SkillButton = styled.div.attrs({ className: 'skill-counter' })`
const SkillButton = (props) => {
  const SkillButtonPrimitive = styled.div.attrs({ className: 'skill-button' })`
  display: inline-block;
  position: relative;
  margin-right: 4px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  -o-border-radius: 30px;
  border-radius: 30px;
  border: 2px solid #00A4BB;
  color: #00A4BB;
  font-weight: 500;
  text-align: center;
  line-height: 30px;
    ${'' /* display: inline-block;
    position: relative;

    color: #00A4BB;
    cursor: pointer;

    margin-right: 4px;
    width: 30px;
    height: 30px;

    font-weight: 500;
    text-align: center;
    line-height: 30px;

    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    border: 2px solid #00A4BB; */}

    ${props.added && {
      backgroundColor: '#6A6E71',
      borderColor: '#6A6E71',
      color: '#fff',
      cursor: 'default',

      plus_icon: {
        WebkitTransform: 'scale(0, 0)',
        MozTransform: 'scale(0, 0)',
        MsTransform: 'scale(0, 0)',
        OTransform: 'scale(0, 0)',
        transform: 'scale(0, 0)',
      },
    }}

    &:hover .plus-icon {
      -webkit-transform: scale3d(1.2, 1.2, 1);
      -moz-transform: scale3d(1.2, 1.2, 1);
      -ms-transform: scale3d(1.2, 1.2, 1);
      -o-transform: scale3d(1.2, 1.2, 1);
      transform: scale3d(1.2, 1.2, 1);
    }
  `;

  return (
    <SkillButtonPrimitive>
      {props.children}
    </SkillButtonPrimitive>
  );
};

SkillButton.propTypes = {
  added: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SkillButton;
