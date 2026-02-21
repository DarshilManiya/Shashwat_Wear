import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import blogs from '../../../data/blogs.json';
import styles from './page.module.css';

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  if (!post) return { title: 'Blog Not Found' };

  return {
    title: `${post.title} | Shashwat Wear Blog`,
    description: post.excerpt,
  };
}

function parseMarkdownToHtml(content) {
  const lines = content.split('\n');
  let html = '';
  let inUl = false;
  let inOl = false;
  let inParagraph = false;

  const closeLists = () => {
    let result = '';
    if (inUl) { result += '</ul>'; inUl = false; }
    if (inOl) { result += '</ol>'; inOl = false; }
    return result;
  };

  const closeParagraph = () => {
    let result = '';
    if (inParagraph) { result += '</p>'; inParagraph = false; }
    return result;
  };

  const formatInline = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Empty line — close everything
    if (trimmed === '') {
      html += closeLists();
      html += closeParagraph();
      continue;
    }

    // H2
    if (trimmed.startsWith('## ') && !trimmed.startsWith('### ')) {
      html += closeLists();
      html += closeParagraph();
      const headingText = formatInline(trimmed.slice(3));
      const id = headingText.replace(/<[^>]*>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      html += `<h2 id="${id}">${headingText}</h2>`;
      continue;
    }

    // H3
    if (trimmed.startsWith('### ')) {
      html += closeLists();
      html += closeParagraph();
      const headingText = formatInline(trimmed.slice(4));
      const id = headingText.replace(/<[^>]*>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      html += `<h3 id="${id}">${headingText}</h3>`;
      continue;
    }

    // Unordered list item
    if (trimmed.startsWith('- ')) {
      html += closeParagraph();
      if (inOl) { html += '</ol>'; inOl = false; }
      if (!inUl) { html += '<ul>'; inUl = true; }
      html += `<li>${formatInline(trimmed.slice(2))}</li>`;
      continue;
    }

    // Ordered list item
    const olMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (olMatch) {
      html += closeParagraph();
      if (inUl) { html += '</ul>'; inUl = false; }
      if (!inOl) { html += '<ol>'; inOl = true; }
      html += `<li>${formatInline(olMatch[2])}</li>`;
      continue;
    }

    // Regular text → paragraph
    html += closeLists();
    if (!inParagraph) {
      html += '<p>';
      inParagraph = true;
    } else {
      html += ' ';
    }
    html += formatInline(trimmed);
  }

  html += closeLists();
  html += closeParagraph();

  return html;
}

function extractHeadings(content) {
  const headings = [];
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('## ') && !trimmed.startsWith('### ')) {
      const text = trimmed.slice(3).replace(/\*\*(.*?)\*\*/g, '$1');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headings.push({ text, id, level: 2 });
    } else if (trimmed.startsWith('### ')) {
      const text = trimmed.slice(4).replace(/\*\*(.*?)\*\*/g, '$1');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headings.push({ text, id, level: 3 });
    }
  }
  return headings;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogs
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const headings = extractHeadings(post.content);
  const contentHtml = parseMarkdownToHtml(post.content);

  return (
    <>
      <TopBar />
      <Header activePage="blog" />

      <article className={styles.article}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <Image
              src={post.img}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <span className={styles.category}>{post.category}</span>
            <h1>{post.title}</h1>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                {post.date}
              </span>
              <span className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                {post.readTime}
              </span>
              <span className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                {post.author}
              </span>
            </div>
          </div>
        </section>

        {/* Content Layout with Sidebar */}
        <section className={styles.contentSection}>
          <div className={styles.contentLayout}>
            {/* Table of Contents Sidebar */}
            {headings.length > 0 && (
              <aside className={styles.sidebar}>
                <div className={styles.tocCard}>
                  <h4 className={styles.tocTitle}>In This Article</h4>
                  <nav className={styles.tocNav}>
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`${styles.tocLink} ${heading.level === 3 ? styles.tocLinkSub : ''}`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            {/* Main Content */}
            <div className={styles.contentWrapper}>
              <div className={styles.content} dangerouslySetInnerHTML={{ __html: contentHtml }} />

              {/* Tags */}
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
              </div>

              {/* Share / Author Card */}
              <div className={styles.authorCard}>
                <div className={styles.authorAvatar}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorLabel}>Written by</span>
                  <strong className={styles.authorName}>{post.author}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2>Looking for a Manufacturing Partner?</h2>
            <p>At Shashwat Wear, we specialize in high-quality garment manufacturing for import-export businesses worldwide.</p>
            <Link href="/contact" className={styles.ctaButton}>Get in Touch</Link>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.relatedWrapper}>
              <h3>Related Articles</h3>
              <div className={styles.relatedGrid}>
                {relatedPosts.map((relatedPost) => (
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    key={relatedPost.slug}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedImage}>
                      <Image
                        src={relatedPost.img}
                        alt={relatedPost.title}
                        width={300}
                        height={200}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    </div>
                    <div className={styles.relatedContent}>
                      <span className={styles.relatedCategory}>{relatedPost.category}</span>
                      <h4>{relatedPost.title}</h4>
                      <span className={styles.relatedDate}>{relatedPost.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <Footer />

    </>
  );
}