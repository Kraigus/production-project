import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface AboutPageProps {
    className?: string
}

const AboutPage: FC<AboutPageProps> = (props) => {
    const { t } = useTranslation('about');
    const { className } = props;
    return (
        <div className={classNames('', {}, [className])}>{t('О сайте')}</div>
    );
};

export default AboutPage;
