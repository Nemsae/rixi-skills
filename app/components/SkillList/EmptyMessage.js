import React from 'react';
import { FormattedMessage } from 'react-intl';

import P from 'components/P';

import messages from './messages';

function EmptyMessage() {
  return (
    <P><FormattedMessage {...messages.emptyMessage} /></P>
  );
}

export default EmptyMessage;
