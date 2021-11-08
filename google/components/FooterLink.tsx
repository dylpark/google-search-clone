//
//
interface Props {
    name: string;
}

const FooterLink: React.FC<Props> = ({ name }) => {
    return <p className="text-grey-text hover:underline cursor-pointer">{name}</p>
}

export default FooterLink;