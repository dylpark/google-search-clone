//
//
import NavLink from "./NavLink";
import { GlobeIcon } from "@heroicons/react/solid";

interface Props {
}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="grid w-full divide-y-2 divide-solid bg-gray-100 text-sm text-grey-text">
      <div className="px-8 py-3">
        <p>Australia</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="justify-center flex md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="text-green-500 mr-3 h-6" />
          <NavLink name="Carbon neutral since 2007" />
        </div>
        <div className="flex justify-center md:justify-self-start space-x-8 whitespace-nowrap">
          <NavLink name="Advertising" />
          <NavLink name="Business" />
          <NavLink name="How Search Works" />
        </div>
        <div className="flex justify-center md:ml-auto space-x-8">
          <NavLink name="Privacy" />
          <NavLink name="Terms" />
          <NavLink name="Settings" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;