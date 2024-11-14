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
            Newbie Developer
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-evenly gap-10 ">
        <div className="w-full md:w-50% border-2 border-orange-500 rounded-3xl bg-[#2d2d2d] text-white py-10 px-5">
          <p className="text-md md:text-2xl font-titillium-web " data-aos="fade-in">
          I have been passionate about the field of Software Development since I began my studies 
          in Computer Science. I am skilled in building front-end interfaces and integrating APIs, 
          as well as creating basic back-end functionality to ensure websites and web applications 
          operate smoothly. I hope to have the opportunity to work with you and contribute to 
          creating an exceptional website.
          </p>
        </div>
        <div className="ml-10 w-[198px] md:w-[50%] h-auto">
          <img src={myProfileImg} className="rounded-full w-auto h-auto object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default Home;
