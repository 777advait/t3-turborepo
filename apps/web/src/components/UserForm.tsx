"use client";

import { useState } from "react";
import { api } from "@/lib/trpc/client";
import { Button } from "@repo/ui/components/button";

export default function UserForm() {
  const [name, setName] = useState("");
  const [id, setId] = useState<number>(0);
  const utils = api.useUtils();
  const addUser = api.user.addUser.useMutation({
    onSettled: () => {
      utils.user.getUsers.invalidate();
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addUser.mutate({ id, name });
  };

  return (
    <form
      className="flex w-1/2 flex-col space-y-4 rounded-md border p-4 py-4"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded border p-1.5"
      />
      <label htmlFor="id">ID</label>
      <input
        type="text"
        id="id"
        value={id}
        onChange={(e) => setId(Number(e.target.value))}
        className="rounded border p-1.5"
      />
      <Button disabled={addUser.isPending} type="submit">
        {addUser.isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
