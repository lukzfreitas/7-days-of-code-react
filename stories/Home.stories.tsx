import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Home } from '../pages/Home/home';

export default {
  title: 'Example/Home',
  component: Home,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const HomeTemplate = Template.bind({});
HomeTemplate.args = {}

