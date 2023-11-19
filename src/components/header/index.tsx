import React from 'react'
import MenuIcon from '../../icons/Menu';
import SearchIcon from '../../icons/Search';
import styles from './styles.module.scss'

interface HeaderProps {
    title?: string;
    description?: string;
    showMenu?: boolean;
    showSearch?: boolean;
}

const Header = ({
    title = 'Prometheus',
    description = 'You can add, edit and delete locations',
    showMenu,
    showSearch
}: HeaderProps) => {
    return (
        <header className={styles.header}>
            <div className={styles.textContainer}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.iconContainer}>
                {showSearch && <SearchIcon />}
                {showMenu && <MenuIcon />}
            </div>
        </header>)
}

export default Header;