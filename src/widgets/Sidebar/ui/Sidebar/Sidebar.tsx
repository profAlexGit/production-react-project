import { useState, useMemo, memo } from 'react';
import styles from './Sidebar.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@features/ThemeSwitcher';
import { LanguageSwitcher } from '@features/LanguageSwitcher';
import { Button, SizeButton, ThemeButton } from '@shared/ui/Button/Button';
import { SidebarItemsList } from '@widgets/Sidebar/model/items';
import { SidebarItem } from '@widgets/Sidebar/ui/Sidebar/SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const {
    className
  } = props;

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = (): void => {
    setCollapsed(prev => !prev);
  };

  const itemsList = useMemo(() => {
    return SidebarItemsList.map((item) => (
      <SidebarItem
        key={item.path}
        item={item}
        collapsed={collapsed}
      />
    ));
  }, [collapsed]);

  return (
    <div
      data-testid='sidebar'
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid='sidebar-toggle'
        theme={ThemeButton.BACKGROUND_INVERTED}
        onClick={onToggle}
        className={styles.collapsedBtn}
        square
        size={SizeButton.L}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={styles.items}>
        {itemsList}
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher/>
        <LanguageSwitcher
          className={styles.langSwitcher}
          short={collapsed}
        />
      </div>
    </div>
  );
});
