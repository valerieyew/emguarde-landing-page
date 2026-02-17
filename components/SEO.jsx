import Head from 'next/head';

const SEO = ({
    title = 'EmGuarde Singapore | EMF Radiation Reducer',
    description = 'EmGuarde Radiation Harmoniser shields you from Radiofrequency (RF) radiation from our smartphones and other electronic devices. It improves microcirculatory blood flow, which are often negatively affected by RF radiation.',
    canonicalUrl = 'https://emguardesingapore.com/',
    ogImage = '/emGuarde-With-Box-Beside.svg',
    jsonLd,
}) => {
    return (
        <Head>
            <meta charSet='UTF-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <title>{title}</title>

            <meta name='description' content={description} />
            <meta name='robots' content='index,follow,max-image-preview:large' />
            <meta name='theme-color' content='#020617' />

            <meta property='og:type' content='website' />
            <meta property='og:site_name' content='EmGuarde Singapore' />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:url' content={canonicalUrl} />
            <meta property='og:image' content={ogImage} />

            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:image' content={ogImage} />

            <link rel='canonical' href={canonicalUrl} />
            <link rel='icon' href='KWG%20Page%20Icon%20(jagged%20edges).png' />

            {jsonLd ? (
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}
                />
            ) : null}
        </Head>
    );
};

export default SEO;
