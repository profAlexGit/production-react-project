import { type FC } from 'react';
import styles from './loginForm.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/Button/Button';
import { Input } from '@shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const {
    className
  } = props;

  const { t } = useTranslation();

  return (
    <div
      className={classNames(styles.loginForm, {}, [className])}
    >
      <Input
        placeholder={t('Введите username') as string}
        type='text'
        autofocus
      />
      <Input
        placeholder={t('Введите пароль') as string}
        type='text'
      />
      <Button className={styles.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
};
