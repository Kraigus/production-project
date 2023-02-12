import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>
                {t('unexpectableError')}
            </p>
            <Button onClick={reloadPage}>
                {t('reloadPage')}
            </Button>
        </div>
    );
};
