import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Welcome from '../src/patterns/Welcome';

export default {
  title: 'Example/Welcome',
  component: Welcome,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Welcome>;

const Template: ComponentStory<typeof Welcome> = (args) => <Welcome {...args} />;

export const TitleTemplate = Template.bind({});

TitleTemplate.args = {
    title: 'Melhores plantas'
}




