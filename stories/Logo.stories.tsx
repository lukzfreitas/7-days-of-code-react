import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Logo from '../src/patterns/Logo';


export default {
  title: 'Example/Logo',
  component: Logo,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const LogoExample = Template.bind({});
LogoExample.args = {
  imageUrl: 'https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/logo.png?raw=true',
  alt: 'Casa Verde',
  height: 44.84,
  width: 177
};



