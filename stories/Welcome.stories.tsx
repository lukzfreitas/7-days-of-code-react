import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Welcome from '../src/patterns/Welcome';

export default {
  title: 'Example/Welcome',
  component: Welcome,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Welcome>;

const Template: ComponentStory<typeof Welcome> = (args) => <Welcome {...args} />;

export const TitleTemplate = Template.bind({});

TitleTemplate.args = {
    prefixTitle: 'Sua casa com as',
    title: 'Melhores plantas',
    text: 'Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.'
}




