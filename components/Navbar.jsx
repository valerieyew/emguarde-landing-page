import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav class='bg-black'>
            <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link
                    href='https://www.emguardesingapore.com/'
                    class='flex items-center space-x-3 rtl:space-x-reverse'
                >
                    <img
                        src='/KWG%20Page%20Icon%20(jagged%20edges).png'
                        class='h-8'
                        alt='Kangen Wiz Global Logo'
                    />
                    <span class='self-center font-semibold text-white'>
                        Kangen Wiz Global
                    </span>
                </Link>
                <button
                    type='button'
                    class='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden'
                    onClick={toggleMobileMenu}
                >
                    <span class='sr-only'>Open main menu</span>
                    <svg
                        class='w-5 h-5'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 17 14'
                    >
                        <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M1 1h15M1 7h15M1 13h15'
                        />
                    </svg>
                </button>
                {isMobileMenuOpen && 
                  <div
                      class='w-full lg:hidden z-10'
                  >
                      <ul class='font-medium text-center'>
                          <li>
                              <Link
                                  href='#health-benefits'
                                  class='block py-2 px-3 text-white hover:text-yellow-500'
                                  aria-current='page'
                                  onClick={toggleMobileMenu}
                              >
                                  Health Benefits
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href='#testimonials'
                                  class='block py-2 px-3 text-white hover:text-yellow-500'
                                  onClick={toggleMobileMenu}
                              >
                                  Testimonials
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href='#specification'
                                  class='block py-2 px-3 text-white hover:text-yellow-500'
                                  onClick={toggleMobileMenu}
                              >
                                  Specifications
                              </Link>
                          </li>
                          {/* <li>
                              <Link
                                  href='#events'
                                  class='block py-2 px-3 text-white hover:text-yellow-500'
                                  onClick={toggleMobileMenu}
                              >
                                  Events
                              </Link>
                          </li> */}
                          <li>
                              <Link
                                  href='#buy-section'
                                  class='block py-2 px-3 text-white hover:text-yellow-500'
                                  onClick={toggleMobileMenu}
                              >
                                  Buy Now
                              </Link>
                          </li>
                      </ul>
                  </div>
                }

                {/* Navbar for large screens and above */}
                <div
                    class='hidden w-full lg:block lg:w-auto'
                >
                    <ul class='font-medium flex flex-col lg:p-0 mt-4 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0'>
                        <li>
                            <Link
                                href='#health-benefits'
                                class='block text-white rounded lg:hover:text-yellow-500 lg:p-0'
                                aria-current='page'
                            >
                                Health Benefits
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='#testimonials'
                                class='block text-white rounded lg:hover:text-yellow-500 lg:p-0'
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='#specification'
                                class='block text-white rounded lg:hover:text-yellow-500 lg:p-0'
                            >
                                Specifications
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                href='#events'
                                class='block text-white rounded lg:hover:text-yellow-500 lg:p-0'
                            >
                                Events
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                href='#buy-section'
                                class='block text-white rounded lg:hover:text-yellow-500 lg:p-0'
                            >
                                Buy Now
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
