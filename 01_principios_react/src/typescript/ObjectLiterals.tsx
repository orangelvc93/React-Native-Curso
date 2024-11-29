interface Person {
  fistName: string;
  lastName: string;
  age: number;

  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 31,
    fistName: "Orangel",
    lastName: "Valdespino",
    address: {
      country: "Quito",
      houseNo: 230,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>

      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
