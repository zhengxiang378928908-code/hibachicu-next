import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | Hibachi Tips, Party Ideas & Planning Guides",
  description:
    "Hibachi catering tips, backyard party planning guides, pricing breakdowns, and private chef insights from Hibachi CU.",
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
  openGraph: {
    title: "Hibachi CU Blog | Tips, Ideas & Guides",
    description:
      "Hibachi catering tips, backyard party planning guides, pricing breakdowns, and private chef insights.",
    url: absoluteUrl("/blog"),
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 pb-24 pt-28 md:px-8 md:pt-36">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ffb786]">
            Blog
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Tips, Ideas & Planning Guides
          </h1>
          <p className="mt-4 max-w-2xl text-[#ddc1b0] md:text-lg">
            Everything you need to know about hosting a private hibachi
            experience at home.
          </p>

          {posts.length === 0 ? (
            <p className="mt-16 text-[#ddc1b0]/60">
              New articles coming soon — stay tuned!
            </p>
          ) : (
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl p-6 transition-colors hover:bg-[#443833]"
                  style={{ background: "var(--color-surface-container-low)" }}
                >
                  {post.image && (
                    <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <time className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb786]">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-3 text-xl font-semibold leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#ddc1b0]">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
