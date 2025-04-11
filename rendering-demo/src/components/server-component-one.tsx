// components/server-component-one.tsx
import fs from "fs";

export default function ServerComponentOne() {
  fs.readFileSync("src/components/server-component-one.tsx", "utf8");
  return (
    <>
      <h1>Server Component one</h1>
    </>
  );
}
