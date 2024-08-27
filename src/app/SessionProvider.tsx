"use client";
import { SessionProvider as Provider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  pageSession: any;
};

export default function SessionProvider({ children, pageSession }: Props) {
  return <Provider session={pageSession}>{children}</Provider>;
}
