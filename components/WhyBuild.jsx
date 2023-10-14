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
        <div className=''>
            <div className='relative aspect-h-2 aspect-w-4 '>
                <Image
                    alt='/'
                    fill
                    src={src}
                    className='rounded-sm w-full object-cover object-center '
                />
            </div>
            <p className='capitalize text-lg text-center text-white py-2 font-heading '>
                {name}
            </p>
        </div>
    </>
);

const WhyBuilt = () => {
    return (
        <section className='py-20 px-5 bg-black'>
            <div className='text-white mx-auto max-w-8xl mb-10'>
                <h1 className='text-center md:text-4xl text-3xl text font-heading font-semibold'>
                    emGuarde Neutralises EMF and RF Radiation Emitted By Your
                    Devices
                </h1>
            </div>

            <div className='text-white mx-auto max-w-5xl'>
                <p className='text-center mt-5'>
                    Any item that runs on electricity produces{" "}
                    <span className='text-yellow-500'>
                        Electromagnetic Fields (EMF) radiation
                    </span>
                    .
                </p>
                <p className='text-center mt-5'>
                    Some devices, especially wireless ones such as mobile
                    phones, earbuds and TV controller, produce high amounts of{" "}
                    <span className='text-yellow-500'>
                        Radiofrequency (RF) Radiation
                    </span>{" "}
                    as well.
                </p>
            </div>

            <div className='mx-auto max-w-7xl'>
                <div className='grid grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mt-8 gap-5 px-4'>
                    {list.map((e) => (
                        <Element {...e} key={e.name} />
                    ))}
                </div>
            </div>

            <div className='text-white mx-auto max-w-8xl px-2'>
                <p className='text-center text-yellow-500 text-2xl mt-10'>
                    <i>
                        Some scientists have estimated that we are exposed daily
                        to{" "}
                        <b className='text-3xl'>
                            100 million times more EMF radiation
                        </b>{" "}
                        that our grandparents were.
                    </i>
                </p>
            </div>

            <div className='text-white mx-auto max-w-5xl mt-10'>
                <p>
                    <i>Note:</i>
                </p>
                <p className='mt-2'>
                    The above things are some of the{" "}
                    <span className='text-yellow-500'>
                        highest EMF and RF radiation emitters
                    </span>{" "}
                    which we may use for long durations.
                </p>
                <p className='mt-2'>
                    The power densities of their emitted radiation are around
                    1000 - 3000 µW/cm² (microwatts), which are in the{" "}
                    <b className='text-orange-500'>orange</b> and{" "}
                    <b className='text-red-500'>red</b> zones based on{" "}
                    <span className='text-yellow-500'>
                        FCC exposure safety limit
                    </span>
                    .
                </p>
            </div>
        </section>
    );
};

export default WhyBuilt;
