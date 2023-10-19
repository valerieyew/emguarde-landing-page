import Link from 'next/link';
import { PiWhatsappLogoBold } from 'react-icons/pi';

const JoinOurEvent = () => {
    return (
        <section id='events' className='pt-20 pb-16 bg-[#272829]'>
            <div className='text-white mx-auto max-w-7xl  px-2 font-heading grid gap-1 '>
                <p className='uppercase tracking-wider'>Event details</p>
                <h1 className='md:text-4xl text-3xl font-semibold py-5 text-yellow-500 border-l pl-5 bg-white/10 '>
                    Join Our Event on the 28th of October!
                </h1>
                <p className='md:text-lg px-2 mt-2'>
                    We will be sharing everything you need to know about
                    emGuarde, the best environment harmoniser in the world.
                </p>
                <p className='md:text-lg px-2'>
                    There will be a presentation on everything about emGuarde,
                    as well as a live demonstration of how effective it is in
                    eliminating the radiation lurking all around us.
                </p>
                <p className='md:text-lg px-2 mt-4 text-center'>
                    <b>Time: 11am to 3pm</b>
                </p>
                <p className='md:text-lg px-2 text-center'>
                    <b>Venue: Peninsula Plaza</b>
                </p>
                <p className='md:text-lg px-2 text-center'>
                    Food and drinks will be provided!
                </p>
                
                <Link
                    href={
                        'https://api.whatsapp.com/send?phone=+6587517713&text=Hello,%20I%20would%20like%20to%20register%20for%20the%20emGuarde%20event%20on%2020th%20Oct.'
                    }
                    className='text-center text-black flex gap-5 font-semibold bg-white mt-3 mx-auto px-7 py-3 rounded-md text-lg w-72'
                >
                    <PiWhatsappLogoBold size={30} /> Book Your Slot Here
                </Link>

                <p className='md:text-lg mt-2 px-2 text-center'>
                    More details will be provided after registration.
                </p>
            </div>
        </section>
    );
};

export default JoinOurEvent;
