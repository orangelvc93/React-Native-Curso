export const BasicFunctions = () => {
  const addTwoNumbers = (a: number, b: number): string => {
    // return (a + b).toString();
    return `${a + b}`;
  };
  return (
    <>
      <h3>Funciones Basicas</h3>
      <span>El resultado de sumar: {addTwoNumbers(2, 9)}</span>
    </>
  );
};
