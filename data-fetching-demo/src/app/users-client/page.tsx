// /app/users-client/page.tsx
"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p>⏳ Loading users...</p>;
  if (error) return <p>❌ Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">👥 User List</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="border p-4 rounded shadow">
            <p>
              <strong>🧑 Name:</strong> {user.name}
            </p>
            <p>
              <strong>🆔 Username:</strong> {user.username}
            </p>
            <p>
              <strong>📧 Email:</strong> {user.email}
            </p>
            <p>
              <strong>📞 Phone:</strong> {user.phone}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
