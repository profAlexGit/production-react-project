import {FC, useState} from 'react'
import styles from './Sidebar.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {ThemeSwitcher} from 'features/ThemeSwitcher';
import {LanguageSwitcher} from "features/LanguageSwitcher";

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
	const {
		className
	} = props;
	
	const [collapsed, setCollapsed] = useState(false);
	
	const onToggle = () => {
		setCollapsed(prev => !prev);
	}
	
	return (
		<div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
			<div className={styles.switchers}>
				<ThemeSwitcher/>
				<LanguageSwitcher className={styles.langSwitcher}/>
			</div>
		
		</div>
	)
}