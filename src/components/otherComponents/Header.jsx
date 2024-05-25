import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const links = [
    {
      name: "eBUS",
      submenu: true,
      sublinks: [
        {
          Head: "Switch Mobility Ltd:",
          sublink: [
            { name: "Switch e1", link: "/e1" },
            { name: "Metrodecker", link: "/metrodecker" },
            { name: "Metrocity", link: "/metrocity" },
            { name: "Solo", link: "/solo" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="fixed z-20 w-full bg-white shadow isolate ">
      <nav className="w-full ">
        <div className="flex items-center justify-between font-medium">
          <div className="z-50 flex items-center justify-between w-full md:w-auto ">
            <Link onClick={()=>setOpen(false)} to="/">
              <img
                src={Logo}
                alt="logo"
                className="h-16 md:h-20 md:cursor-pointer "
              />
            </Link>
            <div
              className="p-3 text-3xl md:hidden md:p-5"
              onClick={() => setOpen(!open)}
            >
              {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </div>
          <ul className="items-center hidden gap-2 md:flex ">
            <div>
              {links.map((link) => (
                <div>
                  <div className="px-3 text-left group md:cursor-pointer ">
                    <h1
                      className="flex items-center justify-between pr-2 group md:pr-0"
                      onClick={() => {
                        heading !== link.name
                          ? setHeading(link.name)
                          : setHeading("");
                        setSubHeading("");
                      }}
                    >
                      {link.name}
                    </h1>
                    {link.submenu && (
                      <div>
                        <div className="absolute hidden uppercase top-12 hover:md:block group-hover:md:block ">
                          <div className="-ml-2.5 py-3">
                            <div className="absolute mx-6 mt-1 h-4 w-4 rotate-45 bg-[#02c6b7]"></div>
                          </div>
                          <div className="-ml-10 bg-[#02c6b7] px-4 py-3 ">
                            {link.sublinks.map((mysublinks) => (
                              <div>
                                {/* <h1 className='text-lg font-semibold text-green-300'>
                                    {mysublinks.Head}
                                  </h1> */}
                                {mysublinks.sublink.map((slink) => (
                                  <li className="my-2.5 text-sm  text-black">
                                    <Link
                                      to={slink.link}
                                      className="hover:text-white"
                                    >
                                      {slink.name}
                                    </Link>
                                  </li>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Mobile menus */}
                  <div
                    className={`${
                      heading === link.name ? "md:hidden" : "hidden"
                    }`}
                  >
                    {/* sublinks */}
                    {link.sublinks.map((slinks) => (
                      <div>
                        <div>
                          <h1
                            onClick={() =>
                              subHeading !== slinks.Head
                                ? setSubHeading(slinks.Head)
                                : setSubHeading("")
                            }
                            className="flex items-center justify-between py-4 pr-5 font-semibold pl-7 md:pr-0"
                          >
                            {slinks.Head}

                            <span className="inline text-xl md:ml-2 md:mt-1">
                              {subHeading === slinks.Head && <BiChevronDown />}
                            </span>
                          </h1>
                          <div
                            className={`${
                              subHeading === slinks.Head
                                ? "md:hidden"
                                : "hidden"
                            }`}
                          >
                            {slinks.sublink.map((slink) => (
                              <li className="py-3 pl-14">
                                <Link to={slink.link}>{slink.name}</Link>
                              </li>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>{" "}
            <li>
              <Link
                to="/iev-series"
                className="inline-block px-3 hover:text-indigo-500"
              >
                eLCV
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="inline-block px-3 uppercase whitespace-nowrap hover:text-indigo-500"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/tech"
                className="inline-block px-3 uppercase hover:text-indigo-500"
              >
                Tech
              </Link>
            </li>
            {/* <li>
              <Link
                to='/news'
                className='inline-block px-3 py-4 hover:text-indigo-500'
              >
                News
              </Link>
            </li> */}
            <li>
              <Link
                to="/contact"
                className="inline-block px-3 uppercase whitespace-nowrap hover:text-indigo-500"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="inline-block px-3 uppercase whitespace-nowrap hover:text-indigo-500"
              >
                Careers
              </Link>
            </li>
          </ul>

          {/* Mobile nav */}
          <ul
            className={`
        fixed bottom-0 top-0 w-full select-none overflow-y-auto  bg-indigo-100 pl-4 pt-16 text-lg text-indigo-600
        duration-500 md:hidden ${open ? "left-0" : "left-[-100%]"} 
        `}
          >
            <li>
              <Link
                to="/about"
                className="inline-block px-3 py-3 whitespace-nowrap hover:text-indigo-500"
                onClick={() => setOpen(!open)}
              >
                About Us
              </Link>
            </li>
            {/* <NavLinks  /> */}
            <div>
              {links.map((link) => (
                <div>
                  <div className="px-3 text-left select-none group md:cursor-pointer">
                    <h1
                      className="flex items-center justify-between py-3 pr-2 cursor-pointer group md:pr-0"
                      onClick={() => {
                        heading !== link.name
                          ? setHeading(link.name)
                          : setHeading("");
                        setSubHeading("");
                      }}
                    >
                      {link.name}
                      <span className="inline text-xl md:hidden">
                        {heading === link.name ? (
                          <BiChevronUp />
                        ) : (
                          <BiChevronDown />
                        )}
                      </span>
                      <span className="hidden text-xl group-hover:-mt-2 group-hover:rotate-180 md:ml-2 md:mt-1 md:block">
                        <BiChevronDown />
                      </span>
                    </h1>
                    {link.submenu && (
                      <div>
                        <div className="absolute hidden top-12 hover:md:block group-hover:md:block">
                          <div className="py-3">
                            <div className="absolute w-4 h-4 mt-1 rotate-45 bg-indigo-800 left-3"></div>
                          </div>
                          <div
                            className="p-5 bg-indigo-800 "
                            onClick={() => setOpen(!open)}
                          >
                            {link.sublinks.map((mysublinks) => (
                              <div>
                                <h1 className="text-lg font-semibold text-green-300">
                                  {mysublinks.Head}
                                </h1>
                                {mysublinks.sublink.map((slink) => (
                                  <li className="my-2.5 text-sm text-white">
                                    <Link
                                      to={slink.link}
                                      className="hover:text-primary"
                                    >
                                      {slink.name}
                                    </Link>
                                  </li>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Mobile menus */}
                  <div
                    className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
                  >
                    {/* sublinks */}
                    {link.sublinks.map((slinks) => (
                      <div>
                        <div>
                          <div>
                            {slinks.sublink.map((slink) => (
                              <li className="py-3 pl-14">
                                <Link
                                  className="flex"
                                  to={slink.link}
                                  onClick={() => setOpen(!open)}
                                >
                                  <div className="w-2 h-2 my-auto mr-2 rotate-45 bg-green-400"></div>
                                  <div>{slink.name}</div>{" "}
                                </Link>
                              </li>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <li>
              <Link
                to="/iev-series"
                className="inline-block px-3 py-3 hover:text-indigo-500"
                onClick={() => setOpen(!open)}
              >
                eLCV
              </Link>
            </li>
            <li>
              <Link
                to="/tech"
                className="inline-block px-3 py-3 hover:text-indigo-500"
                onClick={() => setOpen(!open)}
              >
                Tech
              </Link>
            </li>
            {/* <li>
              <Link
                to='/news'
                className='inline-block px-3 py-5 hover:text-indigo-500'
                onClick={() => setOpen(!open)}
              >
                News
              </Link>
            </li> */}
            <li>
              <Link
                to="/contact"
                className="inline-block px-3 py-3 border hover:text-indigo-500"
                onClick={() => setOpen(!open)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="inline-block px-3 py-3 whitespace-nowrap hover:text-indigo-500"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
