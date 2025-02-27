"use client";

import { useForm } from "react-hook-form";
import { api } from "@/lib/trpc/client";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@repo/ui/components/form";

export default function UserForm() {
  const utils = api.useUtils();
  const addUser = api.user.addUser.useMutation({
    onSettled: async () => {
      await utils.user.getUsers.invalidate();
    },
    onError: async (error) => {
      // TODO: show a toast
      console.error(error);
    },
  });

  const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "John Doe",
      email: "john@example.com",
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    try {
      await addUser.mutateAsync(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="mx-auto my-4 w-1/4 rounded-md border bg-card p-6 shadow-md">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="off"
                    placeholder="Enter your name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="off"
                    placeholder="Enter your email"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
