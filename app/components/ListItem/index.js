import React from 'react';
import PropTypes from 'prop-types';

import Li from 'components/Li';

function ListItem({ item }) {
  return (
    <Li>{ item }</Li>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
