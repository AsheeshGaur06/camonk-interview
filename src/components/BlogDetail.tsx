import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/api/blogs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BlogDetailSkeleton } from "./BlogSkeleton";

export default function BlogDetail({
  blogId,
}: {
  blogId: number | null;
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId!),
    enabled: !!blogId,
  });

  if (!blogId) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-center px-6">
        <p className="text-lg text-gray-600 max-w-md leading-relaxed">
          Stay updated with the latest trends in finance, accounting, and career
          growth
        </p>
      </div>
    );
  }

  if (isLoading) return <BlogDetailSkeleton />;

  if (isError || !data) {
    return (
      <div className="text-red-500">
        Failed to load blog details.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <img
        src={data.coverImage}
        className="rounded-xl w-full h-[320px] object-cover"
      />

      <h1 className="text-3xl font-bold">{data.title}</h1>

      
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
        {data.category.map((cat) => (
          <Badge
            key={cat}
            className="bg-black text-white hover:bg-blue-700"
          >
            {cat}
          </Badge>
        ))}


        <span>
          {new Date(data.date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>

      <Separator />

      <h2 className="text-xl font-bold">{data.description}</h2>

      <p className="text-gray-700 leading-relaxed">
        {data.content}
      </p>
    </div>
  );
}
