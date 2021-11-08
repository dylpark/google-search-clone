//
//
import NavLink from "./NavLink";

interface Props {
}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="text-grey-text grid w-full  bg-gray-100 text-sm">
      <div className="px-8 py-3">
        <p>Australia</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center md:justify-self-start space-x-8 whitespace-nowrap">
          <NavLink name="Advertising" />
          <NavLink name="Business" />
          <NavLink name="How Search works" />
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