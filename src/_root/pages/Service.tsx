const Service = () => {
  const myService = [
    "Building Frontend for website",
    "Freelancing project",
    "Available for full time job",
  ];
  return (
    <section
      id="service"
      className="h-auto flex flex-col bg-[#121212] gap-10 py-20"
    >
      <div>
        <h3 className="text-center text-3xl font-semibold">Service</h3>
        <hr className="mx-10 my-5" />
      </div>
      <div className="flex justify-evenly flex-wrap gap-10" data-aos="fade-up">
        {myService.map((i) => (
          <div className="border py-7 px-10 md:px-14 md:py-10 rounded-xl bg-yellow-600 hover:bg-yellow-700 text-black font-bold">
            <p>{i}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
