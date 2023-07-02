import { useState } from "react"
import { BsFillPersonFill } from "react-icons/bs"
import { MdPassword } from "react-icons/md"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import { useLogin } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod'
import { loginSchema } from "../../../utility/schema"

type loginSchema = z.infer<typeof loginSchema>;

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { mutate: login } = useLogin()
    
    const { refineCore: { onFinish, formLoading },
        register: collect, handleSubmit, resetField,formState: { errors },
    } = useForm<loginSchema>({ resolver: zodResolver(loginSchema), });

    const onSubmit = (data: any, e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

         login(data,{
            onSuccess: (data) => {
                resetField
                if (!data.success) {
                    console.log("error!!! try again later");
                }
                console.log(data);
                console.log("lots of bug available");
                
            },
        },)
     }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold text-orange-600 mb-4">DP-Center</h1>

            <div className="p-4 bg-white w-full sm:w-96 flex gap-4 flex-col">
                <h3 className="text-center text-xl font-medium">Log-in to your account</h3>

                {/* signin form */}
                <form action="login" method="post" className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

                    {/* email signin inputs */}
                    <div className="relative">
                        <input type="email" placeholder="Email" className="border border-slate-400 w-full rounded p-2 outline-orange-400" {...collect("email")}/>
                        <BsFillPersonFill className="text-slate-500 absolute top-3 right-2 text-xl" />
                        {errors.email && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {errors.email?.message}
                            </p>
                        )}
                    </div>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="border border-slate-400 w-full rounded p-2 outline-orange-400" {...collect("password")} />
                        <MdPassword className="text-slate-500 absolute top-3 right-2 text-xl cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                        {errors.password && (
                            <p className="text-xs italic text-red-500 mt-2">
                                {errors.password?.message}
                            </p>
                        )}
                    </div>

                    {/* forget password */}
                    <label htmlFor="forget-password" className="text-sm text-slate-500">
                        Forgot password? <Link to="/" className="text-orange-600 font-semibold underline">recover password</Link>
                    </label>

                    {/* login button */}
                    <button className={`bg-orange-600 text-white font-semibold text-sm py-2 rounded w-full hover:bg-orange-400 transition duration-300`}>
                        Login
                    </button>
                </form>

                <p className="text-center text-slate-400">or</p>
                <div className="w-full">

                    {/* google signin */}
                    <button className="bg-white text-black border border-slate-400 font-semibold text-sm py-2 rounded w-full flex items-center gap-2 justify-center transition-all hover:bg-orange-600 hover:text-white hover:border-none"><FcGoogle /> sign in with google</button>
                </div>

                {/* no account? signup */}
                <div>
                    <label htmlFor="signup" className="text-sm text-slate-500">
                        don't have an account? <Link to="/register" className="text-orange-600 font-semibold underline">sign-up</Link>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default Login