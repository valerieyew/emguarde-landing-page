import Link from 'next/link';
import Image from 'next/image';

const WelcomeBanner = () => {
    return (
        <section
            className='relative flex min-h-[82vh] items-center overflow-hidden bg-black md:min-h-[860px]'
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

            <div className='absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-black/60 to-amber-900/50' />
            <div className='absolute inset-0 z-10 bg-[radial-gradient(circle_at_25%_30%,rgba(250,204,21,0.22),transparent_52%)]' />

            <div className='relative z-20 mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20'>
                <div className='grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12'>
                    <div className='max-w-2xl space-y-6'>
                        <p className='inline-flex rounded-full border border-yellow-300/60 bg-yellow-400/20 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-yellow-100 uppercase'>
                            EMF protection, simplified
                        </p>

                        <h1 className='font-heading text-4xl leading-[1.05] font-semibold text-white sm:text-5xl lg:text-6xl'>
                            Protect your home from
                            <span className='mt-2 block w-fit rounded-md bg-yellow-400 px-3 py-1 text-black'>
                                hidden EMF radiation
                            </span>
                        </h1>

                        <p className='max-w-xl text-base leading-relaxed text-zinc-100/90 sm:text-lg'>
                            emGuarde adds a dependable layer of defense where you live and rest, so your
                            family can feel safer in a world filled with invisible radiation exposure.
                        </p>

                        <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                            <Link
                                href={'#buy-section'}
                                className='inline-flex items-center justify-center rounded-md bg-yellow-400 px-8 py-3 font-heading text-base font-semibold text-black transition hover:bg-yellow-300'
                            >
                                Secure Yours Today
                            </Link>
                            <Link
                                href={'#impacts-of-radiation'}
                                className='inline-flex items-center justify-center rounded-md border border-white/70 bg-white/10 px-8 py-3 font-heading text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20'
                            >
                                Why EMF Matters
                            </Link>
                        </div>

                        {/* <div className='flex flex-wrap items-center gap-3 pt-1 text-sm text-zinc-100 md:hidden'>
                            <span className='rounded-full border border-white/25 bg-black/20 px-3 py-1'>
                                Non-invasive
                            </span>
                            <span className='rounded-full border border-white/25 bg-black/20 px-3 py-1'>
                                Easy to install
                            </span>
                            <span className='rounded-full border border-white/25 bg-black/20 px-3 py-1'>
                                Family-first wellness
                            </span>
                        </div> */}
                    </div>

                    <div className='mx-auto w-full max-w-xl rounded-2xl border border-yellow-200/40 bg-black/45 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-8'>
                        <Image
                            className='mx-auto h-auto w-full max-w-[430px] rounded-md brightness-140 contrast-110'
                            src={'/emGuarde-With-Box-Beside.svg'}
                            alt='emGuarde product package and unit'
                            width={600}
                            height={600}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeBanner;
