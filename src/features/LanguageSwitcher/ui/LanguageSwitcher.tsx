import type { FC } from 'react';
import styles from './languageSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
	className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
	const {
		className
	} = props;

	const { t, i18n } = useTranslation();

	const toggle = (): void => {
		i18n.changeLanguage(
			i18n.language === 'ru'
				? 'en'
				: 'ru'
		);
	};

	return (
		<Button
			className={classNames(styles.languageSwitcher, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggle}
		>
			{t('язык')}
		</Button>
	);
};
