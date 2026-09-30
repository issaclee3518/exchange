(function () {
  const language = (navigator.language || "").toLowerCase();
  const korean = language.startsWith("ko");
  document.documentElement.lang = korean ? "ko" : "en";
  document.querySelectorAll("[data-lang]").forEach((article) => {
    article.hidden = korean ? article.dataset.lang !== "ko" : article.dataset.lang !== "en";
  });
  const email = typeof SITE !== "undefined" ? SITE.email : "";
  document.querySelectorAll("[data-email]").forEach((node) => {
    if (!email) return;
    const link = document.createElement("a");
    link.href = "mailto:" + email;
    link.textContent = email;
    node.replaceChildren(link);
  });
})();
