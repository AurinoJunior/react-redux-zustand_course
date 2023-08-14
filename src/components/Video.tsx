import ReactPlayer from "react-player";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { next } from "../store/slices/player";

export function Video() {
  const dispatch = useDispatch();

  const lesson = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;
    return state.player.course.modules[currentModuleIndex].lessons[
      currentLessonIndex
    ];
  });

  function handleNextPlay() {
    dispatch(next());
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        onEnded={handleNextPlay}
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  );
}
