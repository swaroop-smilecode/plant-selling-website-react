import { useState } from "react";
import FormContainer from "./FormContainer";
import * as userService from "services/user";
import { Link } from "react-router-dom";

const SignInPage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <FormContainer>
            <div className="flex justify-center">
                <form className="w-full max-w-sm font-lato p-4 m-4 bg-white border rounded-lg border-slate-200"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        if (userName.length < 4) {
                            setError("user name can't be less than 4 characters")
                            return;
                        }
                        if (password.length < 4) {
                            setError("password can't be less than 4 characters")
                            return;
                        }
                        setLoading(true);
                        const response = await userService.createSession(userName, password);
                        if (response.status === 201) {
                            setError('');
                            console.log('Signed in successful!');
                        } else {
                            const data = await response.json();
                            setError(data.error);
                        }

                        setLoading(false);
                    }}>
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
                        {loading && (
                            <div className="absolute top-0 flex items-center h-full right-4">
                                <i className="text-2xl text-green-300 fa-solid fa-spinner animate-spin"></i>
                            </div>
                        )}
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