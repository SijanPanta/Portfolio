import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TailwindLogo } from './ReduxLogo';

export default {
	title: 'Logos/Redux Logo',
	component: TailwindLogo,
} as ComponentMeta<typeof TailwindLogo>;

const Template: ComponentStory<typeof TailwindLogo> = (args) => <TailwindLogo {...args} />;

export const Primary = Template.bind({});
