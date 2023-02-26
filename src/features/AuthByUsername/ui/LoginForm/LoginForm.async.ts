import { lazy, FC } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve, reject) => {
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
