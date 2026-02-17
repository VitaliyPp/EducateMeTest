import { Planet } from "@/components";
import { planets } from "./consts";

const Home = () => {
  return (
      <main className="flex min-h-screen w-full flex-col items-center gap-12 py-32 px-16 bg-white sm:items-start">
        {planets.map((item) => (
          <Planet
            key={item.id}
            title={item.title}
            id={item.id}
          />
        ))}
      </main>
  );
};

export default Home;
