import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useLogin from "@/hooks/Login/useLogin";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { axiosClient } from "@/services/axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Logo, SupplementalContent, primaryVariants } from "@/components/Registertion/utilty";

const index = () => {
  useLogin();

  return (
    <section className="grid min-h-screen grid-cols-1 bg-slate-50 md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px]">
      <Logo />
      <Form />
      <SupplementalContent />
      <ToastContainer />
    </section>
  );
};

export default index;

interface IFrom {
  email: string;
  password: string;
}

const Form = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFrom>();


  async function onSubmit(data: IFrom) {
    try {
      const response = await axiosClient.post("/api/v1/user/login", data);
      const responseData = await response.data;
      toast.success("User Login Successfully");
      router.replace("/");
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
          Login your account
        </motion.h1>
        <motion.p variants={primaryVariants} className="mb-8 text-center">
          Welcome back share your screen and enjoy with your friend and our
          family
        </motion.p>

        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="email-input"
              className={twMerge(
                "mb-1 inline-block text-sm font-medium",
                errors?.email?.message ? "text-red-600" : ""
              )}
            >
              Email<span className="text-red-600">*</span>
            </label>
            <input
              id="email-input"
              {...register("email", { required: "Email is Required" })}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />

            {errors?.email?.message ? (
              <span className="text-sm text-red-600">
                {errors?.email?.message}
              </span>
            ) : null}
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="password-input"
              className={twMerge(
                "mb-1 inline-block text-sm font-medium",
                errors?.password?.message ? "text-red-600" : ""
              )}
            >
              Password<span className="text-red-600">*</span>
            </label>
            <input
              id="password-input"
              type="password"
              {...register("password", { required: "Password is Required" })}
              placeholder="Enter your password"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
            {errors?.password?.message ? (
              <span className="text-sm text-red-600">
                {errors?.password?.message}
              </span>
            ) : null}
          </motion.div>

          <motion.button
            variants={primaryVariants}
            whileTap={{
              scale: 0.985,
            }}
            onClick={handleSubmit(onSubmit)}
            type="submit"
            className="mb-1.5 w-full rounded bg-indigo-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Login
          </motion.button>
          <motion.p variants={primaryVariants} className="text-xs">
            Do no have an account?{" "}
            <Link className="text-indigo-600 underline" href={"/signup"}>
              create an account
            </Link>
          </motion.p>
        </form>
      </div>
    </motion.div>
  );
};
