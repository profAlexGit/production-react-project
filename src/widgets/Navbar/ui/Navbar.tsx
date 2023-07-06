import type { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation('navigation');

	return (
		<div className={classNames(styles.navbar, {}, [className])}>
			<div className={styles.links}>
				<AppLink
					to='/'
					className={styles.mainLink}
					theme={AppLinkTheme.SECONDARY}
				>
					{t('Главная')}
				</AppLink>
				<AppLink
					to='/about'
					className={styles.mainLink}
					theme={AppLinkTheme.SECONDARY}
				>
					{t('О нас')}
				</AppLink>
			</div>
		</div>
	);
};

