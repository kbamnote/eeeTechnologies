import { useEffect } from "react";

// Simple SEO hook to set title and meta tags
export function useSEO({
  title,
  description,
  keywords,
  canonical,
  openGraph = {},
  twitter = {},
}) {
  useEffect(() => {
    if (title) document.title = title;
    setMeta("description", description);
    setMeta("keywords", keywords);
    setLink("canonical", canonical);

    // Open Graph
    setProperty("og:title", openGraph.title || title);
    setProperty("og:description", openGraph.description || description);
    setProperty("og:type", openGraph.type || "website");
    setProperty("og:url", openGraph.url || canonical || window.location.href);
    setProperty("og:image", openGraph.image);

    // Twitter Card
    setName("twitter:card", twitter.card || "summary_large_image");
    setName("twitter:title", twitter.title || title);
    setName("twitter:description", twitter.description || description);
    setName("twitter:image", twitter.image || openGraph.image);
  }, [title, description, keywords, canonical, openGraph, twitter]);
}

function setMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setName(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setProperty(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel, href) {
  if (!href) return;
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}