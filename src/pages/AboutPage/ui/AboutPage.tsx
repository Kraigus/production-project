import { useTranslation } from 'react-i18next';
import { FC } from 'react';

interface AboutPageProps {
    className? :string
}

const AboutPage: FC<AboutPageProps> = (props) => {
    const { t } = useTranslation('about');
    return (
        <div>{t('О сайте')}</div>
    );
};

export default AboutPage;
