# Aiingo Website Migration

SEO-safe migration of [aiingo.com](https://aiingo.com/) from WordPress to a GitHub-managed Next.js website.

## Migration principles

- Keep the live WordPress site unchanged until the replacement is verified.
- Preserve valuable URLs, content, metadata, canonicals, schema, and internal links.
- Add permanent redirects for every intentionally changed URL.
- Deploy previews before any DNS cutover.
- Validate the generated sitemap and robots.txt before launch.

Migration work is developed through pull requests and preview deployments.
