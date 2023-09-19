import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'storybook-addon-code-display-ts';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Code Display 1',
    render: ({ active }) => {
      const story = api.getCurrentStory();
      const code = story?.parameters?.code || '';

      return (
        <AddonPanel  active={active}>
          {active ? <pre>{code}</pre> : null}
        </AddonPanel>
      );
    },
  });
});
