import { ArrowUpRight } from "lucide-react";
import SiteNavigation from "../components/SiteNavigation";
import { getCreativePosts } from "../blog/posts";
import CreativesTabs from "./CreativesTabs";

export const revalidate = 3600;

export default async function CreativesPage() {
  const posts = await getCreativePosts();

  return (
    <main className="blog-page">
      <SiteNavigation />
      <div className="blog-content">
        <div className="blog-heading">
          <div>
            <p className="eyebrow"><span className="section-index">06</span> Outside the day job</p>
            <h1>Creatives<span>.</span></h1>
          </div>
          <a className="text-link" href="https://sundarkp.substack.com/" target="_blank" rel="noreferrer">
            Open on Substack <ArrowUpRight size={16} />
          </a>
        </div>
        <CreativesTabs posts={posts} />
      </div>
    </main>
  );
}
