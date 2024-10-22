import Link from "next/link";
import Image from "next/image";

const WelcomeBanner = () => {
  return (
    <div className='relative md:h-[800px] h-[80vh] flex items-center justify-center bg-cover bg-center'
            style={{
              backgroundImage:
                  "url('/Hero.svg')",
              backgroundSize: '100% 100%',
          }}
        >
      {/* desktop */}
      <video
        // playsInline
        loop
        autoPlay
        muted
        src="/Hero.mov"
        controls = ''
        className="absolute w-full h-full object-cover z-0 object-center block"
      />
      {/* mobile  */}
      {/* <video
        // playsInline
        loop
        autoPlay
        muted
        src="/hero-2.mp4"
        controls = ''
        className="absolute w-full h-full object-cover z-0 object-center md:hidden block"
      /> */}

      <section className="px-5 py-12 relative">
        <div className="mx-auto max-w-2xl grid gap-10 py-5">
          <Image
            className="mx-auto rounded-md"
            src={"/emGuarde-With-Box-Beside.svg"}
            alt="/"
            width={600}
            height={600}
          />
          <div className="bg-yellow-600/60 rounded-md pt-2 pb-3 px-1.5">
            <h1 className="font-heading lg:text-4xl md:text-3xl text-2xl font-semibold text-center text-white">
              Protect yourself against the{" "}
              <b className="text-yellow-300 lg:text-5xl md:text-4xl text-3xl"> EMF Radiation</b> lurking all around us
            </h1>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-center md:gap-6 gap-5">
            <Link
              href={"#buy-section"}
              className="font-semibold bg-yellow-400 lg:px-10 px-20 md:py-2 py-3 rounded-md block md:text-md w-80 md:w-auto text-center"
            >
              Buy Now
            </Link>
            {/* <Link
              href={"#events"}
              className="font-semibold bg-white lg:px-10 px-20 md:py-2 py-3 rounded-md block md:text-md w-80 md:w-auto text-center"
            >
              Join Our Event
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomeBanner;
