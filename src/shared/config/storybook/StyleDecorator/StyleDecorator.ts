// eslint-disable-next-line fds-import-checker/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/api';

export const StyleDecorator = (story: () => Story) => story();
