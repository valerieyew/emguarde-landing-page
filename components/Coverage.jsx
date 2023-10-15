import Image from 'next/image';
const Coverage = () => {
    return (
        <div className='mx-auto max-w-7xl py-10'>
            <div className='grid md:grid-cols-2 p-5  gap-10'>
                <div>
                    <Image
                        width={400}
                        height={200}
                        alt='emGuarde Coverage Dimensions'
                        src={'/emGuarde Coverage Dimensions.png'}
                        className='rounded-lg mx-auto'
                    />
                </div>
                <div className='flex flex-col justify-center'>
                    <h3 className='text-yellow-700 lg:text-4xl text-2xl font-heading font-semibold '>
                        8 metres of coverage
                    </h3>
                    <p className=' font-heading text-xl mt-5'>
                        All electronic devices and appliances within 4 metres
                        radius* from emGuarde will have their radiation
                        neutralised.
                    </p>
                    <p className=' font-heading text-xl mt-5'>
                        * Actual distance might be affected by furniture
                        finishing (i.e. aluminium and mirror glass).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Coverage;
