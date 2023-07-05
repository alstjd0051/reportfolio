import { getServerSession } from "next-auth";
import React from "react";
import { POST } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import SignIn from "@/components/commons/layout/SignIn";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

const SignInPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession(POST);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-[30%]">
      <SignIn providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
};

export default SignInPage;
