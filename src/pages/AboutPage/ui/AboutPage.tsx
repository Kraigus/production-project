import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface AboutPageProps {
    className?: string
}

const AboutPage: FC<AboutPageProps> = (props) => {
    const { t } = useTranslation('about');
    const { className } = props;
    return (
        <Page className={classNames('', {}, [className])}>{t('О сайте')}</Page>
    );
};

export default AboutPage;
