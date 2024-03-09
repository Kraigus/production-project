import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from './Button';

export default {
    title: 'shared/redesigned/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};
export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    variant: 'clear',
};
export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    variant: 'outline',
};
export const OutlinedInverted = Template.bind({});
OutlinedInverted.args = {
    children: 'Text',
    variant: 'outline',
};
export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    variant: 'clear',
};
export const BackgroundThemeInverted = Template.bind({});
BackgroundThemeInverted.args = {
    children: 'Text',
    variant: 'outline',
};
export const SquareSizeS = Template.bind({});
SquareSizeS.args = {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'm',
};
export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    variant: 'outline',
    square: true,
};
export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'l',
};
export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'xl',
};

export const OutlinedSizeS = Template.bind({});
OutlinedSizeS.args = {
    children: 'Text',
    variant: 'outline',
    size: 'm',
};

export const OutlinedSizeM = Template.bind({});
OutlinedSizeM.args = {
    children: 'Text',
    variant: 'outline',
    size: 'm',
};
export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'l',
};
export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'xl',
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Text',
    variant: 'outline',
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    variant: 'outline',
    size: 'xl',
    disabled: true,
};
