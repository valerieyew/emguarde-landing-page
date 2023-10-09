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

const Specification = () => {
  return (
    <section id="specification" className="py-10 bg-gray-50">
      <div className="mx-auto max-w-5xl px-2">
        <h3 className="text-center lg:text-3xl text-2xl font-heading font-semibold">
          Specification
        </h3>
        <p className="text-center   mt-5">
          Following are the Specification of EmGuarde Product.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 max-w-7xl mx-auto mt-10 gap-5">
        <div className="px-10">
          <ul className=" list-decimal ml-5 gap-2 grid">
            {electromagneticHarmonizers.map((e, i) => (
              <li className="p-2" key={i}>
                <h3 className="font-heading font-semibold text-lg">
                  {e.title}
                </h3>
                <p className="  text-gray-600">{e.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center bg-gray-100 rounded-md px-5">
          <Image
            className="mx-auto rounded-md"
            src={"/emguarde-with-dimentions.png"}
            alt="/"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Specification;
