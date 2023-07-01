import { useState } from "react"
import { BsFillPersonFill } from "react-icons/bs"
import { MdPassword } from "react-icons/md"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import OrangeButton from "../../../components/OrangeButton"

const Login = () => {
    const [showPassword,setShowPassword] = useState(false)
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold text-orange-600 mb-4">DP-Center</h1>

            <div className="p-4 bg-white w-full sm:w-96 flex gap-4 flex-col">
                <h3 className="text-center text-xl font-medium">Log-in to your account</h3>

                {/* signin form */}
                <form action="login" method="post" className="flex flex-col gap-4">

                    {/* email signin inputs */}
                    <div className="relative">
                        <input type="email" placeholder="Email" className="border border-slate-400 w-full rounded p-2 outline-orange-400" />
                        <BsFillPersonFill className="text-slate-500 absolute top-3 right-2 text-xl" />
                    </div>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="border border-slate-400 w-full rounded p-2 outline-orange-400" />
                        <MdPassword className="text-slate-500 absolute top-3 right-2 text-xl cursor-pointer" onClick={() => setShowPassword(!showPassword)}/>
                    </div>

                    {/* forget password */}
                    <label htmlFor="forget-password" className="text-sm text-slate-500">
                    Forgot password? <Link to="/" className="text-orange-600 font-semibold underline">recover password</Link>
                    </label>

                    {/* login button */}
                    <OrangeButton buttonValue="Login" buttonBg="bg-orange-600" />
                </form>

                <p className="text-center text-slate-400">or</p>
                <div className="w-full">

                {/* google signin */}
                <button className="bg-white text-black border border-slate-400 font-semibold text-sm py-2 rounded w-full flex items-center gap-2 justify-center transition-all hover:bg-orange-600 hover:text-white hover:border-none"><FcGoogle/> sign in with google</button>
                </div>

                {/* no account? signup */}
                <div>
                <label htmlFor="forget-password" className="text-sm text-slate-500">
                    don't have an account? <Link to="/" className="text-orange-600 font-semibold underline">sign-up</Link>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default Login