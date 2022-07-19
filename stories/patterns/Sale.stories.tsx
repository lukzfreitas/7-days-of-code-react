import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sale from '../../src/patterns/Sale';

export default {
  title: 'Example/Sale',
  component: Sale,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Sale>;

const Template: ComponentStory<typeof Sale> = (args) => <Sale {...args} />;

export const TitleTemplate = Template.bind({});

TitleTemplate.args = {
    prefixTitle: 'Conheça nossa',
    title: 'Ofertas'
}




