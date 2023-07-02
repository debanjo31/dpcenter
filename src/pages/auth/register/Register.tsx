import { useState } from "react"
import { BsFillPersonFill } from "react-icons/bs"
import { MdPassword, MdEmail } from "react-icons/md"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import { useRegister } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../../utility/schema"
import { z } from 'zod'

type registerSchema = z.infer<typeof registerSchema>;

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { mutate: register } = useRegister();

    const { refineCore: { onFinish, formLoading },
        register: collect, handleSubmit, resetField,formState: { errors },
    } = useForm<registerSchema>({ resolver: zodResolver(registerSchema), });

    const onSubmit = (data: any, e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

         register(data,{
            onSuccess: (data) => {
                resetField
                if (!data.success) {
                    console.log("error!!! try again later");
                }
                console.log(data);
            },
        },)
     }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold text-orange-600 mb-4">DP-Center</h1>
            {formLoading && <p>Loading...</p>}

            <div className="p-4 bg-white w-full sm:w-96 flex gap-4 flex-col">
                <h3 className="text-center text-xl font-medium">Register account</h3>

                {/* signin form */}
                <form action="login" method="post" className="flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    {/* email signin inputs */}
                    <div className="relative">
                        <BsFillPersonFill className="text-slate-500 absolute top-3 right-2 text-xl" />
                        <input type="text" placeholder="Full-Name" className="border border-slate-400 w-full rounded p-2 outline-orange-400"
                            {...collect("fullname")} />
                        {errors.fullname && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {errors.fullname?.message}
                            </p>
                        )}

                    </div>
                    <div className="relative">
                        <MdEmail className="text-slate-500 absolute top-3 right-2 text-xl" />
                        <input type="email" placeholder="Email" className="border border-slate-400 w-full rounded p-2 outline-orange-400"
                            {...collect("email")} />
                        {errors.email && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {errors.email?.message}
                            </p>
                        )}
                    </div>
                    <div className="relative">
                        <MdPassword className="text-slate-500 absolute top-3 right-2 text-xl cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="border border-slate-400 w-full rounded p-2 outline-orange-400"
                            {...collect("password")} />
                        {errors.password && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {errors.password?.message}
                            </p>
                        )}
                    </div>

                    {/* terms and conditions */}
                    <label htmlFor="terms and conditions" className="text-sm text-slate-500 flex flex-col">
                        <span className="flex gap-2">
                            <input type="checkbox" {...collect("terms")} />I agree to all <Link to="/" className="font-medium text-orange-600">Terms & Conditions</Link>
                        </span>
                        {errors.terms && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {errors.terms?.message}
                            </p>
                        )}
                    </label>

                    {/* login button */}
                    <button className={`bg-orange-600 text-white font-semibold text-sm py-2 rounded w-full hover:bg-orange-400 transition duration-300`} >
                        Register
                    </button>
                </form>

                <p className="text-center text-slate-400">or</p>

                <div className="w-full">
                    {/* google signin */}
                    <button className="bg-white text-black border border-slate-400 font-semibold text-sm py-2 rounded w-full flex items-center gap-2 justify-center transition-all hover:bg-orange-600 hover:text-white hover:border-none"><FcGoogle /> register with google</button>
                </div>

                {/* no account? signup */}
                <div>
                    <label htmlFor="login" className="text-sm text-slate-500">
                        have an account? <Link to="/login" className="text-orange-600 font-semibold underline">log-in</Link>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default Register
