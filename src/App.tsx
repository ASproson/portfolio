import "./App.css";
import zeldaCLI from "./assets/cli.png";
import squp from "./assets/squp.png";
import gov from "./assets/gov.png";

const projects = [
  {
    id: 0,
    name: "Pixel Perfect",
    description:
      "Translates designs from Dribble into pixel perfect React Tailwind code (without access to Figma designs)",
    tags: ["React", "Tailwind"],
    links: [
      {
        github: "https://github.com/ASproson/pixel_perfect",
        deployment: "",
      },
    ],
    img: "",
    alt: "",
  },
  {
    id: 1,
    name: "AI Maze Solver",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ratione veniam consequatur inventore nulla non! Praesentium at optio, fugit dolorum quas molestiae dignissimos unde voluptates reiciendis libero amet doloremque alias!",
    tags: ["Python", "AI", "DSA"],
    links: [
      {
        github: "",
        deployment: "",
      },
    ],
    img: "",
    alt: "",
  },
  {
    id: 2,
    name: "CLI Adventure Game",
    description:
      "An ASCII CLI dungeon crawler game with random enemy encounters, turn-based battles, items, and real-time map tracking",
    tags: ["Python", "Bash"],
    links: [
      {
        github: "https://github.com/ASproson/zelda_cli_game",
        deployment: "",
      },
    ],
    img: zeldaCLI,
    alt: "CLI adventure game",
  },
  // {
  //   id: 3,
  //   name: "CRUD ToDos",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ratione veniam consequatur inventore nulla non! Praesentium at optio, fugit dolorum quas molestiae dignissimos unde voluptates reiciendis libero amet doloremque alias!",
  //   tags: ["React", "Tailwind", "NodeJS", "MongoDB"],
  //   links: [
  //     {
  //       github: "",
  //       deployment: "",
  //     },
  //   ],
  //   img: "",
  //   alt: "",
  // },
  {
    id: 4,
    name: "6 Skill Points for Generals Mod",
    description:
      "Skill point mod for Total War: Shogun 2, including a walkthrough using modern operating systems and tools. This mod currently has over 1600 subscribers",
    tags: ["Assembly"],
    links: [
      {
        github: "https://github.com/ASproson/tw-shogun2-mod",
        deployment: "",
      },
    ],
    img: "https://wiki.totalwar.com/images/e/e7/Shogun-2-home.jpg",
    alt: "",
  },
];

function App() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 max-w-[1200px]">
        <HeroBanner />
        <div className="grid sm:grid-cols-2">
          {projects.map(({ id, name, description, tags, links, img, alt }) => {
            return (
              <div
                key={id}
                className="rounded-sm border-gray-200 m-2 shadow-md"
              >
                <Card
                  name={name}
                  description={description}
                  tags={tags}
                  links={links}
                  img={img}
                  alt={alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

interface CardProps {
  name: string;
  description: string;
  tags: string[];
  links: Links[];
  img: string;
  alt: string;
}

interface Links {
  github: string;
  deployment: string;
}

const Card = ({ name, description, tags, links, img, alt }: CardProps) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="mt-2">
        <h1 className="text-center font-semibold">{name}</h1>
        <div className="flex space-x-2 justify-center my-3">
          {tags.map((tag, idx) => (
            <Tag key={idx} tag={tag} />
          ))}
        </div>
        <div className="px-4">
          <div
            className="h-48 relative rounded-sm"
            style={{ backgroundColor: "#1e1e1e" }}
          >
            <img
              className="absolute inset-0 w-full h-full object-contain"
              src={img}
              alt={alt}
            />
          </div>
          <p className="mt-4">{description}</p>
        </div>
      </div>
      <div className="flex justify-between my-6 px-4">
        {links.map((link, idx) => (
          <div key={idx}>
            <Button name="GitHub" link={link.github} />
            {link.deployment && (
              <Button name="Deployment" link={link.deployment} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

interface ButtonProps {
  name: string;
  link: string;
}

const Button = ({ name, link }: ButtonProps) => {
  return (
    <a href={link} target="_blank">
      <button
        className={`rounded-md p-2 hover:scale-110 transition ease-in-out text-gray-200 ${
          name === "GitHub" ? "bg-black" : "bg-green-500"
        }`}
      >
        {name}
      </button>
    </a>
  );
};

interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <div className="bg-cyan-500 rounded-xl px-3">
      <p className="py-1 text-white text-sm">{tag}</p>
    </div>
  );
};

const HeroBanner = () => {
  return (
    <div className="px-4 pt-10 text-center xl:text-left">
      <h1 className="py-4 text-3xl font-bold">Hello there, I'm Anthony! 👋</h1>
      <p>I'm a fullstack developer and previously worked for:</p>

      <Employment />
      <p className="py-4">
        You can find more details on my{" "}
        <a
          href="https://www.linkedin.com/in/asproson/"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </p>

      <h2 className="py-4 text-3xl font-bold">Projects</h2>
    </div>
  );
};

const Employment = () => {
  const employ = [
    {
      id: 0,
      name: "British Government",
      link: "https://www.greatermanchester-ca.gov.uk/",
      img: gov,
      style: "h-12 sm:h-16  md:20",
    },
    {
      id: 1,
      name: "Rolls-Royce Aerospace",
      link: "https://www.rolls-royce.com/",
      img: "https://i0.wp.com/interengineeringlgbt.com/wp-content/uploads/2018/04/Rolls-Royce-Logo-Blue-RGB.png?ssl=1",
      style: "h-9 sm:h-10 md:14 mt-6",
    },
    {
      id: 2,
      name: "AstraZeneca",
      link: "https://www.astrazeneca.co.uk/",
      img: "https://1000logos.net/wp-content/uploads/2023/10/AstraZeneca-Logo.png",
      style: "h-24 sm:h-28 md:32",
    },
    {
      id: 3,
      name: "SquaredUp",
      link: "https://squaredup.com/",
      img: squp,
      style: "h-7 sm:h-9 md:10 mt-5 ",
    },
  ];

  return (
    <div className="my-6">
      <div className="grid grid-cols-2 xl:grid-cols-4 text-center">
        {employ.map(({ id, name, link, img, style }) => {
          return (
            <div key={id} className="flex justify-center h-20 items-center">
              <a href={link} target="_blank">
                <img src={img} className={style} alt={name} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
