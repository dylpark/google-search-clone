//
//
interface Props {
    name: string;
}

const HeaderLink: React.FC<Props> = ({ name }) => {
    return <p className="text-black-text hover:underline cursor-pointer">{name}</p>
}

export default HeaderLink;