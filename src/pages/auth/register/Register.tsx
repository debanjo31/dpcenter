import { useState } from "react"
import { BsFillPersonFill } from "react-icons/bs"
import { MdPassword,MdEmail } from "react-icons/md"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import { useLogin } from "@refinedev/core";
import { useRegister } from "@refinedev/core";

const Register = () => {
    const { mutate: register } = useRegister();
    const [showPassword, setShowPassword] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkbox, setCheckbox] = useState(false)
    const { mutate: login } = useLogin()
    
    const submitRegister = (e: any) => {
        e.preventDefault();
        const values = {
            email:email,
            password:password
        }
        // console.log("gone");
        

        register(
            values,
            {
                onSuccess: (data) => {
                    if (!data.success) {
                        // handle error
                        console.log("eror");  
                    }
                    console.log(data);
                    // handle success
                },
            },
        );
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold text-orange-600 mb-4">DP-Center</h1>

            <div className="p-4 bg-white w-full sm:w-96 flex gap-4 flex-col">
                <h3 className="text-center text-xl font-medium">Register account</h3>

                {/* signin form */}
                <form action="login" method="post" className="flex flex-col gap-4">

                    {/* email signin inputs */}
                    <div className="relative">
                        <input type="text" placeholder="Full-Name" className="border border-slate-400 w-full rounded p-2 outline-orange-400" value={name} onChange={e => setName(e.target.value)} />
                        <BsFillPersonFill className="text-slate-500 absolute top-3 right-2 text-xl" />
                    </div>
                    <div className="relative">
                        <input type="email" placeholder="Email" className="border border-slate-400 w-full rounded p-2 outline-orange-400" value={email} onChange={e => setEmail(e.target.value)} />
                        <MdEmail className="text-slate-500 absolute top-3 right-2 text-xl" />
                    </div>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="border border-slate-400 w-full rounded p-2 outline-orange-400" value={password} onChange={e => setPassword(e.target.value)} />
                        <MdPassword className="text-slate-500 absolute top-3 right-2 text-xl cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                    </div>

                    {/* terms and conditions */}
                    <label htmlFor="forget-password" className="text-sm text-slate-500 flex gap-2">
                        <input type="checkbox" name="term and conditions" value={checkbox} onClick={(e) => setCheckbox(!checkbox)} />
                        I agree to all <Link to="/" className="font-medium text-orange-600">Terms & Conditions</Link>
                    </label>

                    {/* login button */}
                    <button className={`bg-orange-600 text-white font-semibold text-sm py-2 rounded w-full hover:bg-orange-400 transition duration-300`} onClick={submitRegister}>
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
                    <label htmlFor="forget-password" className="text-sm text-slate-500">
                        have an account? <Link to="/" className="text-orange-600 font-semibold underline">log-in</Link>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default Register