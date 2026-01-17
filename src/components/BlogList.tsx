import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/api/blogs";
import BlogCard from "./BlogCard";
import { BlogListSkeleton } from "./BlogSkeleton";

export default function BlogList({
  onSelect,
}: {
  onSelect: (id: number) => void;
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <BlogListSkeleton />;

  if (isError) {
    return (
      <div className="text-red-500 text-sm">
        Failed to load blogs. Please try again.
      </div>
    );
  }

  if (!data?.length) {
    return <div className="text-gray-500">No blogs found.</div>;
  }

  return (
    <div className="space-y-4">
      {data.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onSelect={onSelect} />
      ))}
    </div>
  );
}
