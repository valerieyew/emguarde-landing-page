import Image from 'next/image';
import Link from 'next/link';

const ImpactsOfRadiation = () => {
    return (
        <section id='impacts-of-radiation' className='py-16 px-5 bg-gray-50'>
            <div className='mx-auto max-w-5xl px-1'>
                <h3 className='text-center md:text-4xl text-3xl font-heading font-semibold'>
                    How Does Radiation Harm You?
                </h3>
                <p className='text-center mt-5'>
                    We are currently all facing{' '}
                    <b className='text-yellow-500'>
                        electrosmog (a form of electromagnetic radiation)
                    </b>
                    .
                </p>
                <p className='text-center mt-5'>
                    <b>Computers, laptops and TVs</b> fill our workspaces with
                    the growth of digitalisation. <b>Car radios</b> give off
                    especially high EMF radiation. <b>TVs and charging ports</b>{' '}
                    are also increasingly being added to our public areas
                    including buses.
                </p>
                <p className='text-center mt-5'>
                    <b className='text-yellow-500'>
                        More people have been reporting negative reactions to
                        devices that emit EMF radiation over the years.
                    </b>{' '}
                </p>
            </div>

            <div className='grid lg:grid-cols-2 max-w-7xl mx-auto mt-8 gap-2'>
                <div className='flex items-center justify-center rounded-md'>
                    <Image
                        className='mx-auto rounded-md'
                        src={'/Rouleau Formation.png'}
                        alt='Reduced microcirculatory blood flow due to Rouleau Formation'
                        width={500}
                        height={500}
                    />
                </div>
                <div className='px-5'>
                    <ul className='list-decimal ml-5 gap-2 grid'>
                        <li className='p-2'>
                            <h3 className='font-heading font-semibold text-lg'>
                                Chronic Health Problems
                            </h3>
                            <p className='text-gray-600'>
                                E.g. Long term headaches, fatigue and cramps
                            </p>
                        </li>
                        <li className='p-2'>
                            <h3 className='font-heading font-semibold text-lg'>
                                Reduced Blood Circulation
                            </h3>
                            <p className='text-gray-600'>
                                A clinical research by a world-renowned
                                professor on PubMed, Dr. Magda Havas, Ph.D., has
                                shown that EMF radiation causes Rouleau
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
                        <li className='p-2'>
                            <h3 className='font-heading font-semibold text-lg'>
                                Learning, Concentration, and Behavioural
                                Disorders
                            </h3>
                            <p className='text-gray-600'>
                                E.g. Attention deficit disorder (ADD), slower
                                memory recall
                            </p>
                        </li>
                        <li className='p-2'>
                            <h3 className='font-heading font-semibold text-lg'>
                                Issues Faced During Pregnancy
                            </h3>
                            <p className='text-gray-600'>
                                E.g. Higher chance of miscarriages / birth
                                defects in babies
                            </p>
                        </li>
                        <li className='p-2'>
                            <h3 className='font-heading font-semibold text-lg'>
                                Unhealthy Heart
                            </h3>
                            <p className='text-gray-600'>
                                E.g. Extreme fluctuations in blood pressure that
                                are not treatable by medication, heart attacks
                                and strokes among the younger population
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <p className='text-center mt-10'>
                With so many radiation sources bombarding our body at different
                frequencies all the time, it is difficult to avoid the toxic
                effects of radiation without emGuarde.
            </p> */}
            <div className='text-white mx-auto max-w-8xl px-2'>
                <p className='text-center text-yellow-500 text-2xl mt-10'>
                    <i>
                        With so many radiation sources bombarding our body at different
                        frequencies all the time, it is difficult to avoid the toxic
                        effects of radiation without emGuarde.
                    </i>
                </p>
            </div>
        </section>
    );
};

export default ImpactsOfRadiation;
