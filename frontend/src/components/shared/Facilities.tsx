"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChalkboardTeacher, FaLaptopCode, FaMusic, FaArtstation, FaPaintBrush, FaRunning, FaProjectDiagram, FaBuilding, FaRobot } from 'react-icons/fa';
import { FaFootball } from "react-icons/fa6";
import { BANNER } from "../../../public";

export default function SchoolInfrastructure() {
  const facilities = [
    {
      imageSrc: "https://drive.google.com/uc?export=download&id=1pzG2yORjcoMZQBq7yjFD8rXycIyYsQNK",
      imageAlt: "classroom",
      title: "Classroom",
      icon: <FaChalkboardTeacher className="text-4xl mb-4 text-blue-600" />,
      message:
        "Our colourful and spacious classrooms are a key part of every student's life at KC Global School as they help shape our young minds to think outside the box and grow. The classrooms of KCGS are designed to provide a ventilated and interactive atmosphere that attracts students every day like a magnet. With ergonomic furniture, ample natural light, and modern learning aids, these spaces foster creativity, collaboration, and critical thinking. The walls are adorned with inspiring quotes and student artwork, creating a stimulating environment that encourages curiosity and academic excellence.",
      reverse: false,
    },
    {
      imageSrc: "https://drive.google.com/uc?export=download&id=1YKake2JEi6164Ks-ZgHfM3ckFWhIQSJy",
      imageAlt: "computer lab",
      title: "Computer Lab",
      icon: <FaLaptopCode className="text-4xl mb-4 text-green-600" />,
      message:
        "In KC Global School, we have a state-of-the-art computer lab that plays an enabling role in harnessing the use of technology to improve learning outcomes for students. Equipped with the latest hardware and software, our lab provides hands-on experience in programming, digital design, and multimedia production. Students engage in interactive coding sessions, 3D modeling workshops, and robotics projects, preparing them for the digital age. The lab also facilitates online research, virtual collaborations, and digital literacy programs, ensuring our students are well-versed in essential 21st-century skills.",
      reverse: true,
    },
    {
      imageSrc: "https://drive.google.com/uc?export=download&id=18nRStxXqIpPVxjbqfeW5GCrYGPQfJArS",
      imageAlt: "Musicroom",
      title: "Music Room",
      icon: <FaMusic className="text-4xl mb-4 text-purple-600" />,
      message:
        "We have a specially designed Music room where students are exposed to a wide range of music from different cultures and genres. Our expert teachers excel at spotting talent and grooming children accordingly. Students learn not only vocal music but also how to play a variety of instruments catering to both Indian classical and Western music. The room is equipped with high-quality acoustics, a diverse collection of instruments, and recording facilities. Regular concerts, workshops with visiting musicians, and opportunities to compose original pieces make our music program a harmonious blend of tradition and innovation.",
      reverse: false,
    },
    {
      imageSrc: "https://drive.google.com/uc?export=download&id=18oePg4kNdjtD1NAamHJAiSShoG6Df_eb",
      imageAlt: "Danceroom",
      title: "Dance Room",
      icon: <FaArtstation className="text-4xl mb-4 text-pink-600" />,
      message:
        "KC Global School's dance room is a spacious, well-ventilated studio designed to inspire creativity and movement. Equipped with a state-of-the-art sound system, it provides the perfect environment for students to explore different dance forms and enjoy. The studio features sprung floors for safety, full-length mirrors for technique refinement, and ballet barres for warm-ups. Our diverse dance curriculum includes classical, contemporary, and cultural dance styles, fostering physical fitness, self-expression, and cultural appreciation. Regular dance recitals and inter-school competitions showcase our students' talents and boost their confidence.",
      reverse: true,
    },
    {
      imageSrc: "https://drive.google.com/uc?export=download&id=1WVSm0IlwsWsnNwC1PyUuM_CT-PZ52RTd",
      imageAlt: "Playstation",
      title: "Play Station",
      icon: <FaFootball className="text-4xl mb-4 text-teal-600" />,
      message:
        "Our play activities promote learning by engaging students in interactive, hands-on experiences that make concepts fun and memorable. Through structured play, students develop critical thinking, problem-solving, and social skills in a dynamic, supportive environment. These activities encourage creativity and collaboration, allowing students to explore ideas and work together while learning in an enjoyable, stress-free way",
      reverse: false,
    },
    {
      imageSrc: "https://drive.google.com/uc?export=download&id=18l39iTY23upmFW3iM9Afd9v-7CUXpMRA",
      imageAlt: "Artroom",
      title: "Art Room",
      icon: <FaPaintBrush className="text-4xl mb-4 text-yellow-600" />,
      message:
        "KC Global School's art room is a bright, airy space designed to inspire creativity. The room is well-lit, with ample space for students to work comfortably. It is envisioned as a place where imagination can flourish and artistic talents can be nurtured. Equipped with easels, pottery wheels, and a variety of art supplies, the room caters to various artistic mediums. Students explore painting, sculpture, printmaking, and digital art under the guidance of experienced art educators. Regular art exhibitions, visiting artist workshops, and collaborative mural projects enhance the artistic journey of our students, encouraging self-expression and visual literacy.",
      reverse: true,
    },
    {
      imageSrc: "https://drive.google.com/uc?export=download&id=18qTzbemwhvy26H2RydBrKKNfN7eAhbAZ",
      imageAlt: "Virtualsimulation",
      title: "Virtual Simulation",
      icon: <FaRobot className="text-4xl mb-4 text-teal-600" />,
      message:
        "Our virtual simulation classes elevate learning by immersing students in realistic, interactive scenarios that make complex concepts more accessible. With advanced simulation software, students can explore virtual labs, conduct experiments, and practice real-world skills in a safe, controlled environment. These classes offer hands-on experience without physical materials and foster collaboration through simulated projects. By incorporating 3D models, virtual reality, and interactive simulations, we cater to diverse learning styles, enhancing understanding and preparing students for real-life challenges",
      reverse: false,
    },
    {
      imageSrc: "https://drive.google.com/uc?export=download&id=1NsZb-LHhA156BwTcaVvIHq4MIiPFenmc",
      imageAlt: "Playground",
      title: "Play Ground",
      icon: <FaRunning className="text-4xl mb-4 text-red-600" />,
      message:
        "KC Global School's expansive playground is a vibrant hub of energy and activity. Designed to foster physical and social development, it boasts lush green lawns perfect for students to explore their athletic abilities, build friendships, and create lasting memories. The playground features multi-sport courts, a track for running events, and age-appropriate play equipment. Safety is paramount, with soft surfaces and regular equipment maintenance. Organized sports, fitness classes, and recreational activities encourage teamwork, leadership, and a healthy lifestyle. The playground also serves as an outdoor classroom for environmental studies and nature appreciation.",
      reverse: true,
    },
    {
      imageSrc: "https://drive.google.com/uc?export=download&id=16GlRl1H9xDH2LKPwOfCVjt8tNw2387FC",
      imageAlt: "Reception",
      title: "Reception",
      icon: <FaBuilding className="text-4xl mb-4 text-red-600" />,
      message:
        "School reception areas are the heart of a school. It's the first place that visitors see on entering the premises and presents an opportunity to provide students and parents with a feel for the learning environment as a whole. KC Global School has a spacious reception area which is used to greet all visitors and to provide a waiting area for them until they are met by the person they came to see. The reception features a welcoming desk staffed by friendly personnel, comfortable seating, and displays showcasing student achievements and upcoming events. It's designed to be accessible, with clear signage and information about the school's facilities and programs.",
      reverse: false,
    },
    {
      imageSrc: "https://drive.google.com/uc?export=download&id=1tDDDy3UvUURi36eUQB0AfeivzvvuH_kU",
      imageAlt: "Smartclass",
      title: "Smart Class",
      icon: <FaProjectDiagram className="text-4xl mb-4 text-teal-600" />,
      message:
        "With the use of interactive whiteboards, our teachers project any subject on the smart screens and can teach concepts like never before. Our smart classrooms are equipped with cutting-edge educational technology, including touch-sensitive displays, document cameras, and student response systems. This digital learning environment allows for immersive lessons, virtual field trips, and real-time collaboration with experts and classrooms around the world. Teachers utilize educational apps and multimedia resources to cater to diverse learning styles. The smart class setup also facilitates flipped classroom models and personalized learning paths, ensuring each student can progress at their optimal pace.",
      reverse: true,
    },
  ];

  return (
    <div className="space-y-16 py-16 px-6">
      <header className="relative py-16">
        <div className="absolute inset-0">
          <Image
            src={BANNER}
            alt="Background image for KC Global School"
            layout="fill"
            objectFit="cover"
            className="w-full  object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4 text-white">
          School Infrastructure
        </h2>
        <p className="text-xl text-white max-w-3xl mx-auto">
          Discover our state-of-the-art facilities designed
        </p>
        </div>
      </header>
      {facilities.map((facility, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="flex flex-col lg:flex-row p-8 bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <motion.div
              className={`w-full lg:w-1/3 ${
                facility.reverse ? "lg:order-2" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src={facility.imageSrc}
                  alt={facility.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </motion.div>
            <div
              className={`w-full lg:w-2/3 ${
                facility.reverse ? "lg:pr-12 lg:order-1" : "lg:pl-12"
              } mt-8 lg:mt-0 flex flex-col justify-center`}
            >
              <motion.div
                initial={{ opacity: 0, x: facility.reverse ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {facility.icon}
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {facility.title}
                </h3>
                <div className="relative">
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {facility.message}
                  </p>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}