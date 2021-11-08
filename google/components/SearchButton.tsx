//
//
interface Props {
    name: string;
}

const SearchButton: React.FC<Props> = ({ name }) => {
    return <button className="p-3 bg-gray-100 rounded-md hover:outline-1 focus:outline-none hover:shadow-md text-sm text-gray-800">
        {name}
    </button>
}

export default SearchButton;