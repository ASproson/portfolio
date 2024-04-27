import "./App.css";
import zeldaCLI from "./assets/cli.png";

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
  },
  {
    id: 3,
    name: "CRUD ToDos",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ratione veniam consequatur inventore nulla non! Praesentium at optio, fugit dolorum quas molestiae dignissimos unde voluptates reiciendis libero amet doloremque alias!",
    tags: ["React", "Tailwind", "NodeJS", "MongoDB"],
    links: [
      {
        github: "",
        deployment: "",
      },
    ],
  },
];

function App() {
  return (
    <div className="grid grid-cols-1 lg:px-40 xl:px-72 2xl:px-96 ">
      <HeroBanner />
      <div className="grid sm:grid-cols-2">
        {projects.map(({ id, name, description, tags, links }) => {
          return (
            <div key={id} className="rounded-sm border-gray-200 m-2 shadow-md">
              <Card
                name={name}
                description={description}
                tags={tags}
                links={links}
              />
            </div>
          );
        })}
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
}

interface Links {
  github: string;
  deployment: string;
}

const Card = ({ name, description, tags, links }: CardProps) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-center">{name}</h1>
        <div className="flex space-x-2 justify-center my-2">
          {tags.map((tag, idx) => (
            <Tag key={idx} tag={tag} />
          ))}
        </div>
        <div className="px-4">
          <div
            className="border-2 border-red-500 h-48 relative"
            style={{ backgroundColor: "#1e1e1e" }}
          >
            <img
              className="absolute inset-0 w-full h-full object-contain"
              src={zeldaCLI}
              alt="Adventure game"
            />
          </div>
          <p>{description}</p>
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
    <a href={link}>
      <button
        className={`rounded-md p-2 hover:scale-110 transition ease-in-out ${
          name === "GitHub" ? "bg-blue-500" : "bg-green-500"
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
  const employment = [
    {
      name: "🏢 The British Government",
      link: "https://www.greatermanchester-ca.gov.uk/",
    },
    {
      name: "🛫 Rolls-Royce Aerospace",
      link: "https://www.rolls-royce.com/",
    },
    {
      name: "🔬 AstraZeneca",
      link: "https://www.astrazeneca.co.uk/",
    },
    {
      name: "📶 SquaredUp",
      link: "https://squaredup.com/",
    },
  ];

  return (
    <div className="px-4 pt-10">
      <h1 className="pb-4 text-2xl">Hello there, I'm Anthony! 👋</h1>
      <p>I'm a fullstack developer and have worked for:</p>
      <br />
      <ul className="px-4">
        {employment.map(({ name, link }) => (
          <li key={name}>
            <a
              href={link}
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>

      <p className="pt-4">
        You can find more details on my{" "}
        <a
          href="https://www.linkedin.com/in/asproson/"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </p>

      <h2 className="py-4 text-2xl">Projects</h2>
    </div>
  );
};
