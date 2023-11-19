import Header from "../../../../components/header";
import CheckIcon from "../../../../icons/Check";
import CrossIcon from "../../../../icons/Cross";
import styles from './styles.module.scss'

interface SearchViewProps {
    onDone?: () => void;
    onExit?: () => void;
}

const SearchView = ({
    onDone,
    onExit
}: SearchViewProps) => {
    return <div className={styles.searchView}>
        <Header description="Search or select a location on Map">
            <div className={styles.icons}>
                <CrossIcon onClick={onExit} size={20} />
                <CheckIcon onClick={onDone} size={20} />
            </div>
        </Header>
        <div>Search view</div>
    </div>
}

export default SearchView;