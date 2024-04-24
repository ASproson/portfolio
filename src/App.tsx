import "./App.css";

const projects = [
  {
    id: 0,
    name: "Project 1",
  },
  {
    id: 1,
    name: "Project 2",
  },
  {
    id: 2,
    name: "Project 3",
  },
  {
    id: 3,
    name: "Project 4",
  },
];

function App() {
  return (
    <div className="grid grid-cols-1 border-2 border-red-500 lg:px-40 xl:px-72 2xl:px-96">
      <div className="grid grid-cols-2">
        {projects.map(({ id, name }) => {
          return (
            <div
              key={id}
              className="text-white border-2 border-green-500 text-center"
            >
              <Card name={name} />
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
}

const Card = ({ name }: CardProps) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
