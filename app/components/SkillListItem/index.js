import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';

import SkillButton from './SkillButton';
import SkillTitle from './SkillTitle';
import Count from './Count';
import Plus from './Plus';
import Wrapper from './Wrapper';
import EndorsersLine from './EndorsersLine';

function SkillListItem({ item }) {
  //  NOTE: check if user is loggedIn, and if so check current userId and see if it matches profile userId
  const added = false;

  const content = (
    <span>
      <Wrapper>
        <SkillButton added={added}>
          <Count>{ item.count }</Count>
          <Plus>+</Plus>
        </SkillButton>
        <SkillTitle>{ item.name }</SkillTitle>
      </Wrapper>
      <EndorsersLine></EndorsersLine>
    </span>
  );

  return <ListItem item={content} />;
}

SkillListItem.propTypes = {
  item: PropTypes.object,
};

export default SkillListItem;
