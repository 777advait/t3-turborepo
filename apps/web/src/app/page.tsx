import UserForm from "@/components/UserForm";
import { api, HydrateClient } from "@/lib/trpc/server";
import UserList from "@/components/UserList";

export default async function Hero() {
  void api.user.getUsers();

  return (
    <HydrateClient>
      <main className="space-y-4">
        <UserList />
        <UserForm />
      </main>
    </HydrateClient>
  );
}
