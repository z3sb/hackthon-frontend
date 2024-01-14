"use client"; 
import { useRouter } from "next/router"; 
import Cookies from 'js-cookie'

function useLayout() {
  const token = Cookies.get("ACCESS_TOKEN"); 
  const router = useRouter(); 

  if (!token) {
    router.replace("/login");
  }
}

export default useLayout;
