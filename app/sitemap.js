export default function sitemap() {
    const baseUrl = 'https://shashwatwear.com';

    // Static routes
    const routes = [
        '',
        '/about',
        '/products',
        '/infrastructure',
        '/blog',
        '/gallery',
        '/contact',
        '/international',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Add blog posts dynamically if needed in future
    // For now, static list is fine as blog is hardcoded in page.js

    return [...routes];
}
