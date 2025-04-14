"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { Role } from "../../../types/globals";

export async function setRole(formData: FormData) {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role !== "admin") {
    throw new Error("Not authorized");
  }

  const client = await clerkClient();
  const id = formData.get("id") as string;
  const role = formData.get("role") as Role;

  try {
    await client.users.updateUser(id, {
      publicMetadata: { role },
    });
    revalidatePath("/admin");
  } catch {
    throw new Error("Failed to set role");
  }
}

export async function removeRole(formData: FormData) {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role !== "admin") {
    throw new Error("Not authorized");
  }

  const client = await clerkClient();
  const id = formData.get("id") as string;

  try {
    await client.users.updateUser(id, {
      publicMetadata: { role: null },
    });
    revalidatePath("/admin");
  } catch {
    throw new Error("Failed to remove role");
  }
}
