import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import useLogin from "@/hooks/Login/useLogin";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { axiosClient } from "@/services/axios";
import { useRouter } from "next/router";

const index = () => {
  useLogin();

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
  username: string;
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
      const response = await axiosClient.post("/api/users/login", data);
      const responseData = await response.data;
      localStorage.setItem("ACCESS_TOKEN", responseData?.accessToken);
      router.replace("/");
    } catch (error) {
      console.log(errors);
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
                errors?.username?.message ? "text-red-600" : ""
              )}
            >
              Email<span className="text-red-600">*</span>
            </label>
            <input
              id="email-input"
              {...register("username", { required: "Email is Required" })}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />

            {errors?.username?.message ? (
              <span className="text-sm text-red-600">
                {errors?.username?.message}
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

const SupplementalContent = () => {
  return (
    <div className="group sticky top-4 m-4 h-80 overflow-hidden rounded-3xl rounded-tl-[4rem] bg-slate-950 md:h-[calc(100vh_-_2rem)]">
      <Image
        alt="background"
        src="/assets/background_form.jpg"
        width={100}
        height={100}
        className="h-full w-full bg-white object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
      />

      <div className="absolute right-2 top-4 z-10">
        <FiArrowUpRight className="rotate-45 text-6xl text-indigo-200 opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        viewport={{ once: true }}
        className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-slate-950/90 to-slate-950/0 p-8"
      >
        <motion.h2
          className="mb-2 text-3xl font-semibold leading-[1.25] text-white lg:text-4xl"
          variants={primaryVariants}
        >
          Streaming for your Friends and
          <br />
          with your family
        </motion.h2>
        <motion.p
          variants={primaryVariants}
          className="mb-6 max-w-md text-sm text-slate-300"
        >
          Welcome to TwansWaiana, the ultimate destination for seamless video
          streaming. Whether you're a content creator, viewer, or administrator,
          this documentation will guide you through the essential steps to make
          the most out of our platform. Let's get started!
        </motion.p>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <motion.img
              variants={avatarVariants}
              className="h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/1.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/2.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/3.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/4.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/6.jpg"
            />
          </div>
          <div>
            <motion.div variants={primaryVariants} className="flex gap-0.5">
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <span className="ml-2 text-sm text-white">5.0</span>
            </motion.div>
            <motion.p
              variants={primaryVariants}
              className="text-xs text-slate-300"
            >
              from over HUB200 users
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-youtube absolute left-[50%] top-4 -translate-x-[50%] fill-slate-950 md:left-4 md:-translate-x-0"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
      <path d="M10 9l5 3l-5 3z" />
    </svg>
  );
};

const primaryVariants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const avatarVariants = {
  initial: {
    x: 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};
