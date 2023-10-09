import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative md:h-[800px] h-[80vh] flex items-center justify-center">
      {/* desktop */}
      <video
        loop
        playsInline
        muted
        autoPlay
        src="/hero.mp4"
        className="absolute w-full h-full object-cover z-0 object-center hidden md:block"
      />
      {/* mobile  */}
      <video
        playsInline
        loop
        muted
        autoPlay
        src="/hero-2.mp4"
        className="absolute w-full h-full object-cover z-0 object-center md:hidden block"
      />

      <section className="px-5 py-10 relative">
        <div className="mx-auto max-w-2xl grid gap-10 py-5">
          <Image
            className="mx-auto rounded-md"
            src={"/emGuarde-With-Box-Beside.png"}
            alt="/"
            width={600}
            height={600}
          />
          <h1 className="font-heading lg:text-5xl md:text-3xl text-2xl font-semibold text-center text-white shadow-2xl">
            Protect yourself against the{" "}
            <b className="text-yellow-500">Radiation</b> lurking all around us
          </h1>
          <div className="flex  md:flex-row flex-col items-center justify-center md:gap-5 gap-4">
            <Link
              href={"#event"}
              className="font-semibold bg-yellow-400 lg:px-10 px-20 md:py-2 py-3 rounded-md block md:text-md  w-full md:w-auto text-center"
            >
              Buy Now
            </Link>
            <Link
              href={"#buy-section"}
              className="font-semibold bg-white lg:px-10 px-20 md:py-2 py-3 rounded-md block md:text-md  w-full md:w-auto text-center"
            >
              Join Our Event
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
