import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className, src, size, alt,
    } = props;

    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            height: size || 100,
            width: size || 100,
        }),
        [size],
    );

    return <img src={src} alt={alt} style={styles} className={classNames(cls.Avatar, mods, [className])} />;
});
