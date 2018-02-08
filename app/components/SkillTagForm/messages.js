/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  skillTags: {
    formButton: {
      id: 'app.components.SkillTagForm.endorseButton',
      defaultMessage: 'Endorse new skill',
    },
  },
  endorseButton: {
    id: 'app.components.SkillTagForm.endorse.button',
    defaultMessage: 'What I\'m good at',
  },
  formButton: {
    id: 'app.components.SkillTagForm.form.button',
    defaultMessage: 'Submit',
  },
  formCancel: {
    id: 'app.components.SkillTagForm.form.cancel',
    defaultMessage: 'Cancel',
  },
  formHint: {
    id: 'app.components.SkillTagForm.form.hint',
    defaultMessage: 'This will be shown on XXX\'s profile page.',
  },
});
