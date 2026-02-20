import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import WhatsAppButton from '../../../components/WhatsAppButton';
import blogs from '../../../data/blogs.json';
import styles from './page.module.css';

export async function generateStaticParams() {
  return blogs.posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = blogs.posts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Blog Not Found' };
  
  return {
    title: `${post.title} | Shashwat Wear Blog`,
    description: post.excerpt,
  };
}

function BlogContent({ content }) {
  // Parse markdown-like content to HTML
  let html = content
    .replace(/\n/g, '<br />')
    .replace(/## (.*)/g, '<h2>$1</h2>')
    .replace(/### (.*)/g, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  return <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function BlogPostPage({ params }) {
  const post = blogs.posts.find((p) => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogs.posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

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
              <span>{post.date}</span>
              <span className={styles.divider}>•</span>
              <span>{post.readTime}</span>
              <span className={styles.divider}>•</span>
              <span>{post.author}</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <div className={styles.contentWrapper}>
            <BlogContent content={post.content} />
            
            {/* Tags */}
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>#{tag}</span>
              ))}
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
                        style={{ objectFit: 'cover' }}
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
      <WhatsAppButton />
    </>
  );
}