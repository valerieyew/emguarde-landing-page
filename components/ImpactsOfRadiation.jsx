import Image from "next/image";
import Link from "next/link";

const ImpactsOfRadiation = () => {
    return (
        <section id='impacts-of-radiation' className='py-16 px-5 bg-gray-50'>
            <div className='mx-auto max-w-5xl px-2'>
                <h3 className='text-center md:text-4xl text-3xl font-heading font-semibold'>
                    How Does Radiation Harm You?
                </h3>
                <p className='text-center mt-5'>
                    We are currently all facing{" "}
                    <b class='text-yellow-500'>
                        electrosmog (a form of electromagnetic radiation)
                    </b>
                    .
                </p>
                <p className='text-center mt-5'>
                    Computers, laptops and TVs fill our workspaces with the
                    growth of digitalisation.{" "}
                    <span className='text-yellow-500'>
                        Car radios give off especially high EMF radiation.
                    </span>{" "}
                    TVs and charging ports are also increasingly being added to
                    our public areas including buses.
                </p>
                <p className='text-center mt-5'>
                    <b className='text-yellow-500'>
                        More people have been reporting negative reactions to
                        devices that emit EMF radiation over the years.
                    </b>{" "}
                    However, some people may not be aware that they are exposed
                    to so much of it due to its invisibility to our senses. They
                    only know that they feel worse in certain locations or
                    specific times of the day.
                </p>
            </div>

            <div className='grid lg:grid-cols-2 max-w-7xl mx-auto mt-5 gap-5'>
                <div className='flex items-center justify-center bg-gray-100 rounded-md'>
                    <Image
                        className='mx-auto rounded-md'
                        src={"/emGuarde-Horizontal.png"}
                        alt='/'
                        width={500}
                        height={500}
                    />
                </div>
                <div className='px-10'>
                    <ul className=' list-decimal ml-5 gap-2 grid'>
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
                                formation (unhealthy blood).{" "}
                                <Link className='underline' href={"https://pubmed.ncbi.nlm.nih.gov/24192494/"}>Read more here.</Link>
                            </p>
                        </li>
                        <li className='p-2'>
                            <h3 className='font-heading font-semibold text-lg'>
                                Learning, Concentration, and Behavioural
                                Disorders
                            </h3>
                            <p className='text-gray-600'>
                                E.g. Attention deficit disorder (ADD)
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

            <p className='text-center mt-10'>
                With so many radiation sources bombarding our body at
                different frequencies all the time, it is difficult to avoid
                the toxic effects of radiation without emGuarde.
            </p>
        </section>
    );
};

export default ImpactsOfRadiation;
