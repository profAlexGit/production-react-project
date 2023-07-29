import { type FC } from 'react';
import styles from './profileCard.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileError, getProfileIsLoading } from '@entities/Profile';
import { Loader } from '@shared/ui/Loader/Loader';
import { Text, TextTheme } from '@shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@shared/ui/Button/Button';
import { Input } from '@shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className
  } = props;
  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  if (isLoading) {
    return <Loader/>;
  }

  return (<div
    className={classNames(styles.profileCard, {}, [className])}
  >
    <div className={styles.header}>
      <Text title={t('Профиль')} />
      <Button
        theme={ThemeButton.OUTLINE}
        className={styles.editBtn}
      >
        {t('Редактировать')}
      </Button>
    </div>

    <div className={styles.data}>
      <Input
        value={data?.firstName}
        placeholder={t('Ваше имя')}
        className={styles.input}
      />
      <Input
        value={data?.lastName}
        placeholder={t('Ваша фамилия')}
        className={styles.input}
      />
    </div>
    {error && <Text theme={TextTheme.ERROR} text={t(error)}/>}
  </div>);
};
