import { PiAtBold, PiPhoneBold, PiWhatsappLogoBold } from 'react-icons/pi';
import { MdOutlineMail } from 'react-icons/md';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';

import Link from 'next/link';

const CtaBanner = () => {
    return (
        <section id='buy-section' className='py-20 bg-black'>
            <div className='mx-auto max-w-7xl rounded-md grid lg:grid-cols-2 gap-10 px-5'>
                <div className='md:pr-10 text-white'>
                    <h3 className='text-md mb-2  font-heading font-semibold uppercase'>
                        Contact us
                    </h3>
                    <h1 className='md:text-5xl text-3xl text-yellow-500 font-heading font-semibold'>
                        Get Your emGuarde
                    </h1>
                    <p className='   mt-5'>
                        Embrace emGuarde today, because investing in your health
                        is priceless. Join the ranks of those who have
                        discovered the secret to radiant living. Your journey to
                        vitality begins here.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-2'>
                    <Button
                        Href={
                            'https://api.whatsapp.com/send?phone=+6587517713&text=Hello,%20I%20would%20like%20to%20arrange%20for%20a%20live%20demo%20on%20emGuarde.'
                        }
                        Title={'WhatsApp Us'}
                        Icon={PiWhatsappLogoBold}
                    />

                    <Button
                        Href={'tel:+6587517713'}
                        Icon={PiPhoneBold}
                        Title={'Call Us'}
                    />

                    {/* <Button
                        Href={'mailto:info@kangenwizglobal.com'}
                        Icon={MdOutlineMail}
                        Title={'info@kangenwizglobal.com'}
                    /> */}

                    <Button
                        Href={'https://www.facebook.com/kangenwizglobal/'}
                        Icon={BiLogoFacebook}
                        Title={'Facebook Page'}
                    />

                    <Button
                        Href={'https://www.instagram.com/kangenwizglobal/'}
                        Icon={BsInstagram}
                        Title={'Instagram Page'}
                    />
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;

const Button = ({ Icon, Title, Href }) => {
    return (
        <Link
            href={Href}
            className='w-full flex gap-5 items-center p-5 bg-white font-heading text-lg font-medium rounded-lg border-2 border-yellow-300'
        >
            <Icon size={30} /> {Title}
        </Link>
    );
};
