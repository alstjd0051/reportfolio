import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useLoading = () => {
  const [nowLoading, setNowLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const start = () => {
      return setNowLoading(true);
    };
    const end = () => {
      setNowLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router]);

  return nowLoading ? true : false;
};
