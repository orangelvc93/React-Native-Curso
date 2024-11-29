import { useForm } from "react-hook-form";

type FromInputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const { register, handleSubmit, formState, watch } = useForm<FromInputs>({
    defaultValues: {
      email: "orangel@email.com",
      password: "abc123",
    },
  });

  const onSubmit = (myForm: FromInputs) => {
    console.log({ myForm });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formularios</h3>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input type="text" placeholder="Password" {...register("password")} />

          <button type="submit">Ingresar</button>
        </div>
      </form>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </>
  );
};
