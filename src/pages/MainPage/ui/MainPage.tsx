import { useTranslation } from 'react-i18next';
import { FC } from 'react';
interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
