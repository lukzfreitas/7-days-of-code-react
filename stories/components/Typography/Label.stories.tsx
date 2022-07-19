import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from '../../../src/components/Typography/Label';

export default {
  title: 'Example/Label',
  component: Label,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const TitleTemplate = Template.bind({});

TitleTemplate.args = {    
    text: 'Sua casa com as'
}