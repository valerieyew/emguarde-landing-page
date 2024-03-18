import Image from "next/image";
const PortableFeatureBanner = () => {
  return (
    <div className="mx-auto max-w-7xl py-10 px-5">
      <div className="grid md:grid-cols-2 pb-5 gap-10">
        <div className="flex flex-col justify-center">
          <p className="uppercase tracking-wide font-medium font-heading mb-3 text-gray-500">
            Addition Feature
          </p>
          <h3 className="text-yellow-700 lg:text-4xl text-2xl font-heading font-semibold ">
            We can plug in to portable as well
          </h3>
          <p className=" font-heading text-xl  mt-5">
            Our product seamlessly connects to a wide range of devices,
            including portables, ensuring convenience and flexibility in your
            everyday tasks.
          </p>
        </div>
        <div>
          <Image
            width={600}
            height={200}
            alt="portable"
            src={"/portable.gif"}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PortableFeatureBanner;
