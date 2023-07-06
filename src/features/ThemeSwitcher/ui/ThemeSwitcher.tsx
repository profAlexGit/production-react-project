import type { FC } from 'react';
import styles from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			className={classNames(styles.themeSwitcher, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggleTheme}
		>
			{theme === Theme.LIGHT
				? <LightIcon/>
				: <DarkIcon/>
			}
		</Button>
	);
};
