//
//
interface Props {
    name: string;
}

const BasicLink: React.FC<Props> = ({ name }) => {
    return <p className="hover:underline cursor-pointer">{name}</p>
}

export default BasicLink;