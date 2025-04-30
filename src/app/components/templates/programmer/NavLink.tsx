import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  navigationLinksColor?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  title,
  navigationLinksColor,
}) => {
  return (
    <Link
      style={{ color: navigationLinksColor }} // تطبيق اللون على الـ ul
      href={href}
      className={`text-[#C3C3C3] block py-2 sm:text-xl rounded md:p-0 hover:text-white`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
