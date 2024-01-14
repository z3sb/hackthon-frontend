import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { axiosClient } from "@/services/axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { Logo, SupplementalContent, primaryVariants } from "@/components/Registertion/utilty";

const index = () => {
  return (
    <section className="grid min-h-screen grid-cols-1 bg-slate-50 md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px]">
      <Logo />
      <Form />
      <SupplementalContent />
    </section>
  );
};

export default index;

interface IFrom {
  email: string;
  password: string;
  name: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFrom>();

  const router = useRouter();

  async function onSubmit(data: IFrom) {
    try {
      const response = await axiosClient.post("/api/v1/user/register", data);
      toast.success("User Sign up successfully");
      router.replace("/login");
    } catch (error) {
      toast.error("An Error happen");
    }
  }

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      viewport={{ once: true }}
      className="flex items-center justify-center pb-4 pt-20 md:py-20"
    >
      <div className="mx-auto my-auto max-w-lg px-4 md:pr-0">
        <motion.h1
          variants={primaryVariants}
          className="mb-2 text-center text-4xl font-semibold"
        >
          Create your account
        </motion.h1>
        <motion.p variants={primaryVariants} className="mb-8 text-center">
          Try it free for 30 days, no CC required
        </motion.p>

        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="email-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              username<span className="text-red-600">*</span>
            </label>
            <input
              id="username-input"
              type="text"
              {...register("name")}
              placeholder="Enter your username"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="email-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Email<span className="text-red-600">*</span>
            </label>
            <input
              id="email-input"
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="password-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Password<span className="text-red-600">*</span>
            </label>
            <input
              id="password-input"
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.div
            variants={primaryVariants}
            className="mb-4 flex w-full items-start gap-1.5"
          >
            <input
              type="checkbox"
              id="terms-checkbox"
              className="h-4 w-4 accent-indigo-600"
              required
            />
            <label htmlFor="terms-checkbox" className="text-xs">
              By signing up, I agree to the terms and conditions, privacy
              policy, and cookie policy
            </label>
          </motion.div>

          <motion.button
            variants={primaryVariants}
            whileTap={{
              scale: 0.985,
            }}
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="mb-1.5 w-full rounded bg-indigo-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Login
          </motion.button>
          <motion.p variants={primaryVariants} className="text-xs">
            Already have an account?{" "}
            <Link className="text-indigo-600 underline" href="/login">
              Sign in
            </Link>
            <Link href={"/signin"}></Link>
          </motion.p>
        </form>
      </div>
    </motion.div>
  );
};

