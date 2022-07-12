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
    height: 75,
    width: 390,
    fontSize: '16pt',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    border: 0,
    outlineColorFocus: 'transparent',
    iconUrl: 'https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/logo.png?raw=true'
}

