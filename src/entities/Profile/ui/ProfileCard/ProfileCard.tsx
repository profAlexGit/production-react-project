import { type FC } from 'react';
import styles from './profileCard.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { type Profile } from '../../model/types/profile';
import { Text, TextALign, TextTheme } from '@shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from '@shared/ui/Input/Input';
import { Loader } from '@shared/ui/Loader/Loader';
import { Avatar } from '@shared/ui/Avatar/Avatar';
import { type Currency, CurrencySelect } from '@entities/Currency';
import { type Country, CountrySelect } from '@entities/Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile | null;
  isLoading: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly = true,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props;
  const { t } = useTranslation('profile');
  const { t: commont } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(styles.profileCard, {}, [styles.loadingCard, className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.profileCard, {}, [styles.error, className])}>
        <Text
          theme={TextTheme.ERROR}
          title={t(error)}
          text={commont('Попробуйте обновить страницу')}
          align={TextALign.CENTER}
        />
      </div>
    );
  }

  if (!data) {
    return <Text text='no Data'/>;
  }

  const mods = {
    [styles.editing]: !readonly
  };

  return (<div
    className={classNames(styles.profileCard, mods, [className])}
  >
    <div className={styles.data}>

      {data.avatar && (
        <div className={styles.avatarWrapper}>
          <Avatar
            src={data.avatar}
            size={100}
          />
        </div>
      )}

      <Input
        value={data.firstName}
        placeholder={t('Ваше имя')}
        className={styles.input}
        readonly={readonly}
        onChange={onChangeFirstname}
      />
      <Input
        value={data.lastName}
        placeholder={t('Ваша фамилия')}
        className={styles.input}
        readonly={readonly}
        onChange={onChangeLastname}
      />
      <Input
        value={data.age}
        placeholder={t('Ваш возраст')}
        className={styles.input}
        readonly={readonly}
        onChange={onChangeAge}
      />
      <Input
        value={data.city}
        placeholder={t('Город')}
        className={styles.input}
        readonly={readonly}
        onChange={onChangeCity}
      />
      <Input
        value={data.username}
        placeholder={t('username')}
        className={styles.input}
        readonly={readonly}
        onChange={onChangeUsername}
      />
      <Input
        value={data.avatar}
        placeholder={t('аватар')}
        className={styles.input}
        readonly={readonly}
        onChange={onChangeAvatar}
      />

      <CurrencySelect
        className={styles.input}
        value={data.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />

      <CountrySelect
        className={styles.input}
        onChange={onChangeCountry}
        value={data.country}
        readonly={readonly}
      />

    </div>
  </div>);
};
