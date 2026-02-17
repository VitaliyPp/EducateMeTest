import { Dispatch, SetStateAction } from "react";

interface MoonProps {
  title: string;
  moonId: number;
  selectedMoon: number[];
  setSelectedMoon: Dispatch<SetStateAction<number[]>>
}

const Moon = ({ title, moonId, selectedMoon, setSelectedMoon }: MoonProps) => {
  const isMoonExist = selectedMoon.includes(moonId);

  const handleMoonClick = () => {
    if (isMoonExist) {
      setSelectedMoon((prev) => prev.filter((item) => item != moonId));
    } else {
      setSelectedMoon((prev) => [...prev, moonId]);
    }
  };

  return (
    <button
      onClick={handleMoonClick}
      className={`
        ${isMoonExist ? 'bg-[green]' : 'bg-[yellow]'}
        w-20 h-20 rounded-full cursor-pointer
      `}
    >
      <p className="text-black font-semibold">{title}</p>
    </button>
  );
};

export default Moon;
