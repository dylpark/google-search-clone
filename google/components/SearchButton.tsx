//
//
interface Props {
    name: string;
    onClick: any;
}

const SearchButton: React.FC<Props> = ({ name, onClick }) => {
    return <button className="p-3 bg-gray-100 rounded-md hover:outline-1 focus:outline-none hover:shadow-md text-sm text-black-text" onClick={onClick}>
        {name}
    </button>
}

export default SearchButton;