"use client";

import { api } from "@/lib/trpc/client";

export default function UserList() {
  const [users] = api.user.getUsers.useSuspenseQuery();
  return (
    <div>
      <pre>Users: {JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
