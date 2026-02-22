import Link from 'next/link';
import Image from 'next/image';

const WelcomeBanner = () => {
    return (
        <section
            className='relative flex items-center overflow-hidden bg-black min-h-[85vh]'
            style={{
                backgroundImage: "url('/Hero.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <video
                loop
                autoPlay
                muted
                playsInline
                src='/Hero.mov'
                className='absolute inset-0 z-0 h-full w-full object-cover object-center'
            />

            <div className='absolute inset-0 z-10 bg-gradient-to-br from-black/85 via-black/70 to-red-950/40' />
            <div className='absolute inset-0 z-10 bg-[radial-gradient(circle_at_25%_30%,rgba(250,204,21,0.25),transparent_52%)]' />

            <div className='relative z-20 mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20'>
                <div className='grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12'>
                    <div className='max-w-2xl space-y-6'>
                        <h1 className='font-heading text-5xl leading-[1.05] font-bold text-white sm:text-6xl lg:text-7xl'>
                            A
                            <span className='mt-2 block w-fit rounded-md bg-yellow-400 px-3 py-1 text-black'>
                                Safer Home
                            </span>
                            in a Wireless World
                        </h1>

                        <p className='max-w-xl text-lg leading-relaxed text-zinc-100/90 sm:text-xl font-medium'>
                            Your phone, WiFi, appliances emit radiation 24/7.{' '}
                            <strong>emGuarde neutralizes it</strong> to protect your health.
                        </p>

                        <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                            <Link
                                href={'#buy-section'}
                                className='inline-flex items-center justify-center rounded-md bg-yellow-400 px-8 py-3 font-heading text-lg font-bold text-black transition hover:bg-yellow-300 animate-pulse'
                            >
                                Get Protected Now
                            </Link>
                            <Link
                                href={'#impacts-of-radiation'}
                                className='inline-flex items-center justify-center rounded-md border border-yellow-300/70 bg-yellow-400/20 px-8 py-3 font-heading text-lg font-semibold text-yellow-100 backdrop-blur-sm transition hover:bg-yellow-400/30'
                            >
                                Learn More
                            </Link>
                        </div>

                        <div className='mt-4 rounded-lg border border-yellow-400/50 bg-yellow-500/10 p-4'>
                            <p className='text-base text-yellow-100 font-medium'>
                                ✓ Patented technology ✓ 4-meter radius coverage ✓ Portable
                            </p>
                        </div>
                    </div>

                    <div className='mx-auto w-full max-w-xl rounded-2xl border border-yellow-300/50 bg-black/45 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-8'>
                        <Image
                            className='mx-auto h-auto w-full max-w-[430px] rounded-md brightness-140 contrast-110'
                            src={'/emGuarde-With-Box-Beside.svg'}
                            alt='emGuarde radiation harmoniser Singapore - EMF protection device'
                            width={600}
                            height={600}
                            priority
                        />
                        <p className='text-center text-lg text-yellow-300 mt-4 font-semibold'>
                            emGuarde Radiation Reducer
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeBanner;
