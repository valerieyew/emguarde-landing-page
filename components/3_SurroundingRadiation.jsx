const radiationSources = [
    {
        icon: '🏠',
        title: 'Homes & Offices',
        items: [
            'WiFi routers',
            'Mobile phones',
            'Tablets and Laptops',
            'Televisions',
            'LED lights',
            'Smart devices',
        ],
    },
    {
        icon: '🚗',
        title: 'Transport & Travel',
        items: [
            'MRT electrical systems',
            'Electric vehicle systems',
            'Car radio',
            'Bluetooth connections',
            'Onboard WiFi',
            'Mobile phones',
        ],
    },
    {
        icon: '🏢',
        title: 'Public Spaces',
        items: [
            'Smart lighting',
            'LED billboards',
            'Public WiFi',
            'Mobile towers',
            'Urban sensors',
            'Annoucement systems',
        ],
    },
];

const cardClassName =
    'rounded-xl border border-red-500/40 bg-gradient-to-br from-red-600/40 to-red-900/40 p-6 text-left shadow-lg';

const titleClassName = 'text-xl md:text-2xl font-semibold text-red-200';
const listClassName = 'space-y-2 text-base md:text-lg text-gray-100 font-medium';

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
                    {radiationSources.map(({ icon, title, items }) => (
                        <article key={title} className={cardClassName}>
                            <div className='text-3xl mb-3'>{icon}</div>
                            <div className='space-y-3'>
                                <h4 className={titleClassName}>{title}</h4>
                                <ul className={listClassName}>
                                    {items.map((item) => (
                                        <li key={item}>✗ {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
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
