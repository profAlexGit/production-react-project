import { FC, useState } from 'react'
import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar:FC<SidebarProps> = (props) => {
    const {
        className
    } = props;

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
            </div>
            
        </div>
    )
}