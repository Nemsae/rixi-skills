import React from 'react';
import { FormattedMessage } from 'react-intl';

import P from 'components/P';

import messages from './messages';

function errorMessage() {
  return (
    <P><FormattedMessage {...messages.errorMessage} /></P>
  );
}

export default errorMessage;
