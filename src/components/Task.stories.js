import Task from './Task';
import {action} from '@storybook/addon-actions';

export default {
    component: Task,
    excludeStories: /.*Data$/,
    title: 'Task',
    argTypes: {
        onPinTask: {},
        onArchiveTask: {},
    },
};

export const actionsData = {
    onPinTask: action('pin-task'),
    onArchiveTask: action('archive-task'),
};

const Template = (args) => ({
    components: {Task},
    setup() {
        return {args, ...actionsData};
    },
    template: '<Task v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updateAt: new Date(2021, 8, 4, 14, 2),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
};
