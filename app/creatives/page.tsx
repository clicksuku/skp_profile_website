import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteNavigation from "../components/SiteNavigation";
import { formatPostDate, getCreativePosts } from "../blog/posts";

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
        <div className="blog-post-list">
          {posts.map((post, index) => (
            <article className="blog-post-card" key={post.slug}>
              <span className="blog-post-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="blog-post-copy">
                <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                <h2><Link href={`/creatives/${post.slug}`}>{post.title}</Link></h2>
                <p>{post.summary}</p>
                <Link className="blog-read-link" href={`/creatives/${post.slug}`}>Read article <ArrowUpRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
