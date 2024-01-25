import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { increment, decrement, add } = useCounterActions();
    const handleInc = () => {
        increment();
    };
    const handleDec = () => {
        decrement();
    };
    const handleAddFive = () => {
        add(5);
    };
    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button data-testid="increment-btn" onClick={handleInc}>{t('Increment')}</Button>
            <Button data-testid="decrement-btn" onClick={handleDec}>{t('Decrement')}</Button>
            <Button data-testid="add-btn" onClick={handleAddFive}>{t('add five')}</Button>
        </div>
    );
};
