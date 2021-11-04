//
//
interface Props {
  url: string;
  }

const Avatar: React.FC<Props> = ({ url }) => {
  return <img 
  className="h-10 rounded-full cursor-pointer transition duration-150 ease-out transform hover:scale-110" 
  loading="lazy" 
  src={url} 
  alt="profile-picture" 
  />;
}

export default Avatar;
