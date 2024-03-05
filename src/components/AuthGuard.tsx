// AuthGuard.tsx
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export function AuthGuard({ children }: { children: any }) {
  const router = useRouter();

  const { status } = useSession();

  if (status === "loading" || !router.isReady || !router.pathname)
    return <h1>Application Loading</h1>;

  if (router.isReady && !router.pathname.startsWith("/admin"))
    return <>{children}</>;

  if (status === "authenticated") {
    return <>{children}</>;
  }

  if (status === "unauthenticated") {
    router.push("/admin/login/");
  }

  return <div></div>;
}
