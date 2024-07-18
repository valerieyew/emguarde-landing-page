import Image from "next/image";

const electromagneticHarmonizers = [
  {
    title: "Coverage Range",
    description: "Up to 4 meters radius / 8 meters diameter",
  },
  {
    title: "Harmonize Frequencies",
    description: "Harmonize high frequencies up to 1GHz",
  },
  {
    title: "Power Consumption",
    description: "0.5W",
  },
  {
    title: "Supports",
    description: "DC 5V, 2A - 6A power adapter",
  },
  {
    title: "Lifespan",
    description: "Minimum 5 years, 1-year warranty",
  },
];

const SpecificationBanner = () => {
  return (
    <section id="specification" className="py-16 bg-black">
      <div className="text-white mx-auto max-w-5xl px-5">
        <h1 className="text-center md:text-4xl text-3xl font-heading font-semibold">
          emGuarde Specifications
        </h1>
        {/* <p className="text-center mt-5">
          Following are the Specification of EmGuarde Product.
        </p> */}
      </div>

      <div className="grid lg:grid-cols-2 max-w-7xl mx-auto mt-10 gap-5">
        <div className="px-10">
          <ul className="text-white list-decimal ml-5 gap-2 grid">
            {electromagneticHarmonizers.map((e, i) => (
              <li className="p-2" key={i}>
                <h3 className="font-heading font-semibold text-lg">
                  {e.title}
                </h3>
                <p className="text-gray-300">{e.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center rounded-md px-5">
          <Image
            className="mx-auto rounded-md"
            src={"/emGuarde dimensions.svg"}
            alt="/Dimensions of the emGuarde device"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecificationBanner;
