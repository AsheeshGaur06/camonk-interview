import { useState } from "react"
import BlogList from "@/components/BlogList"
import BlogDetail from "@/components/BlogDetail"

export default function BlogPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-10 py-8">
      
      <div className="lg:col-span-4">
        <h2 className="font-semibold mb-4">Latest Articles</h2>
        <BlogList onSelect={setSelectedId} />
      </div>

      
      <div className="lg:col-span-8">
        <BlogDetail blogId={selectedId} />
      </div>
    </div>
  )
}
