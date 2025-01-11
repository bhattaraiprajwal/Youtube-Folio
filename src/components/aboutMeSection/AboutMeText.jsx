import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi! My name is Prajwal.I'm a web developer and distial visual artist.I love creating things that exist on the internet.My interest in web development started in 2020!.
        Instead of creating online Concepts Arts website,i started enjoying web development.Creating custom things for web taught me a lot about design & development!
        My main focus these days is building intersting & creative web designs.I like to code thingsfrom scratch ,and enjoy bringing ideas to life in the browser.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
