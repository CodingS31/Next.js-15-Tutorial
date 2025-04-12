type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholders.typicode.com/users");
  const users: User[] = await response.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">👥 Server-Fetched User List</h1>
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
