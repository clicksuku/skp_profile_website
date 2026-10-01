"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Images } from "lucide-react";
import { formatPostDate, type BlogPost } from "../blog/posts";

const PHOTOS_ALBUM_URL = "https://photos.app.goo.gl/1uCmFaHnxjMbwU9E6";

export default function CreativesTabs({ posts }: { posts: BlogPost[] }) {
  const [tab, setTab] = useState<"posts" | "photos">("posts");

  return (
    <>
      <div className="creatives-tabs" role="tablist" aria-label="Creatives sections">
        <button role="tab" aria-selected={tab === "posts"} className={tab === "posts" ? "active" : ""} onClick={() => setTab("posts")}>
          Posts
        </button>
        <button role="tab" aria-selected={tab === "photos"} className={tab === "photos" ? "active" : ""} onClick={() => setTab("photos")}>
          Photos
        </button>
      </div>

      {tab === "posts" && (
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
      )}

      {tab === "photos" && (
        <a className="photo-embed" href={PHOTOS_ALBUM_URL} target="_blank" rel="noreferrer">
          <Images size={34} />
          <h2>Photo album</h2>
          <p>Travel, people, and places outside work — hosted on Google Photos.</p>
          <span className="photo-embed-cta">Open album on Google Photos <ArrowUpRight size={15} /></span>
        </a>
      )}
    </>
  );
}
