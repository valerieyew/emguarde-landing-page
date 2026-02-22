import Link from 'next/link';
import Image from 'next/image';

const riskPoints = [
    'Fatigue and brain fog',
    'Headaches and poor sleep',
    'Long-term health concerns',
    'Stress from constant radiation exposure',
    'Higher concern for children and sensitive users',
];

const solutionPoints = [
    '24/7 protection for your family',
    'Supports smoother blood flow',
    'Keeps your mind clearer and calmer',
    'Higher quality sleep at night',
    'Light and easy for travel and daily use',
];

const SolutionBanner = () => {
    return (
        <section
            id='solution'
            className='relative overflow-hidden px-5 py-20 md:py-24'
            style={{
                background: 'linear-gradient(135deg, #fff8db 0%, #fff3bf 38%, #fdf7ea 68%, #fffef9 100%)',
            }}
        >
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(217,119,6,0.16),transparent_34%)]' />
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(185,28,28,0.12),transparent_35%)]' />
            <div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.56),rgba(255,255,255,0.2))]' />

            <div className='relative mx-auto max-w-7xl'>
                <header className='mx-auto mb-12 max-w-5xl text-center'>
                    <p className='mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-amber-700 md:text-sm'>
                        The EmGuarde Response
                    </p>
                    <h2 className='font-heading text-3xl font-bold leading-tight text-slate-900 md:text-5xl'>
                        A Professional Layer of Protection
                        <span className='mt-2 block text-amber-700'>for a High-Exposure Digital Life</span>
                    </h2>
                    {/* <p className='mx-auto mt-5 max-w-4xl text-base leading-relaxed text-slate-700 md:text-xl'>
                        After understanding the health impact of constant radiation exposure, families and
                        professionals need more than a temporary fix. emGuarde is designed as a daily-use EMF
                        radiation harmoniser that supports a safer environment while your devices remain fully
                        in use.
                    </p> */}
                </header>

                <div className='grid gap-8 lg:grid-cols-[1.15fr_0.85fr]'>
                    <article className='rounded-3xl border border-amber-200 bg-white/88 p-7 shadow-[0_24px_80px_rgba(120,53,15,0.12)] backdrop-blur-sm md:p-10'>
                        <h3 className='font-heading text-2xl font-bold text-slate-900 md:text-3xl'>
                            Built for real-world radiation exposure
                        </h3>
                        <p className='mt-4 text-base leading-relaxed text-slate-700 md:text-lg'>
                            Modern homes are filled with WiFi routers, smart appliances, mobile phones, and
                            connected devices. That convenience also means continuous electromagnetic field
                            activity throughout the day and night.
                        </p>

                        <div className='mt-7 grid gap-4 md:grid-cols-2'>
                            <section className='rounded-2xl border border-red-200 bg-red-50/85 p-5'>
                                <h4 className='text-sm font-semibold uppercase tracking-wide text-red-700'>
                                    Common Concerns
                                </h4>
                                <ul className='mt-3 space-y-2 text-sm leading-relaxed text-slate-700 md:text-base'>
                                    {riskPoints.map((item) => (
                                        <li key={item} className='flex gap-2'>
                                            <span className='mt-[3px] text-red-600'>•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className='rounded-2xl border border-amber-200 bg-amber-50/90 p-5'>
                                <h4 className='text-sm font-semibold uppercase tracking-wide text-amber-800'>
                                    What emGuarde adds
                                </h4>
                                <ul className='mt-3 space-y-2 text-sm leading-relaxed text-slate-700 md:text-base'>
                                    {solutionPoints.map((item) => (
                                        <li key={item} className='flex gap-2'>
                                            <span className='mt-[3px] text-amber-700'>•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        <section className='mt-7 rounded-2xl border border-amber-300 bg-slate-900 p-6 md:p-7'>
                            <h4 className='text-xl font-bold text-white md:text-2xl'>
                                Trusted by families across Singapore and Asia
                            </h4>
                            <dl className='mt-5 grid gap-4 sm:grid-cols-3'>
                                <div className='rounded-xl border border-slate-700 bg-slate-800/85 px-4 py-3 text-center'>
                                    <dt className='text-xs uppercase tracking-[0.16em] text-slate-300'>
                                        Users
                                    </dt>
                                    <dd className='mt-1 text-2xl font-bold text-amber-300'>5000+</dd>
                                </div>
                                <div className='rounded-xl border border-slate-700 bg-slate-800/85 px-4 py-3 text-center'>
                                    <dt className='text-xs uppercase tracking-[0.16em] text-slate-300'>
                                        Satisfaction
                                    </dt>
                                    <dd className='mt-1 text-2xl font-bold text-amber-300'>99%</dd>
                                </div>
                                <div className='rounded-xl border border-slate-700 bg-slate-800/85 px-4 py-3 text-center'>
                                    <dt className='text-xs uppercase tracking-[0.16em] text-slate-300'>
                                        Coverage
                                    </dt>
                                    <dd className='mt-1 text-2xl font-bold text-amber-300'>4 Meter Radius</dd>
                                </div>
                            </dl>
                        </section>
                    </article>

                    <aside className='h-fit rounded-3xl border border-amber-200 bg-white/90 p-7 shadow-[0_24px_80px_rgba(146,64,14,0.14)] backdrop-blur-sm md:p-8'>
                        <p className='text-md font-semibold uppercase tracking-[0.2em] text-amber-700'>
                            EmGuarde Device
                        </p>
                        <div className='mt-4 rounded-2xl bg-[linear-gradient(160deg,#0f172a_0%,#111827_55%,#1f2937_100%)] p-6'>
                            <Image
                                src={'/emGuarde (Standing) Edited.png'}
                                alt='emGuarde EMF radiation harmoniser device'
                                width={252}
                                height={454}
                                className='mx-auto h-[325px] sm:h-[380px] w-[180px] sm:w-[215px]'
                                style={{
                                    filter: 'brightness(1.2) contrast(1.24) saturate(1.08) drop-shadow(0 22px 28px rgba(245,158,11,0.24))',
                                }}
                            />
                        </div>
                        <p className='mt-5 text-md leading-relaxed text-slate-700'>
                            One compact device. One simple setup. Continuous support for healthier living in
                            high-exposure spaces.
                        </p>
                        <Link
                            href={'#buy-section'}
                            className='mt-6 inline-flex w-full items-center justify-center rounded-md bg-amber-500 px-8 py-3 font-heading text-lg font-bold text-slate-950 transition hover:bg-amber-400'
                        >
                            Get emGuarde Protection
                        </Link>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default SolutionBanner;
