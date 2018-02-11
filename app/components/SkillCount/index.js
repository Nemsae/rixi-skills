import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Count from './Count';
import Plus from './Plus';

function SkillCount(props) {
  return (
    <Wrapper>
      <Count className="added" />
      <Plus className="added" />
      {/* <SkillTitle /> */}
    </Wrapper>
  );
}

SkillCount.propTypes = {
};

export default SkillCount;
