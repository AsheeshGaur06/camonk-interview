import { useState } from "react";
import BlogList from "@/components/BlogList";
import BlogDetail from "@/components/BlogDetail";
import CreateBlogForm from "@/components/CreateBlogForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        <div className="space-y-6">
          <CreateBlogForm />
          <BlogList onSelect={setSelectedId} />
        </div>

        <div className="lg:col-span-2">
          <BlogDetail blogId={selectedId} />
        </div>
      </div>

      <Footer />
    </>
  );
}
