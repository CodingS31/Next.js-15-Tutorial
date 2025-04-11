// components/client-component-one.tsx
"use client";

import ServerComponentOne from "./server-component-one";

export default function ClientComponentOne({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Client Component one</h1>
      {children}
    </>
  );
}
