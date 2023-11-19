import Header from "../../../components/header";
import SearchIcon from "../../../icons/Search";

interface ListViewProps {
    onSearchClick: () => void;
}

const ListView = ({ onSearchClick }: ListViewProps) => {
    return <div>
        <Header>
            <SearchIcon size={20} onClick={onSearchClick} />
        </Header>
        <div>list view</div>
    </div>
}

export default ListView;