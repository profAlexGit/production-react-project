import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import styles from './navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@shared/ui/Button/Button';
import { LoginModal } from '@features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '@entities/User';
export const Navbar = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const onLogout = () => {
        dispatch(userActions.logout());
    };
    if (authData) {
        return (_jsx("div", { className: classNames(styles.navbar, {}, [className]), children: _jsx(Button, { theme: ThemeButton.CLEAR_INVERTED, className: styles.links, onClick: onLogout, children: t('Выйти') }) }));
    }
    return (_jsxs("div", { className: classNames(styles.navbar, {}, [className]), children: [_jsx(Button, { theme: ThemeButton.CLEAR_INVERTED, className: styles.links, onClick: onShowModal, children: t('Войти') }), _jsx(LoginModal, { isOpen: isAuthModal, onClose: onCloseModal })] }));
};
