import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from '../src/components/Surfaces/Card';

export default {
  title: 'Example/Card',
  component: Card,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const TitleTemplate = Template.bind({});

TitleTemplate.args = {
    title: 'Ajuga reptans',
    subtitle: 'R$ 20,00',
    textButton: 'Comprar',
    imgUrl: "https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
}




