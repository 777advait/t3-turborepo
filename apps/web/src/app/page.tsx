import UserForm from "@/components/UserForm";
import { api, HydrateClient } from "@/lib/trpc/server";
import UserList from "@/components/UserList";

export const dynamic = "force-dynamic";

export default async function Hero() {
  await api.user.getUsers.prefetch();
  return (
    <HydrateClient>
      <main className="space-y-4">
        <UserForm />
        <UserList />
      </main>
    </HydrateClient>
  );
}
