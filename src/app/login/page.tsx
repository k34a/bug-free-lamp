"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        });
        if (res?.error) {
            setError(res.error as string);
        }
        if (res?.ok) {
            return router.push("/");
        }
    };

    return (
        <section className="w-full h-screen flex flex-col items-center justify-center gap-4">
            <form
                className="p-6 w-11/12 max-w-[400px] grid grid-cols-1 md:gap-4 border border-solid border-green-700 rounded"
                onSubmit={handleSubmit}
            >
                <h1 className="mb-5 w-full text-2xl font-bold text-green-700">
                    Log In
                </h1>
                {error && <div className="text-red-700">{error}</div>}
                <div className="grid grid-cols-1">
                    <label className="w-full text-sm text-green-700">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full h-8 border border-solid border-slate-400 rounded p-2"
                        name="email"
                    />
                </div>
                <div className="grid grid-cols-1">
                    <label className="w-full text-sm text-green-700">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-8 border border-solid border-slate-400 rounded p-2"
                        name="password"
                    />
                </div>
                <button className="w-full py-2 rounded bg-green-700 text-white">
                    Sign In
                </button>
                <Link
                    href="/register"
                    className="text-sm text-slate-600 hover:text-black"
                >
                    Don't have an account? Sign up.
                </Link>
            </form>
            <p className="text-slate-600 text-sm w-11/12 max-w-[400px]">
                If you're having trouble logging in, please reach out to us at{" "}
                <a href="mailto:k34a@live.in" className="underline">
                    k34a@live.in
                </a>{" "}
                for assistance.
            </p>
        </section>
    );
}
