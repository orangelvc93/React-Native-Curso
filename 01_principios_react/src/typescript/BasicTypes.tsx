export const BasicTypes = () => {
  const name: string = "Orangel";
  const age: number = 31;
  const isActive: boolean = true;

  const powers: string[] = ["React", "ReactNative", "Angular", "Vue", "Qwik"];

  powers.push("Python");

  return (
    <>
      <h3>Tipos Básicos</h3>
      {name} {age} {isActive ? "true" : "false"} <br />
      {powers.join(", ")}
    </>
  );
};
