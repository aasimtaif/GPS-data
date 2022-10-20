import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginServices from "../../services/LoginServices";
import { loginUser } from "../../redux/UserSlice";
import { useDispatch } from "react-redux";
export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [body, setBody] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await LoginServices(body).catch((err) => {
            console.log(err.response.data.message);
        });

        console.log(response.success)
        if (response.success) {
            dispatch(loginUser({
                user: response.user,
                authorised: true
            }));
                navigate("/home");
        }
    };

    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="text-center font-bold text-2xl">Log in</div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                                        onChange={(e) => {
                                            setBody({
                                                ...body,
                                                email: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                                        onChange={(e) => {
                                            setBody({
                                                ...body,
                                                password: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                    <Link
                                        to="/signup"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Don't have Account, Sign Up
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleSubmit}
                                >
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}