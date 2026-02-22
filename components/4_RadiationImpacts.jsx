import Image from 'next/image';
import Link from 'next/link';

const IMPACT_ITEMS = [
    {
        title: 'Reproductive Health',
        description:
            'Higher mobile phone use has been associated with lower sperm concentration and total sperm count in young men.',
        links: [
            { href: 'https://pubmed.ncbi.nlm.nih.gov/37921737/', label: 'Fertility and Sterility (2023)' },
        ],
    },
    {
        title: "Children's Developing Brains",
        description:
            'Some studies found more signs of hyperactivity and inattention in kids when phone use was higher during pregnancy. Other factors may also play a role.',
        links: [
            {
                href: 'https://pubmed.ncbi.nlm.nih.gov/28392066/',
                label: 'Environmental International (2017)',
            },
        ],
    },
    {
        title: 'Cancer Risk',
        description:
            'IARC classifies RF-EMF as a possible cause of cancer (Group 2B). Long-term animal studies (NTP and Ramazzini) also found more tumors in exposed groups.',
        links: [
            {
                href: 'https://www.iarc.who.int/pressrelease/iarc-classifies-radiofrequency-electromagnetic-fields-as-possibly-carcinogenic-to-humans/',
                label: 'IARC (2011)',
            },
            { href: 'https://pubmed.ncbi.nlm.nih.gov/33562898/', label: 'NTP TR-595' },
            { href: 'https://pubmed.ncbi.nlm.nih.gov/29530389/', label: 'Ramazzini (2018)' },
        ],
    },
];

const RESEARCH_LINK_CLASS = 'text-yellow-400 underline underline-offset-2 hover:text-yellow-300';

const RadiationImpactsBanner = () => {
    return (
        <section
            id='impacts-of-radiation'
            aria-labelledby='radiation-impacts-title'
            className='bg-gradient-to-b from-black via-gray-900 to-black px-5 py-16'
        >
            <div className='mx-auto max-w-7xl'>
                <header className='mx-auto max-w-4xl text-center'>
                    <p className='text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400'>
                        Evidence Snapshot
                    </p>
                    <h2
                        id='radiation-impacts-title'
                        className='mt-3 text-3xl font-heading font-semibold text-white md:text-5xl'
                    >
                        <span className='block'>Low-Level EMF Exposure,</span>
                        <span className='block'>Long Term Risks</span>
                    </h2>
                    <p className='mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg'>
                        Daily exposure is often low dose, but constant. The biggest concerns are fertility,
                        developing young brains, and adult cancer biology over time.
                    </p>
                </header>

                <div className='mt-8 rounded-2xl border border-yellow-300/50 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 p-5 text-center md:p-8'>
                    <p className='text-lg font-semibold leading-relaxed text-yellow-100 md:text-2xl'>
                        The main concern is long-term daily exposure from devices used close to the body.
                    </p>
                </div>

                <div className='mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]'>
                    <figure className='flex flex-col items-center justify-center rounded-2xl border border-white/25 bg-gradient-to-br from-zinc-900 to-black p-5 shadow-lg md:p-8'>
                        <Image
                            className='mx-auto rounded-md'
                            src={'/Rouleau Formation.svg'}
                            alt='Illustration of rouleau formation and blood cell clumping caused by EMF radiation exposure - affects microcirculation'
                            width={420}
                            height={420}
                        />
                        <p className='mt-4 text-sm text-center leading-relaxed text-gray-300'>
                            Magda Havas reported blood cell clumping (rouleaux) after wireless exposure, which
                            may reduce microcirculation.{' '}
                            <Link
                                className='text-yellow-400 underline underline-offset-2 hover:text-yellow-300'
                                href='https://pubmed.ncbi.nlm.nih.gov/24192494/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Electromagnetic Biology and Medicine (2013)
                            </Link>
                            .
                        </p>
                    </figure>

                    <article className='rounded-2xl border border-white/25 bg-gradient-to-br from-zinc-900 to-black p-6 shadow-lg md:p-8'>
                        <h3 className='font-heading text-2xl font-semibold text-white'>Why this matters</h3>

                        <ul className='mt-5 grid gap-5'>
                            {IMPACT_ITEMS.map((item) => (
                                <li key={item.title}>
                                    <h4 className='font-heading text-xl font-semibold text-yellow-300'>
                                        {item.title}
                                    </h4>
                                    <p className='mt-1 text-md leading-relaxed text-gray-300'>
                                        {item.description}{' '}
                                        {item.links.map((link, index) => (
                                            <span key={link.href}>
                                                {index > 0 ? ', ' : ''}
                                                <Link
                                                    className={RESEARCH_LINK_CLASS}
                                                    href={link.href}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    {link.label}
                                                </Link>
                                            </span>
                                        ))}
                                        .
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default RadiationImpactsBanner;
