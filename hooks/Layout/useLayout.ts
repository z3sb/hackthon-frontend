"use client";
import { useRouter } from "next/router";

function useLayout() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const router = useRouter();

  if (!token) {
    router.replace("/login");
  }
}

export default useLayout;
