import Image from 'next/image'

const list = [
    { name: 'car', src: '/car.svg' },
    { name: 'mobile', src: '/mobile.svg' },
    { name: 'wireless controller', src: '/wirecontroller.svg' },
    { name: 'oven', src: '/oven.svg' },
    { name: 'fan', src: '/fan.svg' },
    { name: 'massage chair', src: '/chair.svg' },
]

const Element = ({ name, src }) => (
    <div className='group rounded-2xl border border-amber-200/20 bg-white/[0.04] p-4 shadow-[0_8px_28px_-20px_rgba(251,191,36,0.95)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/60 hover:bg-white/[0.08]'>
        <div className='relative aspect-h-2 aspect-w-4 overflow-hidden rounded-xl bg-white/5'>
            <Image
                alt={name}
                fill
                src={src}
                className='w-full object-contain object-center p-3 transition-transform duration-300 group-hover:scale-105'
            />
        </div>
        <p className='pt-3 text-center text-base font-medium capitalize text-white md:text-lg'>
            {name}
        </p>
    </div>
)

const WhyBuilt = () => {
    return (
        <section className='relative overflow-hidden bg-[#060606] px-5 py-20'>
            <div className='pointer-events-none absolute inset-0'>
                <div className='absolute -left-24 top-24 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl' />
                <div className='absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl' />
            </div>

            <div className='relative mx-auto max-w-6xl'>
                <div className='mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.09] via-white/[0.04] to-transparent px-6 py-8 text-white md:px-10 md:py-10'>
                    <p className='text-center text-xs font-semibold uppercase tracking-[0.28em] text-amber-300'>
                        Daily Exposure
                    </p>
                    <h1 className='mt-3 text-center text-3xl font-semibold leading-tight md:text-5xl'>
                        emGuarde neutralises EMF and RF radiation emitted by
                        your devices
                    </h1>
                    <p className='mx-auto mt-6 max-w-3xl text-center text-base text-white/85 md:text-lg'>
                        Every item running on electricity produces{' '}
                        <span className='font-semibold text-amber-300'>
                            electromagnetic field (EMF) radiation
                        </span>
                        . Wireless devices like mobile phones, earbuds, and TV
                        remotes can emit high levels of{' '}
                        <span className='font-semibold text-amber-300'>
                            radiofrequency (RF) radiation
                        </span>{' '}
                        as well.
                    </p>

                    <div className='mx-auto mt-8 w-fit rounded-2xl border border-amber-300/35 bg-gradient-to-r from-amber-300/15 to-orange-500/10 px-5 py-4 text-center'>
                        <p className='text-sm italic text-amber-100 md:text-base'>
                            Some scientists estimate we are exposed daily to
                        </p>
                        <p className='mt-1 text-2xl font-bold leading-tight text-amber-300 md:text-4xl'>
                            100 million times more EMF radiation
                        </p>
                        <p className='mt-1 text-sm italic text-amber-100 md:text-base'>
                            than our grandparents were.
                        </p>
                    </div>
                </div>

                <div className='mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:mt-12 md:grid-cols-3 md:gap-5'>
                    {list.map((e) => (
                        <Element {...e} key={e.name} />
                    ))}
                </div>

                <div className='mx-auto mt-12 max-w-5xl rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6 text-white md:px-8'>
                    <p className='text-sm font-semibold uppercase tracking-[0.2em] text-amber-300'>
                        Note
                    </p>
                    <p className='mt-3 text-sm text-white/85 md:text-base'>
                        The devices above are among the{' '}
                        <span className='font-semibold text-amber-300'>
                            highest EMF and RF radiation emitters
                        </span>{' '}
                        that many people use for long durations.
                    </p>
                    <p className='mt-3 text-sm text-white/85 md:text-base'>
                        Their radiation power densities are around 1000-3000
                        uW/cm2 (microwatts), placing them in the{' '}
                        <b className='text-orange-400'>orange</b> and{' '}
                        <b className='text-red-400'>red</b> zones based on FCC
                        exposure safety limits.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhyBuilt
