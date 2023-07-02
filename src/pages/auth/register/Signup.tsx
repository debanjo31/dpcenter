import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit,formState: { errors } } = useForm();

  const handleRegistration = (data:any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Name</label>
        <input name="name" type="text" {...register('name')} />
        {errors?.name && <p>{errors?.name?.message}</p>}
      </div>
      {/* <div>
        <label>Email</label>
        <input type="email" name="email" {...register('email')} />
      </div> */}
      {/* <div>
        <label>Password</label>
        <input type="password" name="password" {...register('password')} />
      </div> */}
      <button>Submit</button>
    </form>
  );
};
export default RegisterForm;