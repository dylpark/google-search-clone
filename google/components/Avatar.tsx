//
//
interface Props {
  url: string;
  className: string;
}

const Avatar: React.FC<Props> = ({ url, className }) => {
  return <img
    className={`h-10 rounded-full cursor-pointer transition duration-150 ease-out transform hover:scale-110 ${className}`}
    loading="lazy"
    src={url}
    alt="profile-picture"
  />;
}

export default Avatar;
