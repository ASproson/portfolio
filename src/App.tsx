import "./App.css";

const projects = [
  {
    id: 0,
    name: "Pixel Perfect",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ratione veniam consequatur inventore nulla non! Praesentium at optio, fugit dolorum quas molestiae dignissimos unde voluptates reiciendis libero amet doloremque alias!",
    tags: ["React", "Tailwind"],
  },
  {
    id: 1,
    name: "AI Maze Solver",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ratione veniam consequatur inventore nulla non! Praesentium at optio, fugit dolorum quas molestiae dignissimos unde voluptates reiciendis libero amet doloremque alias!",
    tags: ["Python", "AI", "DSA"],
  },
  {
    id: 2,
    name: "CLI Adventure Game",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ratione veniam consequatur inventore nulla non! Praesentium at optio, fugit dolorum quas molestiae dignissimos unde voluptates reiciendis libero amet doloremque alias!",
    tags: ["Python", "Bash"],
  },
  {
    id: 3,
    name: "CRUD ToDos",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ratione veniam consequatur inventore nulla non! Praesentium at optio, fugit dolorum quas molestiae dignissimos unde voluptates reiciendis libero amet doloremque alias!",
    tags: ["React", "Tailwind", "NodeJS", "MongoDB"],
  },
];

function App() {
  return (
    <div className="grid grid-cols-1 lg:px-40 xl:px-72 2xl:px-96 text-white">
      <HeroBanner />
      <div className="grid sm:grid-cols-2">
        {projects.map(({ id, name, description, tags }) => {
          return (
            <div key={id} className="border-2 border-green-500">
              <Card name={name} description={description} tags={tags} />
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
}

const Card = ({ name, description, tags }: CardProps) => {
  return (
    <div className="text-white">
      <h1 className="text-center">{name}</h1>
      <div className="flex space-x-2 justify-center my-2">
        {tags.map((tag, idx) => (
          <Tag key={idx} tag={tag} />
        ))}
      </div>
      <div className="px-4">
        <div className="border-2 border-red-500 h-48">
          <a href="">
            image
            <img src="" alt="" />
          </a>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <div className="bg-cyan-500 rounded-xl px-3">
      <p className="py-1">{tag}</p>
    </div>
  );
};

const HeroBanner = () => {
  return (
    <div className="px-4">
      <h1 className="text-center">Hello there! I'm Anthony!</h1>
      <h2 className="text-center">
        I'm a full stack developer from the United Kingdom, and I have worked
        for the British Government, Rolls-Royce Aerospace, AstraZeneca, and
        SquaredUp.
      </h2>
      <h2>Projects</h2>
    </div>
  );
};
