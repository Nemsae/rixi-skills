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
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FAIcon from 'react-fontawesome';

/*
 * REUSABLE COMPONENTS
 */
import ColumnMain from 'components/ColumnMain';
import ColumnSection from 'components/ColumnSection';
import ColumnSide from 'components/ColumnSide';
import MainInner from 'components/MainInner';
import H1 from 'components/H1';
import H2 from 'components/H2';
import IconPlusSign from 'components/IconPlusSign';
import TextButton from 'components/TextButton';
import UserScore from 'components/UserScore';

/*
* COMPONENTS
*/
import SkillTagForm from './SkillTagForm';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
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
              <SkillTagForm>
                <TextButton onClick={e => console.log('SANITY')}>
                  <FAIcon
                    name='plus-circle'
                    cssModule={IconPlusSign}
                    // size='2x'
                  />
                  Endorse new skill
                </TextButton>
              </SkillTagForm>
              {/* <span>
              </span> */}
            </H2>
          </ColumnSection>
        </ColumnMain>
        <ColumnSide>
          <UserScore score={17}/>
        </ColumnSide>
      </MainInner>
    );
  }
}
