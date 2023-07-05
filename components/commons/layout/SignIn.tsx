"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";
import ColorButton from "../items/ColorButton";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

const SignIn = ({ providers, callbackUrl }: Props) => {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          key={id}
          text={`Sign In with ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
          size="big"
        />
      ))}
    </>
  );
};

export default SignIn;
