import { useState } from "react";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const SignInPage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <FormContainer>
            <div className="flex justify-center">
                <form className="w-full max-w-sm font-lato p-4 m-4 bg-white border rounded-lg border-slate-200">
                    <div className="flex flex-col my-4">
                        <label htmlFor="username" className="text-slate-500 pl-1">
                            username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={userName}
                            onChange={(e) =>
                                setUserName(e.target.value)
                            }
                            className="border rounded-lg bg-slate-50 border-slate-200 px-2 py-1 focus:outline-emerald-600" />
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="password" className="text-slate-500 pl-1">
                            password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            className="border rounded-lg bg-slate-50 border-slate-200 px-2 py-1 focus:outline-emerald-600" />
                    </div>
                    <button className="w-full text-white bg-emerald-700 rounded-lg py-4 mt-4">
                        Sign in
                    </button>
                </form>
            </div>
            <div>
                <Link to="/sign-up" className="text-md text-green-600 underline">
                    create an account
                </Link>
            </div>
        </FormContainer>
    )
}
export default SignInPage;