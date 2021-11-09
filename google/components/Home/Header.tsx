//
//
import Avatar from "../Avatar";
import Link from "../Link"
import { ViewGridIcon } from "@heroicons/react/solid";

interface Props {
}

const Header: React.FC<Props> = () => {
    return (
        <header className="text-black-text flex w-full p-5 justify-between text-sm">
            {/* Left Div */}
            <div className="flex space-x-4 items-center">
                <Link name="About" />
                <Link name="Store" />
            </div>
            {/* Right Div */}
            <div className="flex space-x-4 items-center">
                <Link name="Gmail" />
                <Link name="Images" />
                {/* Icons */}
                <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
                {/* Avatar */}
                <Avatar className="" url="https://avatars.githubusercontent.com/u/64296934?v=4" />
            </div>
        </header>
    );
}

export default Header;
