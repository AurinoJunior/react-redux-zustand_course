import { describe, it, expect } from "vitest";
import { IPlayerState, next, play, player as reducer } from "./player";

const exampleState: IPlayerState = {
  course: {
    modules: [
      {
        id: 1,
        title: "Iniciando com React",
        lessons: [
          { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
          { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
        ],
      },
      {
        id: 2,
        title: "Estrutura da aplicação",
        lessons: [
          {
            id: "gE48FQXRZ_o",
            title: "Componente: Comment",
            duration: "13:45",
          },
        ],
      },
    ],
  },
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  isLoading: false,
};

describe("player slice", () => {
  it("should be able to play", () => {
    const state = reducer(exampleState, play([0, 1]));

    expect(state.currentModuleIndex).toEqual(0);
    expect(state.currentLessonIndex).toEqual(1);
  });

  it("should be able to play next video automatically", () => {
    const state = reducer(exampleState, next());

    expect(state.currentModuleIndex).toEqual(0);
    expect(state.currentLessonIndex).toEqual(1);
  });

  it("should be able to jump to the next module automatically", () => {
    const state = reducer(
      {
        ...exampleState,
        currentLessonIndex: 1,
      },
      next()
    );

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(0);
  });

  it("should not update the current module and lesson index if there is no next lesson available", () => {
    const state = reducer(
      {
        ...exampleState,
        currentModuleIndex: 1,
        currentLessonIndex: 0,
      },
      next()
    );

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(0);
  });
});
