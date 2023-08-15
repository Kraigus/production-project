import { ArticleSortField } from 'entities/Article/model/types/article';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { SorterOrder } from 'shared/types';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SorterOrder;
    onChangeOrder: (newOrder: SorterOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangeOrder, onChangeSort,
    } = props;

    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOptions<SorterOrder>[]>(
        () => [
            { value: 'asc', content: t('возрастанию') },
            { value: 'desc', content: t('убыванию') },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(
        () => [
            { value: ArticleSortField.CREATED, content: t('дате создания') },
            { value: ArticleSortField.TITLE, content: t('названию') },
            { value: ArticleSortField.VIEWS, content: t('просмотрам') },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select value={sort} options={sortFieldOptions} label={t('Сортировать по')} onChange={onChangeSort} />
            <Select
                className={cls.order}
                value={order}
                options={orderOptions}
                onChange={onChangeOrder}
                label={t('по')}
            />
        </div>
    );
});
