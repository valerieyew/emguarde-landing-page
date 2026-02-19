import Image from 'next/image';
import Link from 'next/link';

const RadiationImpactsBanner = () => {
    return (
        <section
            id='impacts-of-radiation'
            aria-labelledby='radiation-impacts-title'
            className='bg-gray-50 px-5 py-16'
        >
            <div className='mx-auto max-w-7xl'>
                <header className='mx-auto max-w-4xl text-center'>
                    <p className='text-sm font-semibold uppercase tracking-[0.18em] text-yellow-600'>
                        EMF awareness
                    </p>
                    <h2
                        id='radiation-impacts-title'
                        className='mt-3 text-3xl font-heading font-semibold text-gray-900 md:text-5xl'
                    >
                        How electromagnetic radiation may affect your daily
                        health
                    </h2>
                    <p className='mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg'>
                        Modern life includes constant EMF exposure from phones,
                        Wi-Fi routers, computers, televisions, charging stations
                        and public transport systems. Over time, that exposure
                        can become difficult to avoid.
                    </p>
                </header>

                <div className='mt-10 grid gap-6 md:grid-cols-3'>
                    <article className='rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm'>
                        <h3 className='font-heading text-lg font-semibold text-gray-900'>
                            Homes and offices
                        </h3>
                        <p className='mt-2 text-sm leading-relaxed text-gray-600'>
                            Laptops, televisions, wireless devices and smart
                            appliances contribute to persistent electromagnetic
                            fields throughout the day.
                        </p>
                    </article>
                    <article className='rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm'>
                        <h3 className='font-heading text-lg font-semibold text-gray-900'>
                            Vehicles and transit
                        </h3>
                        <p className='mt-2 text-sm leading-relaxed text-gray-600'>
                            Car electronics, radio systems and charging
                            infrastructure increase your exposure even while
                            commuting.
                        </p>
                    </article>
                    <article className='rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm'>
                        <h3 className='font-heading text-lg font-semibold text-gray-900'>
                            Shared public spaces
                        </h3>
                        <p className='mt-2 text-sm leading-relaxed text-gray-600'>
                            Public areas such as buses and commercial buildings
                            often contain multiple overlapping radiation sources.
                        </p>
                    </article>
                </div>

                <div className='mt-8 rounded-2xl border border-yellow-300/70 bg-yellow-100/70 p-5 text-center md:p-7'>
                    <p className='text-lg font-medium leading-relaxed text-gray-900 md:text-2xl'>
                        As exposure to electromagnetic pollution grows, proactive
                        and portable EMF protection at home and on the go
                        becomes increasingly important.
                    </p>
                </div>

                <div className='mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]'>
                    <figure className='flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-8'>
                        <Image
                            className='mx-auto rounded-md'
                            src={'/Rouleau Formation.svg'}
                            alt='Illustration of rouleau formation linked to reduced blood circulation from electromagnetic field exposure'
                            width={420}
                            height={420}
                        />
                    </figure>

                    <article className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8'>
                        <h3 className='font-heading text-2xl font-semibold text-gray-900'>
                            Commonly discussed EMF health concerns
                        </h3>
                        <p className='mt-3 text-base leading-relaxed text-gray-700'>
                            Reports of EMF sensitivity have increased as device
                            usage has expanded. Frequently discussed concerns
                            include circulation, cardiovascular stress and sleep
                            quality.
                        </p>
                        <ul className='mt-6 grid gap-5'>
                            <li>
                                <h4 className='font-heading text-lg font-semibold text-yellow-600'>
                                    Reduced blood circulation
                                </h4>
                                <p className='mt-1 text-sm leading-relaxed text-gray-600'>
                                    Dr. Magda Havas and colleagues have written
                                    about rouleau formation and blood flow
                                    changes linked to EMF exposure.{' '}
                                    <Link
                                        className='underline underline-offset-2'
                                        href='https://pubmed.ncbi.nlm.nih.gov/24192494/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Review the PubMed reference
                                    </Link>
                                    .
                                </p>
                            </li>
                            <li>
                                <h4 className='font-heading text-lg font-semibold text-yellow-600'>
                                    Cardiovascular strain
                                </h4>
                                <p className='mt-1 text-sm leading-relaxed text-gray-600'>
                                    Some people report heart-rate variability
                                    and blood-pressure instability around high
                                    EMF environments.
                                </p>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default RadiationImpactsBanner;
