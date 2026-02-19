const SurroundingRadiationBanner = () => {
    return (
        <section className='py-16 bg-gradient-to-b from-black via-red-950/30 to-black px-5'>
            <div className='mx-auto max-w-7xl'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-5xl font-heading font-bold text-white mb-4'>
                        EMF Radiation Surrounds You Too
                    </h2>
                    <p className='text-lg md:text-xl text-red-100 max-w-3xl mx-auto'>
                        Everywhere - home, work, streets. Radiation exposure never stops.
                    </p>
                </div>

                <div className='mt-10 grid gap-6 md:grid-cols-3'>
                    <article className='rounded-xl border border-red-400/40 bg-gradient-to-br from-red-600/20 to-red-900/20 p-6 text-left shadow-lg'>
                        <div className='text-3xl mb-3'>🏠</div>
                        <div className='space-y-3'>
                            <h4 className='text-xl md:text-2xl font-semibold text-red-300'>
                                Home & Offices{' '}
                            </h4>
                            <ul className='space-y-2 text-base md:text-lg text-gray-200 font-medium'>
                                <li>✗ WiFi routers</li>
                                <li>✗ Microwaves</li>
                                <li>✗ Smart appliances</li>
                                <li>✗ Laptops</li>
                            </ul>
                        </div>
                    </article>
                    <article className='rounded-xl border border-red-400/40 bg-gradient-to-br from-red-600/20 to-red-900/20 p-6 text-left shadow-lg'>
                        <div className='text-3xl mb-3'>🚗</div>
                        <div className='space-y-3'>
                            <h4 className='text-xl md:text-2xl font-semibold text-red-300'>
                                Vehicles & Transit
                            </h4>
                            <ul className='space-y-2 text-base md:text-lg text-gray-200 font-medium'>
                                <li>✗ Smartphones</li>
                                <li>✗ Public WiFi</li>
                                <li>✗ Vehicle systems</li>
                                <li>✗ Public transit</li>
                            </ul>
                        </div>
                    </article>
                    <article className='rounded-xl border border-red-400/40 bg-gradient-to-br from-red-600/20 to-red-900/20 p-6 text-left shadow-lg'>
                        <div className='text-3xl mb-3'>🏢</div>

                        <div className='space-y-3'>
                            <h4 className='text-xl md:text-2xl font-semibold text-red-300'>Public Spaces</h4>
                            <ul className='space-y-2 text-base md:text-lg text-gray-200 font-medium'>
                                <li>✗ Computer screens</li>
                                <li>✗ Office WiFi</li>
                                <li>✗ Printers</li>
                                <li>✗ Lighting systems</li>
                            </ul>
                        </div>
                    </article>
                </div>

                <div className='mt-10 text-center'>
                    <p className='text-xl md:text-2xl text-red-200 font-bold'>
                        You cannot avoid it. <br />
                        <span className='text-yellow-300 text-2xl md:text-3xl'>But emGuarde stops it.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SurroundingRadiationBanner;
