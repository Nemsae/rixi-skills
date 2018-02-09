import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import List from 'components/List';
import ListItem from 'components/ListItem';
// import LoadingIndicator from 'components/LoadingIndicator';
import SkillListItem from 'components/SkillListItem';

import EmptyMessage from './EmptyMessage';
import ErrorMessage from './ErrorMessage';

function SkillList({ loading, error, skills }) {
  // if (loading) {
  //   return <List component={LoadingIndicator} />;
  // }

  if (error !== false) {
    return <List component={ErrorMessage} />;
  }

  if (skills !== false) {
    //  if skills are fetched, render <List /> with SkillListItem pure component
    return <List items={skills} component={SkillListItem} />;
  }

  return <List component={EmptyMessage} />;
}

SkillList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  skills: PropTypes.any,
};

export default SkillList;
