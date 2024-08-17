import { Fragment } from "react";
import project1IMG from "../../assets/project1IMG.png";
import project2IMG from "../../assets/project2IMG.png";
import project3IMG from "../../assets/project3IMG.png";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Projects = () => {
  const myProject = [
    {
      title: "E-Commerce Store",
      description:
        "This is the project I built myself using the technologies i have learned.This project have many feature that \
        is the benefits for admin, seller and customer. ",
      language:
        "React, TypeScript, React Router Dom, Zustand, React Query, Axios, Supabase",
      link: "https://sophengstore.vercel.app/",
      features:
        "For Admin, they can perform CRUD operation and control their stock \
        See the Unit price and total of their stuff that are in the stock. \
        For Customer, they can browse the stuff generally or \
        filtering the category that they are looking for.\
        They can add product to shopping cart and wish-list. They can \
        access to their shopping cart and print out the invoice after they finish shopping.",
      img: project3IMG,
    },
    {
      title: "GameHub",
      description:
        "This project was not build by myself, I built from what I've learned from a turtorial. Anyway I am confidence \
      to rebuild this project again",
      language:
        "React, TypeScript, Chakra-UI, React Query, React Router Dom, Zustand, Rawg.io-API",
      features:
        "User can Browse for games library randomly. They also can browse by filtering include filter by search, by category, \
       by, by genre, by release date by popularity and the also able to sort the list of the game. They can see the detail of the game \
       like how was it, how other player rate the game etc. The data of the game is fetch from Rawgio-API",
      link: "https://game-hub-theta-nine.vercel.app/",
      img: project1IMG,
    },
    {
      title: "SnapGram",
      description:
        "This project was not build by myself, I built from what I've learned from a turtorial. Anyway My confidence \
      is at 80% to rebuild this project again",
      language:
        "React, TypeScript, React Context-API, Shadcn-ui + TailwindCSS ",
      link: "Not Available",
      features:
        "This project integrated with authentication and authorization. User able to login or sign up for an account,\
      User can post what is up to their mind, User can scroll the feed to see other user's post. User can like or save post.",
      img: project2IMG,
    },
  ];
  return (
    <section
      id="projects"
      className="projects-section bg-[#121222] py-20 h-auto"
    >
      <div>
        <h3 className="text-center text-3xl font-semibold">My Projects</h3>
        <hr className="mx-10 my-5" />
      </div>
      <div className="w-[70%]  mx-auto h-auto flex  items-center flex-col justify-evenly gap-5 relative">
        {myProject.map((i, index) => (
          <Fragment key={i.title}>
            <div data-aos={index==0&&"fade-left"||index==1&&"fade-right"||index==2&&"fade-left"} className="w-full md:w-[699px] lg:w-full p-10 bg-[#2f4d31] rounded-lg flex flex-col md:flex-row items-center justify-evenly gap-20 mg:gap-0">
              <div className="flex-1 w-full h-auto md:w-80 md:h-52 md:pl-20">
                <h3 className="pb-2 rounded text-center md:text-start font-semibold text-green-600">
                  {i.title}
                </h3>

                <img src={i.img} className="w-80 h-52 object-cover" />
              </div>
              <Swiper
              modules={[Pagination]}
              pagination
              
                className="mySwiper flex-1 w-full bg-[#3a5c3d] p-2 md:p-7 rounded-lg">
                <SwiperSlide>
                <div className=" flex-1 bg-[#3a5c3d] p-2 md:p-7 rounded-lg ">
                <p className="text-md md:text-xl">{i.description}</p>
                <p>
                  <span className="text-yellow-500 underline">Language: </span>
                  {i.language}
                </p>
                <span>
                  Link:
                  <a
                    href={i.link}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    {" "}
                    {i.link}
                  </a>
                </span>
                <p className="text-end text-sm font-light">Swiper left {">>"}</p>
              </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-[#3a5c3d] p-2 md:p-7 rounded-lg ">
                    <p className="text-yellow-500">Feature</p>
                    <p className="overflow-x-auto scrollbar-thin">{i.features}</p>
                  </div>
                </SwiperSlide>
              </Swiper>
              
              
            </div>

            {/* Hover feature */}
            
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
