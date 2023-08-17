"use client"; // will be using hooks so can't use server-side rendering

import { useState, useEffect } from "react";
import { getProviders, signIn } from "next-auth/react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
};

type Providers = Record<string, Provider>;

function AuthProviders() {
  const [providers, setProviders] = useState<Providers | null>(null);

  if (providers)
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <button key={i}>{provider.id}</button>
        ))}
      </div>
    );
}

export default AuthProviders;
