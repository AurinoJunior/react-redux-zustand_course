import { useAppSelector } from "../store";

export function TodoList() {
  const store = useAppSelector(({ todo }) => {
    return todo;
  });

  return (
    <ul>
      {store.map((item: string) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
