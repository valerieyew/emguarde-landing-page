import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const nav = [
  { name: "Health Benefits", href: "#health-benefits" },
  { name: "Specifications", href: "#specification" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Events", href: "#events" },
  { name: "Buy Now", href: "#buy-section" },
];

const Header = () => {
  return (
    <header className="bg-black">
      <div className="mx-auto max-w-7xl px-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image alt="logo" src={"/logo.png"} width={50} height={50} />
          <h5 className=" py-5 font-heading text-lg text-white font-semibold">
            EmGuarde
          </h5>
        </div>
        <div>
          <ul className="hidden md:flex gap-5 ">
            {nav.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-white font-heading px-5">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <Menu>
              <Menu.Button>
                <HiOutlineMenuAlt3 color="white" size={25} />
              </Menu.Button>
              <Menu.Items
                className={
                  "absolute top-[68px] left-0 bg-black grid w-full h-auto py-5"
                }
              >
                <ul className="grid gap-3">
                  {nav.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white font-heading px-5 py-5"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
