import { useTranslation } from 'react-i18next';
import type { FC } from 'react';

export const MainPage: FC = () => {
	const { t } = useTranslation('main');

	return (
		<div>
			{t('Главная страница')}
		</div>
	);
};
