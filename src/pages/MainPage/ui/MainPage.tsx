import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { t } = useTranslation('main');
    const { className } = props;
    return (
        <div className={classNames('', {}, [className])}>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
