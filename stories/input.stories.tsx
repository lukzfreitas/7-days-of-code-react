import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../src/components/Input';

export default {
  title: 'Example/Input',
  component: Input,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputNewsletter = Template.bind({});
InputNewsletter.args = {
    placeholder: 'Insira seu e-mail',
    height: '75px',
    width: '390px',
    fontSize: '16pt'
}

