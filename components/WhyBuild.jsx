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
        <section className='py-14 bg-black '>
            <div className='text-white mx-auto max-w-5xl mb-10 px-2'>
                <h3 className='text-center md:text-3xl text-2xl text font-heading font-semibold'>
                    emGuarde Neutralises the EMF and RF Radiation Emitted By
                    Your Devices
                </h3>
                <p className='text-center mt-5'>
                    Any item that runs on electricity produces Electromagnetic
                    Fields (EMF) radiation. Some devices, especially wireless
                    ones such as mobile phones, earbuds and TV controller,
                    produce high amounts of Radiofrequency (RF) Radiation as
                    well.
                </p>
                <p className='text-center text-3xl'>
                    Some scientists have estimated that we are exposed daily to
                    100 million times more EMF radiation that our grandparents
                    were.
                </p>
            </div>

            <div className='mx-auto max-w-7xl mt-5'>
                <div className='grid grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mt-10 gap-5 px-4'>
                    {list.map((e) => (
                        <Element {...e} key={e.name} />
                    ))}
                </div>
            </div>

            <div className='text-white mx-auto max-w-5xl px-2'>
                <p className='mt-6'>
                    <i>Note:</i>
                </p>
                <p className='mt-2'>
                    <i>
                        The above things are some of the high EMF and RF
                        radiation emitters which we may use for long durations.
                    </i>
                </p>
                <p className='mt-2'>
                    <i>
                        The power densities of their emitted radiation are
                        around 1000 - 3000 µW/cm² (microwatts), which are in the
                        orange and red zones based on FCC exposure safety limit.
                    </i>
                </p>
            </div>
        </section>
    );
};

export default WhyBuilt;
