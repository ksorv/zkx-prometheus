import LoaderIcon from "../../icons/Loader"
import styles from './styles.module.scss'

interface LoaderProps {
    text?: string;
    size?: number;
}

const Loader = ({
    size = 20,
    text
}: LoaderProps) => {
    return (
        <div className={styles.loaderContainer}>
            <LoaderIcon
                size={size}
                className={styles.loader}
            />
            {text && <p className={styles.loaderText}>{text}</p>}
        </div>
    )
}

export default Loader;