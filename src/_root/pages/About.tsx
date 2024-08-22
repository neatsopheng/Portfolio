
const About = () => {
  const ProgrammingLanguages = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Basic NodeJS',
    'C/C++', 'Basic Java','Basic C#', 'Basic SQL & No SQL',
  ]
  const Technologies = ['TailwindCSS','Bootstrap', 'ReactJs','Basic MERN stack', 'Basic VueJS', 'GitHub', 'npm', 'Vitest'];
  const mostExperienced = ['ReactJS', 'TypeScript', 'JavaScript' , 'TailwindCSS', 'npm', 'GitHub'];
  return (
    <section id="about" className="about-section bg-[#121222] h-auto px-5 py-20 ">
      
      <div>
        <h3 className="text-center text-3xl font-semibold">About Me</h3>
        <hr className="mx-10 my-5"/>
      </div>
        <ul className="leading-8 flex-1 list-disc px-5 " data-aos="fade-in">
          <li>I am a college student majored in Computer Science at Royal University of Phnom Penh(RUPP)</li>
          <li>I started since 2022 March and I am currently a 4th years student</li>
          <li>My Location located in Phnom Penh, feel free to contact me any time</li>
          <li>I am passionate with trending Technologies, improving skill, and also a fast learning developer</li>
          <li>My short-term goal is to gain knowledge from a real world project i had never been working with , and my long-term goal is to be a quality developer at both frontend and backend</li>
        </ul>
      <div data-aos="fade-up">
        <h3 className="text-xl my-5 md:my-10 font-bold italic ">Programming Language learned</h3>
        <ul className="flex gap-5 flex-wrap justify-center">
          {ProgrammingLanguages.map((item) =>
            <li key={item} className="border py-3 w-52 h-auto text-center rounded hover:bg-gray-300 hover:text-slate-900 transition duration-200">{item}</li>
          )}
        </ul>
        
      </div>
      <div data-aos="fade-up">
        <h3 className="text-xl my-5 md:my-10 font-bold italic ">Frameworks and Libraries</h3>
        <ul className="flex gap-5 flex-wrap justify-center">
        {Technologies.map((item) =>
            <li key={item} className="border py-3 w-44 text-center rounded hover:bg-gray-300 hover:text-slate-900 transition duration-200">{item}</li>
          )}
        </ul>
      </div>
      <div data-aos="fade-up">
        <h3 className="text-xl my-5 md:my-10 font-bold italic ">Most Experienced with</h3>
        <ul className="flex gap-5 flex-wrap justify-center">
        {mostExperienced.map((item) =>
            <li key={item} className="border px-8 py-3 w-44 text-center rounded hover:bg-gray-300 hover:text-slate-900 transition duration-200">{item}</li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default About