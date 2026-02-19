import Image from 'next/image';

const electromagneticHarmonizers = [
    {
        title: 'EMF Coverage Range',
        description: 'Up to 4-meter radius (8-meter diameter)',
    },
    {
        title: 'Frequency Harmonization',
        description: 'High-frequency harmonization support up to 1 GHz',
    },
    {
        title: 'Power Consumption',
        description: '0.5 W low power usage',
    },
    {
        title: 'Power Input Support',
        description: 'DC 5V with 2A to 6A power adapters',
    },
    {
        title: 'Device Lifespan',
        description: 'Minimum 5-year lifespan with 1-year warranty',
    },
];

const SpecificationBanner = () => {
    return (
        <section id='specification' aria-labelledby='specifications-title' className='bg-black py-16'>
            <div className='mx-auto max-w-7xl px-5 text-white'>
                <header className='mx-auto max-w-4xl text-center'>
                    <p className='text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400'>
                        Product details
                    </p>
                    <h2
                        id='specifications-title'
                        className='mt-3 text-3xl font-heading font-semibold md:text-5xl'
                    >
                        emGuarde Specifications
                    </h2>
                </header>

                <div className='mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]'>
                    <article className='rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8'>
                        <h3 className='text-xl font-heading font-semibold text-white md:text-2xl'>
                            Technical specification summary
                        </h3>
                        <dl className='mt-5 grid gap-4'>
                            {electromagneticHarmonizers.map((e, i) => (
                                <div className='rounded-lg border border-white/10 bg-black/30 p-4' key={i}>
                                    <dt className='font-heading text-lg font-semibold text-yellow-400'>
                                        {e.title}
                                    </dt>
                                    <dd className='mt-1 text-sm leading-relaxed text-gray-200'>
                                        {e.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </article>

                    <figure className='mx-auto flex w-full max-w-2xl items-center justify-center rounded-2xl border border-white/15 bg-white/5 p-5 md:p-8'>
                        <div className='mx-auto w-full max-w-[500px] overflow-hidden rounded-md'>
                            <Image
                                className='h-auto rounded-md w-[110%] max-w-none'
                                src={'/emGuarde dimensions.svg'}
                                alt='Diagram showing emGuarde device dimensions and physical size layout'
                                width={640}
                                height={640}
                            />
                        </div>
                        <figcaption className='sr-only'>
                            emGuarde dimension guide for size and placement planning.
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default SpecificationBanner;
