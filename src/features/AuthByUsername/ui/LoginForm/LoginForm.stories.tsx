import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];

export const NormalWithError = Template.bind({});
NormalWithError.args = {};
NormalWithError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: '123' },
})];
export const DarkWithError = Template.bind({});
DarkWithError.args = {};
DarkWithError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: '123' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
export const LoadingDark = Template.bind({});
LoadingDark.args = {};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { isLoading: true },
})];
