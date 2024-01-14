import { useRouter } from "next/router";
import Cookies from 'js-cookie'

function useLogin() {
  const token = Cookies.get("ACCESS_TOKEN");
  const router = useRouter();

  if (token) {
    router.replace("/");
  }
}

export default useLogin;
