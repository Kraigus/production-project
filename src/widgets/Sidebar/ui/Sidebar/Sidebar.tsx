import { useSelector } from 'react-redux';
import { useState, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button/Button';
import { VStack } from '@/shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const sidebarItemsList = useSelector(getSidebarItems);

    const itemsList = useMemo(
        () => sidebarItemsList.map((item) => <SidebarItem item={item} collapsed={collapsed} key={item.path} />),
        [collapsed, sidebarItemsList],
    );

    return (
        <aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                className={cls.collapseBtn}
                square
                size={ButtonSize.L}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ThemeButton.BACKGROUND_INVERTED}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack role="navigation" gap="8" className={cls.items}>{itemsList}</VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
    );
});
