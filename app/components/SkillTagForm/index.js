import React from 'react';
import PropTypes from 'prop-types';
import FAIcon from 'react-fontawesome';
import { FormattedMessage } from 'react-intl';

import CancelButton from 'components/CancelButton';
import TracedButton from 'components/TracedButton';
import UIButtonBlue from 'components/UIButtonBlue';
import UIHint from 'components/UIHint';

import messages from './messages';
import FormWrapper from './FormWrapper';
import Input from './Input';
import TypeaheadPlaceholder from './TypeaheadPlaceholder';
import Wrapper from './Wrapper';

function SkillTagForm(props) {
  if (props.showForm) {
    return (
      <FormWrapper>
        <TypeaheadPlaceholder>
          <Input
            autoComplete="off"
            placeholder="Input skill..."
            type="text"
            spellcheck="false"
            dir="auto"
            value={props.value}
            onChange={props.handleChange}
          />
        </TypeaheadPlaceholder>
        <UIButtonBlue onClick={props.handleSubmit}>
          <FormattedMessage {...messages.formButton} />
        </UIButtonBlue>
        <CancelButton onClick={props.trigger}>
          <FormattedMessage {...messages.formCancel} />
        </CancelButton>
        <UIHint>
          <FormattedMessage
            id="welcome"
            defaultMessage={`*This will be shown on {name}'s profile page.`} // eslint-disable-line quotes
            values={{ name: <b>{props.name}</b> }}
          />
        </UIHint>
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
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default SkillTagForm;
