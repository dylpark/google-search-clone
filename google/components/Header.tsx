import Avatar from "../components/Avatar";
import HeaderLink from "../components/HeaderLink"
import { ViewGridIcon } from "@heroicons/react/solid";



interface Props {
}

const Header: React.FC<Props> = () => {
    return (
        <header className="flex w-full p-5 justify-between text-sm text-gray-700">
            {/* Left Div */}
            <div className="flex space-x-4 items-center">
                <HeaderLink name="About" />
                <HeaderLink name="Store" />
            </div>
            {/* Right Div */}
            <div className="flex space-x-4 items-center">
                <HeaderLink name="Gmail" />
                <HeaderLink name="Images" />
                {/* Icons */}
                <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
                {/* Avatar */}
                <Avatar url="https://avatars.githubusercontent.com/u/64296934?v=4" />
            </div>
        </header>
    );
}

export default Header;
