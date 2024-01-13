import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { t } = useTranslation('main');
    const { className } = props;
    return (
        <Page className={classNames('', {}, [className])}>
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
