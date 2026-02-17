'use client';

import { moons } from "@/app/consts";
import { Moon } from "../Moon";
import { useState } from "react";

interface PlanetProps {
  title: string;
  id: number;
}

const Planet = ({ title, id }: PlanetProps) => {
  const [selectedMoon, setSelectedMoon] = useState<number[]>([]);

  const planetMoons = moons.filter((moon) => moon.planetId === id);


  const calculateSize = (i: number) => {
    return 110 + i * 10;
  }

  return (
    <section className="flex gap-[50px] items-center">
      <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-[silver] relative">
        <p className="text-black font-semibold">{title}</p>
        {selectedMoon.map((item, i) => (
          <div
            key={item}
            style={{
              width: calculateSize(i),
              height: calculateSize(i),
            }}
            className="absolute rounded-full border-2 border-yellow-300"
          ></div>
        ))}
      </div>

      <div className="flex gap-4">
        {planetMoons.map((moon) => (
          <Moon
            key={moon.id}
            title={moon.title}
            moonId={moon.id}
            selectedMoon={selectedMoon}
            setSelectedMoon={setSelectedMoon}
          />
        ))}
      </div>
    </section>
  );
};

export default Planet;
