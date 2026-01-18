import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/api/blogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function CreateBlogForm() {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    coverImage: "",
    content: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });

      setForm({
        title: "",
        description: "",
        category: "",
        coverImage: "",
        content: "",
      });

      setSuccessMessage("Blog published successfully ✅");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate({
      ...form,
      category: form.category
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean),
      date: new Date().toISOString(),
    });
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <h2 className="text-lg font-semibold">Create New Blog</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            placeholder="Title"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <Input
            placeholder="Short Description"
            required
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <Input
            placeholder="Categories (comma separated)"
            required
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />

          <Input
            placeholder="Cover Image URL"
            required
            value={form.coverImage}
            onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
          />

          <textarea
            className="w-full border rounded-md p-2 h-32"
            placeholder="Blog Content"
            required
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />

          {mutation.isError && (
            <p className="text-sm text-red-500">
              Failed to publish blog. Try again.
            </p>
          )}

          {successMessage && (
            <p className="text-sm text-green-600">{successMessage}</p>
          )}

          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Publishing..." : "Publish Blog"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
