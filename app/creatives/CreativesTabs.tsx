"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { formatPostDate, type BlogPost } from "../blog/posts";
import type { Photo } from "./photos";

const PHOTOS_ALBUM_URL = "https://photos.app.goo.gl/1uCmFaHnxjMbwU9E6";

export default function CreativesTabs({ posts, photos }: { posts: BlogPost[]; photos: Photo[] }) {
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
        <>
          <div className="photo-grid">
            {photos.map((photo) => (
              <a
                className="photo-card"
                key={photo.id}
                href={PHOTOS_ALBUM_URL}
                target="_blank"
                rel="noreferrer"
                title="Open on Google Photos"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                <span className="photo-card-caption">{photo.alt}</span>
              </a>
            ))}
          </div>
          <a className="text-link photo-album-link" href={PHOTOS_ALBUM_URL} target="_blank" rel="noreferrer">
            View full album on Google Photos <ArrowUpRight size={16} />
          </a>
        </>
      )}
    </>
  );
}
