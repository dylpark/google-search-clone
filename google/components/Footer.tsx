//
//
import FooterLink from "./FooterLink";

interface Props {
}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="grid w-full  bg-gray-100 text-sm">
      <div className="text-grey-text px-8 py-3">
        <p>Australia</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center md:justify-self-start space-x-8 whitespace-nowrap">
          <FooterLink name="Advertising" />
          <FooterLink name="Business" />
          <FooterLink name="How Search works" />
        </div>
        <div className="flex justify-center md:ml-auto space-x-8">
          <FooterLink name="Privacy" />
          <FooterLink name="Terms" />
          <FooterLink name="Settings" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;