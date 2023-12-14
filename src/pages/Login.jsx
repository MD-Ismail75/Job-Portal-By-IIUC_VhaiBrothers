import React from 'react';

function Login() {
    return (
        <div className="bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% flex items-center justify-center h-screen">
            <div className="max-w-[960px] bg-black-dark grid grid-cols-2 items-center gap-20 p-5 rounded-2xl">
                <div>
                    <img src="public\assets\signup-background.svg" alt="" />
                    <img src="public\assets\teamwork.svg" alt="" className="absolute top-36" />
                </div>

                <div className="max-w-80 grid gap-5">
                    <h1 className="text-5xl font-bold text-white">Login</h1>
                    <p className="text-dull-white">Access to 300+ hours of courses, tutorials and livestreams</p>
                    <form action="" className="space-y-6 text-white">
                        <div className="relative">
                            <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                                <i className="fa-solid fa-envelope-open"></i>
                            </div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <input
                                type="password" // Change to password type
                                placeholder="Password"
                                className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
                            />
                        </div>
                        <button className="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2">
                            Sign in
                        </button>
                    </form>
                    <div className="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
                        <p>
                            Don't have an account? <a href="/" className="text-neon-blue font-semibold cursor-pointer">Sign up</a>
                        </p>
                        <p>
                            Forgot password? <a href="/" className="text-neon-blue font-semibold cursor-pointer">Reset password</a>
                        </p>
                        <p>
                            Don't have a password yet? <a href="/" className="text-neon-blue font-semibold cursor-pointer">Set password</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
