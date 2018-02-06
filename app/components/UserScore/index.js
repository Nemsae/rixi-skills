import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AboutScore from './AboutScore';
import Score from './Score';
import ScoreCircle from './ScoreCircle';
import Wrapper from './Wrapper';

const H5 = styled.h5`
  padding-top: 40px;
  font-size: 13px;
  letter-spacing: -1px;
`

function UserScore(props) {
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
      <ScoreCircle>
        <H5>Wanted Score</H5>
        <Score>{props.score}</Score>
      </ScoreCircle>
      <AboutScore>What's a 'Wanted Score'?</AboutScore>
    </Wrapper>
  );
}

UserScore.propTypes = {
  score: PropTypes.number,
  // component: PropTypes.func.isRequired,
  // items: PropTypes.array,
};

export default UserScore;
