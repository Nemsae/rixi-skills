/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
*/

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import FAIcon from 'react-fontawesome';
import messages from './messages';

/*
* COMPONENTS
*/
import SkillTagForm from './SkillTagForm';

/*
* REUSABLE COMPONENTS
*/
import ColumnMain from 'components/ColumnMain';
import ColumnSection from 'components/ColumnSection';
import ColumnSide from 'components/ColumnSide';
import MainInner from 'components/MainInner';
// import H1 from 'components/H1';
import H2 from 'components/H2';
import TracedButton from 'components/TracedButton';
import UserScore from 'components/UserScore';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>Profile Page</title>
          <meta name="description" content="Rixi Profile Page" />
        </Helmet>
        <MainInner>
          <ColumnMain>
            <ColumnSection>
              <H2>
                <FormattedMessage {...messages.selfIntroductionHeader} />
              </H2>
            </ColumnSection>
            <ColumnSection>
              <H2>
                <FormattedMessage {...messages.skillTagsHeader} />
                {/* <SkillTagForm>
                  <TracedButton onClick={(e) => console.log('SANITY')}>
                    <FAIcon name="plus-circle" style={{ marginRight: '5px' }} />
                    <FormattedMessage {...messages.skillTags.formButton} />
                  </TracedButton>

                </SkillTagForm> */}
              </H2>
            </ColumnSection>
          </ColumnMain>
          <ColumnSide>
            <UserScore score={17} />
          </ColumnSide>
        </MainInner>
      </article>
    );
  }
}
