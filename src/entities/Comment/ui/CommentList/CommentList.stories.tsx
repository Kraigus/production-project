import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        { id: '1', text: '12313', user: { id: '1', username: 'Tony' } },
        { id: '2', text: '12313', user: { id: '2', username: 'Vasya' } },
    ],
};
Normal.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    comments: [
        { id: '1', text: '12313', user: { id: '1', username: 'Tony' } },
        { id: '2', text: '12313', user: { id: '2', username: 'Vasya' } },
    ],
    isLoading: true,
};
Loading.decorators = [StoreDecorator({})];
