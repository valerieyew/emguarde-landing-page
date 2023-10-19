import Link from "next/link";

const HealthBenefits = () => {
    return (
        <section
            id='health-benefits'
            className='bg-cover bg-center md:bg-fixed'
            style={{
                backgroundImage: "url('/pexels-vecislavas-popa-1571459.jpg')",
                backgroundSize: '100% 100%',
            }}
        >
            <div className='bg-black/20 py-14'>
                <div className='mx-auto max-w-5xl px-2 text-white drop-shadow-lg'>
                    <h1 className='text-center md:text-4xl text-3xl font-heading font-semibold'>
                        Health Benefits of emGuarde
                    </h1>
                    <p className='text-center mt-5'>
                        With emGuarde, the benefits are subtle to feel, yet
                        transformative to your health. Here are what you can
                        look forward to.
                    </p>
                </div>

                <div className='mx-auto max-w-7xl mt-6'>
                    <ul className='grid gap-2 p-1'>
                        <li className='px-10 py-7 bg-yellow-50 rounded-md'>
                            <p className='font-semibold text-gray-500'>01</p>
                            <h3 className='font-heading font-semibold text-lg'>
                                Less Fatigue and Longer Attention Span
                            </h3>
                            <p className='text-gray-600'>
                                Always be at your best with reduced disturbances
                                to your body functions by the high amount of
                                radiation surrounding us all the time.
                            </p>
                        </li>
                        <li className='px-10 py-7 bg-yellow-50 rounded-md'>
                            <p className='font-semibold text-gray-500'>02</p>
                            <h3 className='font-heading font-semibold text-lg'>
                                Less Headache Episodes
                            </h3>
                            <p className='text-gray-600'>
                                Bid farewell to those persistent headaches in
                                your daily life.
                            </p>
                        </li>
                        <li className='px-10 py-7 bg-yellow-50 rounded-md'>
                            <p className='font-semibold text-gray-500'>03</p>
                            <h3 className='font-heading font-semibold text-lg'>
                                Stronger Blood Circulation
                            </h3>
                            <p className='text-gray-600'>
                                Feel the difference as your body experiences
                                improved circulation and more energy.
                            </p>
                        </li>
                        <li className='px-10 py-7 bg-yellow-50 rounded-md'>
                            <p className='font-semibold text-gray-500'>04</p>
                            <h3 className='font-heading font-semibold text-lg'>
                                Reduced Chance of Cancer
                            </h3>
                            <p className='text-gray-600'>
                                Protect yourself from radiation in your home,
                                car, and office with our portable emGuarde.
                            </p>
                        </li>
                    </ul>
                </div>

                <Link
                    href={"#buy-section"}
                    className="text-center font-semibold bg-yellow-500 mt-8 mx-auto px-7 py-3 rounded-md block text-md w-48"
                    >
                        BUY NOW
                </Link>
            </div>
        </section>
    );
};

export default HealthBenefits;
