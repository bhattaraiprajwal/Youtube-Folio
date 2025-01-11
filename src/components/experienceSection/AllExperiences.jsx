import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "PULSE",
    date: "2022 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "UI/UX developer",
    company: "PULSE",
    date: "2023 - Present",
    responsibilities: [
      "UI Designer: Focuses on the visual aspects of the user interface, such as color schemes, typography, imagery, and layout.",
      "UX Designer: Focuses on the user experience, including usability,, and overall user satisfaction.",
     
    ],
  },
  {
    job: "Graphics designer",
    company: "",
    date: "2024 - Present",
    responsibilities: [
      "Creating visually appealing and effective designs for various media, such as websites, mobile apps, print materials (brochures, flyers, posters), social media graphics, and presentations.",
      
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
