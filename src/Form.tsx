import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
const schema = z.object({
  name: z.string().min(3, { message: "Name should be greater than 3 chars." }),
  age: z
    .number({ invalid_type_error: "I do not know what to put!!!" })
    .min(3, { message: "Name should be greater than 3 chars." }),
});

type FormData = z.infer<typeof schema>;
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          name="name"
          className="form-control"
        />
        {errors.name && (
          <small className="text-danger">{errors.name.message}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type="number"
          name="age"
          className="form-control"
        />
        {errors.age && (
          <small className="text-danger">{errors.age.message}</small>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
