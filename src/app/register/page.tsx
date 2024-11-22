"use client";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/actions/register";
import { BiCheckCircle } from "react-icons/bi";
import PasswordCriteria from "@/components/password-criteria";

export default function Register() {
    const [error, setError] = useState<string>();
    const [pw, setPw] = useState<string>("");
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null);

    const handleSubmit = async (formData: FormData) => {
        const r = await register({
            email: formData.get("email"),
            password: formData.get("password"),
            name: formData.get("name"),
        });
        if (r?.error) {
            setError(r.error);
            return;
        } else {
            ref.current?.reset();
            return router.push("/login");
        }
    };

    return (
        <section className="w-full h-screen flex items-center justify-center">
            <form
                ref={ref}
                action={handleSubmit}
                className="p-6 w-full max-w-[400px] grid grid-cols-1 gap-4 border border-solid border-green-700 rounded shadow-lg"
            >
                <h1 className="mb-5 w-full text-2xl font-bold text-green-700">
                    Register
                </h1>
                {error && <div className="text-red-600">{error}</div>}

                <div className="w-full">
                    <label className="block text-sm font-medium text-green-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full h-10 border border-solid border-slate-400 py-1 px-2.5 rounded text-[13px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        name="name"
                    />
                </div>

                <div className="w-full">
                    <label className="block text-sm font-medium text-green-700">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full h-10 border border-solid border-slate-400 py-1 px-2.5 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        name="email"
                    />
                </div>

                <div className="w-full">
                    <label className="block text-sm font-medium text-green-700">
                        Password
                    </label>
                    <div className="w-full">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full h-10 border border-solid border-slate-400 py-1 px-2.5 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            name="password"
                            value={pw}
                            onChange={(e) => {
                                const updatedVal = e.target.value;
                                setPw(updatedVal);
                            }}
                        />
                    </div>
                    <PasswordCriteria password={pw} />
                </div>

                <button className="w-full py-2.5 mt-2 rounded bg-green-700 text-white font-semibold transition duration-150 ease-in-out hover:bg-green-800">
                    Sign Up
                </button>

                <Link
                    href="/login"
                    className="text-sm text-slate-600 hover:text-black"
                >
                    Already have an account? Log in.
                </Link>
            </form>
        </section>
    );
}
