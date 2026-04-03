import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookNowLink from "@/components/BookNowLink";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig, absoluteUrl } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: absoluteUrl(`/blog/${post.slug}`),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.date,
      ...(post.image && {
        images: [{ url: absoluteUrl(post.image), width: 1200, height: 630 }],
      }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: absoluteUrl("/blog"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: absoluteUrl(`/blog/${post.slug}`),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
      },
      mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
      ...(post.image && {
        image: absoluteUrl(post.image),
      }),
    },
  ];

  return (
    <>
      <Header />
      <main className="relative isolate overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <article className="mx-auto max-w-3xl px-6 pb-24 pt-28 md:px-8 md:pt-36">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-[#ffb786] hover:underline"
          >
            <span className="material-symbols-outlined text-base">
              arrow_back
            </span>
            All Posts
          </Link>

          <time className="mt-8 block text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb786]">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-[#ddc1b0]">{post.description}</p>

          {post.image && (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div
            className="blog-content mt-12"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div
            className="mt-16 rounded-2xl p-8 text-center"
            style={{ background: "var(--color-surface-container-low)" }}
          >
            <h2 className="text-2xl font-semibold">
              Ready to Book Your Hibachi Experience?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-[#ddc1b0]">
              Private hibachi chef at your home — backyard, patio, or vacation
              rental. Pick your date and lock it in.
            </p>
            <div className="mt-6">
              <BookNowLink className="btn-primary">Book Your Date</BookNowLink>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
