import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    readonly?: boolean;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        readonly,
        data,
        error,
        isLoading,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    readonly={readonly}
                    onChange={onChangeLastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
                <Input
                    value={data?.age}
                    readonly={readonly}
                    onChange={onChangeAge}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                />
                <Input
                    value={data?.city}
                    readonly={readonly}
                    onChange={onChangeCity}
                    placeholder={t('Город')}
                    className={cls.input}
                />
                <Input
                    value={data?.username}
                    readonly={readonly}
                    onChange={onChangeUsername}
                    placeholder={t('Введите имя пользователя')}
                    className={cls.input}
                />
                <Input
                    value={data?.avatar}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
