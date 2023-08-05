import { useCallback, type FC } from 'react';
import styles from './profilePageHeader.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { Text } from '@shared/ui/Text/Text';
import { Button, ThemeButton } from '@shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileForm, getProfileReadonly, profileActions, updateProfileData } from '@entities/Profile';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const {
    className
  } = props;

  const { t } = useTranslation('profile');
  const { t: commont } = useTranslation();
  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);
  const formData = useSelector(getProfileForm);

  const onEdit = useCallback((): void => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback((): void => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    if (!formData) {
      return;
    }

    dispatch(updateProfileData());
  }, [dispatch, formData]);

  return (
    <div
      className={classNames(styles.profilePageHeader, {}, [className])}
    >
      <Text title={t('Профиль')}/>
      {readonly
        ? <Button
          theme={ThemeButton.OUTLINE}
          className={styles.editBtn}
          onClick={onEdit}
        >
          {t('Редактировать')}
        </Button>
        : <>
          <Button
            theme={ThemeButton.OUTLINE_DANGER}
            className={styles.editBtn}
            onClick={onCancelEdit}
          >
            {commont('Отменить')}
          </Button>
          <Button
            theme={ThemeButton.OUTLINE}
            className={styles.saveBtn}
            onClick={onSave}
          >
            {commont('Сохранить')}
          </Button>
        </>
      }

    </div>
  );
};
