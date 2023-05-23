import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');

  const links = [
    {
      name: 'Vehicles',
      submenu: true,
      sublinks: [
        {
          Head: 'Switch Mobility Ltd:',
          sublink: [
            { name: 'Switch e1', link: '/e1' },
            { name: 'Metrodecker', link: '/metrodecker' },
            { name: 'Metrocity', link: '/metrocity' },
            { name: 'Solo', link: '/solo' },
          ],
        },
      ],
    },
  ];

  return (
    <div className='fixed isolate  z-10 w-full bg-white  '>
      <nav className='   w-full '>
        <div className='flex items-center justify-between font-medium'>
          <div className='z-50  flex w-full items-center justify-between md:w-auto   '>
            <Link to='/'>
              <img
                src={Logo}
                alt='logo'
                className='h-16 md:h-20  md:cursor-pointer '
              />
            </Link>
            <div
              className='p-3 text-3xl md:hidden md:p-5'
              onClick={() => setOpen(!open)}
            >
              {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </div>
          <ul className='hidden items-center gap-2 uppercase md:flex '>
            <li>
              <Link to='/' className=' inline-block px-3 hover:text-indigo-500'>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className=' inline-block whitespace-nowrap px-3 hover:text-indigo-500'
              >
                About Us
              </Link>
            </li>
            <div>
              {links.map((link) => (
                <div>
                  <div className='group px-3 text-left md:cursor-pointer '>
                    <h1
                      className=' group flex items-center justify-between pr-2 md:pr-0'
                      onClick={() => {
                        heading !== link.name
                          ? setHeading(link.name)
                          : setHeading('');
                        setSubHeading('');
                      }}
                    >
                      {link.name}
                      {/* <span className='text-xl md:hidden inline'>
                        {heading === link.name && <BiChevronDown />}
                      </span>
                      <span className='text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2'> */}
                      {/* <ion-icon name='chevron-down'></ion-icon> */}
                      {/* <BiChevronDown /> */}
                      {/* </span> */}
                    </h1>
                    {link.submenu && (
                      <div>
                        <div className='absolute top-12 hidden  hover:md:block group-hover:md:block'>
                          <div className='py-3'>
                            <div className='absolute mx-6 mt-1 h-4 w-4 rotate-45 bg-[#02c6b7]'></div>
                          </div>
                          <div className='-ml-8 bg-[#02c6b7] px-4 py-3 '>
                            {link.sublinks.map((mysublinks) => (
                              <div>
                                {/* <h1 className='text-lg font-semibold text-green-300'>
                                    {mysublinks.Head}
                                  </h1> */}
                                {mysublinks.sublink.map((slink) => (
                                  <li className='my-2.5 text-sm  text-black'>
                                    <Link
                                      to={slink.link}
                                      className='hover:text-white'
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
                      heading === link.name ? 'md:hidden' : 'hidden'
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
                                : setSubHeading('')
                            }
                            className='flex items-center justify-between  py-4 pl-7 pr-5 font-semibold md:pr-0'
                          >
                            {slinks.Head}

                            <span className='inline text-xl md:ml-2 md:mt-1'>
                              {subHeading === slinks.Head && <BiChevronDown />}
                            </span>
                          </h1>
                          <div
                            className={`${
                              subHeading === slinks.Head
                                ? 'md:hidden'
                                : 'hidden'
                            }`}
                          >
                            {slinks.sublink.map((slink) => (
                              <li className='py-3 pl-14'>
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
            </div>
            <li>
              <Link
                to='/tech'
                className=' inline-block px-3 hover:text-indigo-500'
              >
                Tech
              </Link>
            </li>
            {/* <li>
              <Link
                to='/news'
                className='py-4 px-3 inline-block hover:text-indigo-500'
              >
                News
              </Link>
            </li> */}
            <li>
              <Link
                to='/contact'
                className=' inline-block whitespace-nowrap px-3 hover:text-indigo-500'
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to='/careers'
                className=' inline-block whitespace-nowrap px-3 hover:text-indigo-500'
              >
                Careers
              </Link>
            </li>
          </ul>

          {/* Mobile nav */}
          <ul
            className={`
        fixed bottom-0 top-0 w-full overflow-y-auto bg-indigo-100  py-24 pl-4 text-lg text-indigo-600 duration-500
        md:hidden ${open ? 'left-0' : 'left-[-100%]'} 
        `}
          >
            <li>
              <Link
                to='/'
                className='inline-block px-3 py-5 hover:text-indigo-500'
                onClick={() => setOpen(!open)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='inline-block whitespace-nowrap px-3 py-5 hover:text-indigo-500'
                onClick={() => setOpen(!open)}
              >
                About Us
              </Link>
            </li>
            {/* <NavLinks  /> */}
            <div>
              {links.map((link) => (
                <div>
                  <div className='group px-3 text-left md:cursor-pointer '>
                    <h1
                      className='group flex items-center justify-between py-4 pr-2 md:pr-0'
                      onClick={() => {
                        heading !== link.name
                          ? setHeading(link.name)
                          : setHeading('');
                        setSubHeading('');
                      }}
                    >
                      {link.name}
                      <span className='inline text-xl md:hidden'>
                        {heading === link.name ? (
                          <BiChevronUp />
                        ) : (
                          <BiChevronDown />
                        )}
                      </span>
                      <span className='hidden text-xl group-hover:-mt-2  group-hover:rotate-180 md:ml-2 md:mt-1 md:block'>
                        <BiChevronDown />
                      </span>
                    </h1>
                    {link.submenu && (
                      <div>
                        <div className='absolute top-12 hidden hover:md:block group-hover:md:block'>
                          <div className='py-3'>
                            <div className='absolute left-3 mt-1 h-4   w-4 rotate-45 bg-indigo-800'></div>
                          </div>
                          <div
                            className='bg-indigo-800 p-5  '
                            onClick={() => setOpen(!open)}
                          >
                            {link.sublinks.map((mysublinks) => (
                              <div>
                                <h1 className='text-lg font-semibold text-green-300'>
                                  {mysublinks.Head}
                                </h1>
                                {mysublinks.sublink.map((slink) => (
                                  <li className='my-2.5 text-sm text-white'>
                                    <Link
                                      to={slink.link}
                                      className='hover:text-primary'
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
            ${heading === link.name ? 'md:hidden' : 'hidden'}
          `}
                  >
                    {/* sublinks */}
                    {link.sublinks.map((slinks) => (
                      <div>
                        <div>
                          <div>
                            {slinks.sublink.map((slink) => (
                              <li className='py-3 pl-14'>
                                <Link
                                  className='flex'
                                  to={slink.link}
                                  onClick={() => setOpen(!open)}
                                >
                                  <div className='my-auto mr-2 h-2 w-2 rotate-45 bg-green-400'></div>
                                  <div>{slink.name}</div>{' '}
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
                to='/tech'
                className='inline-block px-3 py-5 hover:text-indigo-500'
                onClick={() => setOpen(!open)}
              >
                Tech
              </Link>
            </li>
            {/* <li>
              <Link
                to='/news'
                className='py-5 px-3 inline-block hover:text-indigo-500'
                onClick={() => setOpen(!open)}
              >
                News
              </Link>
            </li> */}
            <li>
              <Link
                to='/contact'
                className='inline-block px-3 py-5 hover:text-indigo-500'
                onClick={() => setOpen(!open)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to='/careers'
                className='inline-block whitespace-nowrap px-3 py-4 hover:text-indigo-500'
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
