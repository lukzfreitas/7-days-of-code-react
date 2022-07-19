import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from '../../../src/components/Navigation/Link';

export default {
  title: 'Example/Link',
  component: Link,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const LinkNotVisited = Template.bind({});
LinkNotVisited.args = {
  label: 'Como Fazer',
  visited: false,
  onClick: () => {console.log('teste')}
};

export const LinkVisited = Template.bind({});
LinkVisited.args = {
  label: 'Como Fazer',
  visited: true,  
};

