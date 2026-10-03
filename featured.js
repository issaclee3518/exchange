const FEATURED_PAGES = {
  japan: "japan.html",
  vietnam: "vietnam.html",
  thailand: "thailand.html",
  usa: "usa.html",
  taiwan: "taiwan.html",
  philippines: "philippines.html",
  singapore: "singapore.html",
  hongkong: "hongkong.html",
  australia: "australia.html",
  france: "france.html",
};

function featuredPageFor(id) {
  return FEATURED_PAGES[id] || null;
}

function featuredIdFromPath() {
  const file = (location.pathname.split("/").pop() || "").toLowerCase();
  for (const [id, page] of Object.entries(FEATURED_PAGES)) {
    if (page === file) return id;
  }
  return null;
}

function prefetchFeatured(href) {
  if (!href || document.querySelector(`link[data-prefetch="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = href;
  link.as = "document";
  link.dataset.prefetch = href;
  document.head.appendChild(link);
}

function bindFeaturedPrefetch() {
  document.addEventListener(
    "pointerover",
    (event) => {
      const anchor = event.target.closest?.("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("?") || href.startsWith("#") || href.includes("//")) return;
      const file = href.split("?")[0].split("/").pop();
      if (Object.values(FEATURED_PAGES).includes(file)) prefetchFeatured(href.split("#")[0]);
    },
    { capture: true, passive: true }
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bindFeaturedPrefetch);
} else {
  bindFeaturedPrefetch();
}
