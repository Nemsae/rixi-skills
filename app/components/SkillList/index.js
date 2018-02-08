import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
// import LoadingIndicator from 'components/LoadingIndicator';
// import RepoListItem from 'containers/RepoListItem';
import Ul from 'components/Ul';

function SkillList({ loading, error, skills }) {
  // if (loading) {
  //   return <List component={LoadingIndicator} />;
  // }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (skills !== false) {
    // return <List items={skills} component={RepoListItem} />;
  }

  // return null;
  return <div>SANITY</div>;
}

SkillList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  skills: PropTypes.any,
};

export default SkillList;
