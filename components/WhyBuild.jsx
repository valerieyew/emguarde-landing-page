import Image from "next/image";

const list = [
  { name: "car", src: "/car.jpg" },
  { name: "mobile", src: "/mobile.jpg" },
  { name: "wireless controller", src: "/wirecontroller.jpg" },
  { name: "oven", src: "/oven.png" },
  { name: "fan", src: "/fan.jpg" },
  { name: "massage chair", src: "/chair.jpg" },
];

const Element = ({ name, src }) => (
  <>
    <div className="">
      <div className="relative aspect-h-2 aspect-w-4 ">
        <Image
          alt="/"
          fill
          src={src}
          className="rounded-sm w-full object-cover object-center "
        />
      </div>
      <p className="capitalize text-lg text-center text-white py-2 font-heading ">
        {name}
      </p>
    </div>
  </>
);

const WhyBuilt = () => {
  return (
    <section className="py-10 bg-black ">
      <div className="text-white mx-auto max-w-5xl mb-10 px-2">
        <h3 className="text-center md:text-3xl text-2xl text font-heading font-semibold">
          Biggest Radiation Sources Around Us
        </h3>
        <p className="text-center mt-5">
          Based on clinical research by a world-renowned professor on PubMed,
          Dr. Magda Havas, Ph.D., electromagnetic radiation causes Rouleau
          formation (unhealthy blood).
        </p>
      </div>

      <div className=" mx-auto max-w-7xl mt-5">
        <div className="grid grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mt-10 gap-5 px-5">
          {list.map((e) => (
            <Element {...e} key={e.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuilt;
