import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Signup() {
    return (
        <div className="flex h-screen">
            {/* Left Side - Image Section */}
            <div className="hidden md:flex w-1/2 bg-cover bg-center relative" style={{ backgroundImage: "url('/your-image.jpg')" }}>
                <div className="absolute bottom-10 left-10 text-white">
                    <h2 className="text-3xl font-bold">Take a break from this busy world!</h2>
                    <p className="mt-2 flex items-center gap-2">
                        <span className="text-xl">✈️</span> explore it!
                    </p>
                </div>
            </div>

            {/* Right Side - Form Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center p-10">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-4">Create account</h2>

                    <form className="space-y-4">
                        <input type="text" placeholder="Username" className="w-full px-4 py-2 border rounded-lg" />
                        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" />

                        <div className="flex gap-4">
                            <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg" />
                            <input type="password" placeholder="Confirm" className="w-full px-4 py-2 border rounded-lg" />
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <input type="checkbox" className="cursor-pointer" />
                            <span>Creating an account means you’re okay with our <a href="#" className="text-blue-500">Terms</a> and <a href="#" className="text-blue-500">Privacy</a>.</span>
                        </div>

                        <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700">
                            Create account
                        </button>
                    </form>

                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-2 text-gray-500">or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100">
                        <FcGoogle size={20} /> Continue with Google
                    </button>

                    <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 mt-2">
                        <FaFacebook size={20} className="text-blue-600" /> Continue with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}
