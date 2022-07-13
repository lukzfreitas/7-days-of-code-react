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
    border: '1px solid #2b2828',
    borderRadius: 4,
    iconUrl: 'https://raw.githubusercontent.com/lukzfreitas/7-days-of-code-react/b02f304aa60fd638de51bcb3b6a870184969ce01/public/post.svg',    
    iconWidth: 40
}

