import ServerComponent1 from "@/components/server-component-one";
import ServerComponent2 from "@/components/server-component-two";
import ClientComponent1 from "@/components/client-component-one";
import ClientComponent2 from "@/components/client-component-two";

export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving Page</h1>

      {/* Pattern 1: Server Component Inside Another Server Component */}
      {/* <ServerComponent1 /> */}

      {/* Pattern 2: Client Component Inside Another Client Component */}
      {/* <ClientComponent1 /> */}

      {/* Pattern 3: Client Component Inside a Server Component */}
      {/* <ServerComponent1 /> */}

      {/* Pattern 4:  Server Component Inside a Client Component */}
      {/* ❌ Uncommenting this throws error due to server logic in client scope */}

      {/* ✅ Workaround for Pattern 4 */}
      <ClientComponent1>
        <ServerComponent1 />
      </ClientComponent1>
    </>
  );
}
