import { memo } from 'react';
import styles from './sidebarItem.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@shared/ui/AppLink/AppLink';
import { type SidebarItemType } from '../../../model/items';
import { useTranslation } from 'react-i18next';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const {
    item,
    collapsed
  } = props;
  const { t } = useTranslation('navigation');

  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(styles.item, { [styles.collapsed]: collapsed }, [])}
    >
      <item.Icon className={styles.icon}/>
      <span className={styles.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});
