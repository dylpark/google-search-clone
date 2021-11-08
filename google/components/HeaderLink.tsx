//
//
interface Props {
    name: string;
}

const HeaderLink: React.FC<Props> = ({ name }) => {
    return <p className="text-black-header hover:underline cursor-pointer">{name}</p>
}

export default HeaderLink;