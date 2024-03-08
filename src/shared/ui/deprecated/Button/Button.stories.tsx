import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};
export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR_INVERTED,
};
export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINED,
};
export const OutlinedInverted = Template.bind({});
OutlinedInverted.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINED_INVERTED,
};
export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
};
export const BackgroundThemeInverted = Template.bind({});
BackgroundThemeInverted.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};
export const SquareSizeS = Template.bind({});
SquareSizeS.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.S,
};
export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
};
export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};
export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const OutlinedSizeS = Template.bind({});
OutlinedSizeS.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: ButtonSize.S,
};

export const OutlinedSizeM = Template.bind({});
OutlinedSizeM.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: ButtonSize.M,
};
export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: ButtonSize.L,
};
export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    disabled: true,
};
