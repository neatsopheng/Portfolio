import myProfileImg from "../../assets/9-min.jpg";

const Home = () => {
  return (
    <section id="home" className="h-screen  px-10 pt-20 bg-black ">
      <div className="mb-10">
        {/* <h3 className="text-center folint-fraunces font-bold text-lg md:text-4xl transition duration-500 text-slate-400 animate-pulse z-[-1]">
          Greeting! Welcome to My Profile
        </h3> */}
        <div className="font-serif">
          <h3 className="text-2xl  whitespace-nowrap  md:text-4xl lg:text-5xl font-bold overflow-hidden">
            Hi, I'm <span className="text-orange-500">Sopheng</span>
          </h3>
          <p className="text-lg font-medium md:text-3xl lg:text-4xl animate-bounce">
            I build <span className="italic text-orange-200">frontend</span> for websites
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-evenly gap-10 ">
        <div className="w-full md:w-50% border-2 border-orange-500 rounded-3xl bg-[#2d2d2d] text-white py-10 px-5">
          <p className="text-md md:text-2xl font-titillium-web ">
            I am passionate in Web Development field since i started my major in
            Computer Science. I am able to build front end with integrated
            function and able to work with API and more. I hope for having a
            chance to work with you and provide you a good website.
          </p>
        </div>
        <div className="ml-10 w-[198px] md:w-[50%] h-auto">
          <img src={myProfileImg} className="rounded-full w-auto h-auto object-cover"/>
        </div>
      </div>
    </section>
    // <section id="home" className="h-screen flex flex-col mt-16 md:mt-24">
    //   <h2
    //     id="welcome"
    //     className=" text-center font-fraunces font-bold text-2xl md:text-4xl transition duration-500 text-slate-400 animate-pulse z-[-1]"
    //   >
    //     Welcome to my Profile
    //   </h2>
    //   <div className="home-section w-full  p-5 md:p-16 lg:px-32 lg:py-24 md:flex md:items-center md:justify-center ">
    //     <div className="home-left md:flex-1 md:flex md:flex-col md:justify-center gap-10">
    //       <div className="main-heading">
    //         <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
    //           Hi, I'm Sopheng
    //         </h1>
    //         <h3 className="text-lg font-medium md:text-3xl lg:text-4xl">
    //           Frontend Developer
    //         </h3>
    //       </div>
    //       <div className="hidden md:flex md:flex-1 border-2 rounded-3xl bg-slate-700 py-10 px-10 ">
    //         <p className="text-2xl font-extralight">
    //           I am passionate in Web Development field since i started my major
    //           in Computer Science. I am able to build front end with integrated
    //           function and able to work with API and more. I hope for having a
    //           chance to work with you
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex flex-1 flex-col gap-10 items-center justify-between pt-10 md:flex">
    //       <div className="flex flex-1 justify-end w-80 h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem]   ">
    //         <img
    //           src="src\assets\9-min.PNG"
    //           alt="pfp"
    //           className="w-80 h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem]  object-cover    animate-none"
    //         />
    //       </div>
    //       <div className="flex-1 md:hidden border-none rounded-3xl bg-slate-700 py-10 px-10">
    //         {/* <p className="block font-titillium-web ">
    //         I am passionate in Web Development field since i started my major in Computer
    //           Science. I am able to build front end with integrated function and able to work
    //           with API and more. I hope for having a chance to work with you
    //         </p> */}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Home;
