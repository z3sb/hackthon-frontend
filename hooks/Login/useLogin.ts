import { useRouter } from "next/router";

function useLogin() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const router = useRouter();

  if (token) {
    router.replace("/");
  }
}

export default useLogin;
