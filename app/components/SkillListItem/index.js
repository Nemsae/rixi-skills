import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';

function SkillListItem({ item }) {
  
  return <ListItem />;
}

SkillListItem.propTypes = {
  item: PropTypes.object,
};

export default SkillListItem;
