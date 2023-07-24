import { memo, useCallback } from 'react';
import styles from './loginForm.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@shared/ui/Button/Button';
import { Input } from '@shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/service/loginByUsername/loginByUsername';
import { TextTheme, Text } from '@shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const {
    className
  } = props;

  const { t } = useTranslation('loginForm');
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  // useEffect(() => {
  //  return () => {
  //    dispatch(loginActions.clearForm());
  //  };
  // }, [dispatch]);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div
      className={classNames(styles.loginForm, {}, [className])}
    >
      <Text title={t('Форма авторизации')}/>
      {error && (
        <Text
          theme={TextTheme.ERROR}
          text={error}
        />
      )}
      <Input
        placeholder={t('Введите username') as string}
        type='text'
        autofocus
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t('Введите пароль') as string}
        type='text'
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ThemeButton.OUTLINE}
        className={styles.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
