import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Newsletter from '../src/patterns/Newsletter';

export default {
  title: 'Example/Newsletter',
  component: Newsletter,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Newsletter>;

const Template: ComponentStory<typeof Newsletter> = (args) => <Newsletter {...args} />;

export const NewsletterComplete = Template.bind({});
NewsletterComplete.args = {
    
}

