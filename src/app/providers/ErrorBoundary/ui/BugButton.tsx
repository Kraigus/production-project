import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';

// для тестирования
export const BugButton = () => {
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);
    const { t } = useTranslation();
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button onClick={onThrow} className={classNames('', {}, [])}>
            {t('throw error')}
        </Button>
    );
};
