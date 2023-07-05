import { useSelect } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

const RegisterForm = () => {
    const {
        refineCore: { onFinish, formLoading, queryResult },
        register,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm();

      const handleRegistration = (data:any) => console.log(data);

      const onErrors = (errors: any) => console.error(errors);

    return (
        <form onSubmit={handleSubmit(handleRegistration, onErrors)}>
            <div>
                <label>Title: </label>
                <input {...register("title", { required: true, maxLength: 5 })} className="border" />
                {errors.title && <span>This field is required</span>}
            </div>
            <div>
                <label>Name: </label>
                <input {...register("name", { required: true })} className="border" />
                {errors.title && <span>This field is required</span>}
            </div>

            {formLoading && <p>Loading</p>}
            <button className="border">Submit</button>
        </form>
    );
};
export default RegisterForm;