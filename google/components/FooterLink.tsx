//
//
interface Props {
    name: string;
}

const FooterLink: React.FC<Props> = ({ name }) => {
    return <p className="text-grey-footer hover:underline cursor-pointer">{name}</p>
}

export default FooterLink;