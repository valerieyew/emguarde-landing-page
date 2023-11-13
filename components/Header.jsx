import Link from 'next/link';

const Header = () => {
    return (
        <nav class='bg-black z-10'>
            <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link
                    href='https://www.emguardesingapore.com/'
                    class='flex items-center space-x-3 rtl:space-x-reverse'
                >
                    <img
                        src='/logo.png'
                        class='h-8'
                        alt='Kangen Wiz Global Logo'
                    />
                    <span class='self-center font-semibold text-white'>
                        Kangen Wiz Global (emGuarde)
                    </span>
                </Link>
                <button
                    data-collapse-toggle='navbar-default'
                    type='button'
                    class='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden'
                    aria-controls='navbar-default'
                    aria-expanded='false'
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
                <div
                    class='hidden w-full md:block md:w-auto'
                    id='navbar-default'
                >
                    <ul class='font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0'>
                        <li>
                            <Link
                                href='#health-benefits'
                                class='block py-2 px-3 text-white rounded md:hover:text-yellow-500 md:p-0'
                                aria-current='page'
                            >
                                Health Benefits
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='#testimonials'
                                class='block py-2 px-3 text-white rounded md:hover:text-yellow-500 md:p-0'
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='#specification'
                                class='block py-2 px-3 text-white rounded md:hover:text-yellow-500 md:p-0'
                            >
                                Specifications
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                href='#events'
                                class='block py-2 px-3 text-white rounded md:hover:text-yellow-500 md:p-0'
                            >
                                Events
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                href='#buy-section'
                                class='block py-2 px-3 text-white rounded md:hover:text-yellow-500 md:p-0'
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
export default Header;
