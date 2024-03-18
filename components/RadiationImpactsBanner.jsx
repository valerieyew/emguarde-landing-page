import Image from 'next/image';
import Link from 'next/link';

const RadiationImpactsBanner = () => {
    return (
        <section id='impacts-of-radiation' className='py-16 px-5 bg-gray-50'>
            <div className='mx-auto max-w-5xl px-1'>
                <h3 className='text-center md:text-4xl text-3xl font-heading font-semibold'>
                    How Does Radiation Harm You?
                </h3>
            </div>

            <div className='mt-10 max-w-7xl mx-auto mt-8 text-center text-lg'>
                <p className='max-w-7xl mt-3'>
                    <i>
                        Computers, laptops and TVs fill our workspaces with the
                        growth of digitalisation.
                    </i>
                </p>
                <p className='mt-3'>
                    <i>Car radios give off especially high EMF radiation.</i>
                </p>
                <p className='mt-3'>
                    <i>
                        TVs and charging ports are also increasingly being added
                        to our public areas including buses.
                    </i>
                </p>
            </div>

            <div className='mx-auto max-w-8xl px-2'>
                <p className='text-center text-yellow-500 text-2xl mt-6'>
                    <i>
                        With so many radiation sources bombarding our body at
                        different frequencies all the time, it is difficult to
                        avoid the toxic effects of radiation without emGuarde.
                    </i>
                </p>
            </div>

            <div className='grid lg:grid-cols-2 max-w-7xl mx-auto mt-8 gap-2'>
                <div className='flex items-center justify-center rounded-md'>
                    <Image
                        className='mx-auto rounded-md'
                        src={'/Rouleau Formation.png'}
                        alt='Reduced microcirculatory blood flow due to Rouleau Formation'
                        width={350}
                        height={350}
                    />
                </div>
                <div className='px-2 text-left'>
                    <p>
                        We are currently all facing{' '}
                        <b className='text-yellow-500'>
                            electrosmog (a form of electromagnetic pollution)
                        </b>
                        .
                    </p>
                    <p className='mt-5'>
                        More people have been reporting negative reactions to
                        devices that emit EMF radiation over the years. Notable ones include
                    </p>
                    <ul className='list-decimal ml-5 mt-5 gap-2 grid'>
                        <li>
                            <h3 className='font-heading font-semibold text-lg text-yellow-500'>
                                Reduced Blood Circulation
                            </h3>
                            <p className='text-gray-600'>
                                World-renowned professor, Dr. Magda Havas,
                                Ph.D., said that EMF radiation causes Rouleau
                                formation (unhealthy blood).{' '}
                                <Link
                                    className='underline'
                                    href={
                                        'https://pubmed.ncbi.nlm.nih.gov/24192494/'
                                    }
                                >
                                    Read more here.
                                </Link>
                            </p>
                        </li>
                        <li>
                            <h3 className='font-heading font-semibold text-lg text-yellow-500'>
                                Unhealthy Heart
                            </h3>
                            <p className='text-gray-600'>
                                E.g. Fluctuations in blood pressure
                                untreatable by medication, heart attacks and
                                strokes among the younger population
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            
        </section>
    );
};

export default RadiationImpactsBanner;
