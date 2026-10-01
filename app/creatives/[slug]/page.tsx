import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNavigation from "../../components/SiteNavigation";
import { formatPostDate, getCreativePosts } from "../../blog/posts";

export const revalidate = 3600;

export default async function CreativePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (await getCreativePosts()).find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main className="blog-page">
      <SiteNavigation />
      <article className="blog-article">
        <Link className="blog-back-link" href="/creatives">← All posts</Link>
        <p className="eyebrow"><span className="section-index">06</span> Outside the day job</p>
        <h1>{post.title}</h1>
        <time className="blog-article-date" dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
        <div className="blog-article-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        <a className="text-link blog-original-link" href={post.link} target="_blank" rel="noreferrer">
          View original on Substack <ArrowUpRightIcon />
        </a>
      </article>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <span aria-hidden="true">↗</span>;
}
