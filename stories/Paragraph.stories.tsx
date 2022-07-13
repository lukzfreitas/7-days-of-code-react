import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paragraph from '../src/components/Typography/Paragraph';

export default {
    title: 'Example/Paragraph',
    component: Paragraph,
    parameters: {        
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const TitleTemplate = Template.bind({});

TitleTemplate.args = {
    text: 'Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.'
}




