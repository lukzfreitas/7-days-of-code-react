import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Item from '../../../src/components/DataDisplay/Item';

export default {
  title: 'Example/Item',
  component: Item,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => <Item {...args} />;

export const InputNewsletter = Template.bind({});

InputNewsletter.args = {
    text: 'Escolha suas plantas'
}

