"use client";

import { api } from "@/lib/trpc/client";

export default function Hero() {
  const { data, isLoading, error } = api.user.getUsers.useQuery();

  return (
    <main className="">
      {isLoading
        ? "Loading..."
        : error
          ? "Error while fetching the data"
          : JSON.stringify(data, null, 2)}
    </main>
  );
}
