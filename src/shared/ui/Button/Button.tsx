import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINED = 'outlined',
    OUTLINED_INVERTED = 'outlinedInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme, square, size = ButtonSize.M, disabled, ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };
    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
