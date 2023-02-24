import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props : LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loginForm = useSelector(getLoginState);
    const {
        username, password, error, isLoading,
    } = loginForm;

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                placeholder={t('Введите username')}
                type="text"
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('Введите пароль')}
                type="text"
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button disabled={isLoading} onClick={onLoginClick} theme={ThemeButton.OUTLINED} className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
});
