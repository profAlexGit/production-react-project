import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = ({className}) => {

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink 
                    to='/' 
                    className={styles.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                >
                    Главная
                </AppLink>
                <AppLink 
                    to='/about' 
                    className={styles.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    )
}

