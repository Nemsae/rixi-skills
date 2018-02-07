import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FAIcon from 'react-fontawesome';
import { FormattedMessage } from 'react-intl';

import TracedButton from 'components/TracedButton';

import messages from './messages';
import Wrapper from './Wrapper';

function SkillTagForm(props) {
  // const ComponentToRender = props.component;
  // let content = (<div></div>);
  //
  // // If we have items, render them
  // if (props.items) {
  //   content = props.items.map((item) => (
  //     <ComponentToRender key={`item-${item.id}`} item={item} />
  //   ));
  // } else {
  //   // Otherwise render a single component
  //   content = (<ComponentToRender />);
  // }

  return (
    <Wrapper>
      <TracedButton onClick={(e) => console.log('SANITY')}>
        <FAIcon name="plus-circle" style={{ marginRight: '5px' }} />
        <FormattedMessage {...messages.endorseButton} />
      </TracedButton>
    </Wrapper>
  );
}

SkillTagForm.propTypes = {
  // score: PropTypes.number,
  // component: PropTypes.func.isRequired,
  // items: PropTypes.array,
};

export default SkillTagForm;
