import type { FC } from 'react';
import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const {
    className
  } = props;

  const { t } = useTranslation('navigation');

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = (): void => {
    setCollapsed(prev => !prev);
  };

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
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
          className={styles.item}
        >
          <MainIcon className={styles.icon}/>
          <span className={styles.link}>
            {t('Главная')}
          </span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
          className={styles.item}
        >
          <AboutIcon className={styles.icon}/>
          <span className={styles.link}>
            {t('О нас')}
          </span>
        </AppLink>
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
};
