import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import AboutScore from './AboutScore';
import Score from './Score';
import ScoreCircle from './ScoreCircle';
import Wrapper from './Wrapper';

const H5 = styled.h5`
  font-size: 13px;
  font-weight: normal;
  letter-spacing: -1px;

  padding-top: 40px;
  margin-bottom: 0px;
`;

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
