import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyPlant from '../src/patterns/MyPlant';

export default {
  title: 'Example/MyPlant',
  component: MyPlant,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MyPlant>;

const Template: ComponentStory<typeof MyPlant> = (args) => <MyPlant {...args} />;

export const MyPlantTemplate = Template.bind({});

MyPlantTemplate.args = {
    prefixTitle: 'Como conseguir',
    title: 'minha planta'
}




