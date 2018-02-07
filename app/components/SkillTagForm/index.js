import React from 'react';
import PropTypes from 'prop-types';
import FAIcon from 'react-fontawesome';
import { FormattedMessage } from 'react-intl';

import TracedButton from 'components/TracedButton';
import UIButtonBlue from 'components/UIButtonBlue';

import messages from './messages';
import FormWrapper from './FormWrapper';
import Wrapper from './Wrapper';

function SkillTagForm(props) {
  if (props.showForm) {
    return (
      <FormWrapper>
        <UIButtonBlue onClick={props.trigger}>
          <FormattedMessage {...messages.formButton} />
        </UIButtonBlue>
      </FormWrapper>
    );
  }

  return (
    <Wrapper>
      <TracedButton onClick={props.trigger}>
        <FAIcon name="plus-circle" style={{ marginRight: '5px' }} />
        <FormattedMessage {...messages.endorseButton} />
      </TracedButton>
    </Wrapper>
  );
}

SkillTagForm.propTypes = {
  showForm: PropTypes.bool,
  trigger: PropTypes.func,
};

export default SkillTagForm;
