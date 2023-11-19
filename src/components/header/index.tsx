import MenuIcon from '../../icons/Menu';
import SearchIcon from '../../icons/Search';
import { IconProps } from '../../typings/icon';
import styles from './styles.module.scss'

interface HeaderProps {
    title?: string;
    description?: string;
    children?: React.ReactNode | React.ReactNode[]
}

const Header = ({
    title = 'Prometheus',
    description = 'You can add, edit and delete locations',
    children
}: HeaderProps) => {
    return (
        <header className={styles.header}>
            <div className={styles.textContainer}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.children}>
                {children}
            </div>
        </header>)
}

export default Header;