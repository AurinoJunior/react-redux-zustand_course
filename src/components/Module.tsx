import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import { useAppSelector } from "../store";

interface IModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export function Module({ title, amountOfLessons, moduleIndex }: IModuleProps) {
  const lessons = useAppSelector(
    (state) => state.player.course.modules[moduleIndex].lessons
  );

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenOrClosedModule() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button
        className="flex w-full items-center gap-3 bg-zinc-800 p-4"
        onClick={handleOpenOrClosedModule}
      >
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown
          className={`w-5 h-5 ml-auto text-zinc-400 ${
            isOpen && "rotate-180 transition-transform"
          }`}
        />
      </button>

      {isOpen && (
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map(({ title, duration, id }) => (
            <Lesson key={id} title={title} duration={duration} />
          ))}
        </nav>
      )}
    </div>
  );
}
