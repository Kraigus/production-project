import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Text Text Text Text Text Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsum',
    text: 'Text Text Text Text Text Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsum',
    text: 'Text Text Text Text Text Text',
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title lorem ipsum',
    text: 'Text Text Text Text Text Text',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem ipsum',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title lorem ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text Text Text Text Text Text',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text Text Text Text Text Text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
