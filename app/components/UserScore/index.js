import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import AboutScore from './AboutScore';
import H5 from './H5';
import Score from './Score';
import ScoreCircle from './ScoreCircle';
import Wrapper from './Wrapper';

function UserScore(props) {
  return (
    <Wrapper>
      <ScoreCircle>
        <H5><FormattedMessage {...messages.header} /></H5>
        <Score>{props.score}</Score>
      </ScoreCircle>
      <AboutScore>
        <FormattedMessage {...messages.tooltipMessage} />
      </AboutScore>
    </Wrapper>
  );
}

UserScore.propTypes = {
  score: PropTypes.number,
  // component: PropTypes.func.isRequired,
  // items: PropTypes.array,
};

export default UserScore;
