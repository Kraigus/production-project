import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Counter } from 'entities/Counter';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { t } = useTranslation('main');
    const { className } = props;
    return (
        <div className={classNames('', {}, [className])}>
            {t('Главная страница')}
            <Counter />
        </div>
    );
};

export default MainPage;
