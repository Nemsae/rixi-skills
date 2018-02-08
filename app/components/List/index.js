import React from 'react';
import PropTypes from 'prop-types';

import Ul from 'components/Ul';

//  NOTE: <List /> will render either a single component
//        (error or loading display) or will have an array of items to render

function List(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);

  if (props.items) {
    //  Render list of items
    content = props.items.map((item) => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
  } else {
    //  Render error or loading component
    content = (<ComponentToRender />);
  }

  return (
    <Ul>
      {content}
    </Ul>
  );
}

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default List;
