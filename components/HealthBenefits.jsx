const HealthBenefits = () => {
  return (
    <section
      id="health-benefits"
      className=" bg-cover bg-center md:bg-fixed"
      style={{
        backgroundImage: "url('/pexels-vecislavas-popa-1571459.jpg')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="bg-black/20 py-10">
        <div className="mx-auto max-w-5xl mb-10 px-2 text-white drop-shadow-lg">
          <h3 className="text-center lg:text-3xl text-2xl font-heading font-semibold">
            Health benefits EmGuarde can give you.
          </h3>
          <p className="text-center   mt-5">
            With emGuarde, the benefits are not just subtle, they&apos;re
            transformative. Here&apos;s what you can look forward to
          </p>
        </div>

        <div className=" mx-auto max-w-7xl mt-5">
          <ul className="grid gap-1 p-1">
            <li className="p-10 bg-yellow-50">
              <p className="font-semibold text-gray-500">01</p>
              <h3 className="font-heading font-semibold text-lg">
                Less Headache Episodes
              </h3>
              <p className="  text-gray-600">
                Bid farewell to those persistent headaches in your daily life.
              </p>
            </li>
            <li className="p-10 bg-yellow-50">
              <p className="font-semibold text-gray-500">02</p>
              <h3 className="font-heading font-semibold text-lg">
                Stronger Blood Circulation
              </h3>
              <p className="  text-gray-600">
                Feel the difference as your body experiences improved
                circulation and more energy.
              </p>
            </li>
            <li className="p-10 bg-yellow-50">
              <p className="font-semibold text-gray-500">03</p>
              <h3 className="font-heading font-semibold text-lg">
                Stronger Focus and Less Fatigue
              </h3>
              <p className="  text-gray-600">
                Prevent disturbances to your body functions by the high amount
                of radiation surrounding us all the time.
              </p>
            </li>
            <li className="p-10 bg-yellow-50">
              <p className="font-semibold text-gray-500">04</p>
              <h3 className="font-heading font-semibold text-lg">
                Reduced Chance of Cancer
              </h3>
              <p className="  text-gray-600">
                Protect yourself from radiation in your home, car, and office
                with our portable emGuarde.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;
