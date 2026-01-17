import { Blog } from "../types/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

type Props = {
  blog: Blog;
  onSelect: (id: number) => void;
};

export default function BlogCard({ blog, onSelect }: Props) {
  return (
    <Card
      onClick={() => onSelect(blog.id)}
      className="cursor-pointer group hover:border-indigo-500 hover:shadow-md transition-all"
    >
      <CardContent className="p-4 space-y-3">
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {blog.category.map((cat) => (
              <Badge
                key={cat}
                className="bg-gray-300 text-white"
              >
                {cat}
              </Badge>
            ))}
          </div>

          <span className="text-xs text-gray-400">
            {new Date(blog.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>

       
        <h3 className="font-semibold text-lg group-hover:text-indigo-600 transition">
          {blog.title}
        </h3>

       
        <p className="text-sm text-gray-600 line-clamp-2">
          {blog.description}
        </p>

        
        <div className="flex items-center justify-end text-sm text-gray-400 group-hover:text-indigo-500 transition">
          <span className="mr-1">Read full blog</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </CardContent>
    </Card>
  );
}
