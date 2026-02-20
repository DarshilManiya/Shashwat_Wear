import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import WhatsAppButton from '../../../components/WhatsAppButton';
import blogs from '../../../data/blogs.json';

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

export default function BlogPostPage({ params }) {
  const post = blogs.posts.find((p) => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <TopBar />
      <Header activePage="blog" />

      <article className="blog-post">
        {/* Hero Section */}
        <section className="blog-hero">
          <div className="blog-hero-image">
            <Image 
              src={post.img} 
              alt={post.title} 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="blog-hero-overlay" />
          </div>
          <div className="blog-hero-content">
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="blog-meta">
              <span className="blog-date">{post.date}</span>
              <span className="blog-divider">•</span>
              <span className="blog-read-time">{post.readTime}</span>
              <span className="blog-divider">•</span>
              <span className="blog-author">{post.author}</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="blog-content-section">
          <div className="blog-content-wrapper">
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />').replace(/## /g, '<h2>').replace(/### /g, '<h3>') }} />
            
            {/* Tags */}
            <div className="blog-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag">#{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="blog-cta">
          <div className="blog-cta-content">
            <h2>Looking for a Manufacturing Partner?</h2>
            <p>At Shashwat Wear, we specialize in high-quality garment manufacturing for import-export businesses worldwide.</p>
            <Link href="/contact" className="blog-cta-button">Get in Touch</Link>
          </div>
        </section>

        {/* Related Posts */}
        <section className="related-posts-section">
          <div className="related-posts-wrapper">
            <h3>Related Articles</h3>
            <div className="related-posts-grid">
              {blogs.posts
                .filter((p) => p.slug !== post.slug && p.category === post.category)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link 
                    href={`/blog/${relatedPost.slug}`} 
                    key={relatedPost.slug}
                    className="related-post-card"
                  >
                    <div className="related-post-image">
                      <Image 
                        src={relatedPost.img} 
                        alt={relatedPost.title} 
                        width={300} 
                        height={200}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="related-post-content">
                      <span className="related-post-category">{relatedPost.category}</span>
                      <h4>{relatedPost.title}</h4>
                      <span className="related-post-date">{relatedPost.date}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </article>

      <Footer />
      <WhatsAppButton />

      <style jsx>{`
        .blog-post {
          background: #fff;
        }

        .blog-hero {
          position: relative;
          height: 400px;
          overflow: hidden;
        }

        .blog-hero-image {
          position: absolute;
          inset: 0;
        }

        .blog-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%);
        }

        .blog-hero-content {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 3rem;
          max-width: 1200px;
          margin: 0 auto;
          color: #fff;
        }

        .blog-category {
          display: inline-block;
          background: var(--primary-color, #b8860b);
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
          width: fit-content;
        }

        .blog-hero-content h1 {
          font-size: 2.5rem;
          line-height: 1.2;
          margin-bottom: 1rem;
          max-width: 800px;
        }

        .blog-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          opacity: 0.9;
        }

        .blog-divider {
          opacity: 0.5;
        }

        .blog-content-section {
          padding: 4rem 1.5rem;
        }

        .blog-content-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .blog-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333;
        }

        .blog-content :global(h2) {
          font-size: 1.75rem;
          margin: 2rem 0 1rem;
          color: #1a1a1a;
          font-weight: 600;
        }

        .blog-content :global(h3) {
          font-size: 1.35rem;
          margin: 1.5rem 0 0.75rem;
          color: #2a2a2a;
          font-weight: 600;
        }

        .blog-content :global(strong) {
          color: #1a1a1a;
        }

        .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #eee;
        }

        .blog-tag {
          background: #f5f5f5;
          color: #666;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          transition: all 0.3s ease;
        }

        .blog-tag:hover {
          background: #e8e8e8;
          color: #333;
        }

        .blog-cta {
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          padding: 4rem 1.5rem;
          text-align: center;
        }

        .blog-cta-content {
          max-width: 600px;
          margin: 0 auto;
          color: #fff;
        }

        .blog-cta-content h2 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }

        .blog-cta-content p {
          opacity: 0.85;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .blog-cta-button {
          display: inline-block;
          background: var(--primary-color, #b8860b);
          color: #fff;
          padding: 1rem 2rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .blog-cta-button:hover {
          background: #d4a017;
          transform: translateY(-2px);
        }

        .related-posts-section {
          padding: 4rem 1.5rem;
          background: #fafafa;
        }

        .related-posts-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .related-posts-wrapper h3 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #1a1a1a;
        }

        .related-posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .related-post-card {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .related-post-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .related-post-image {
          height: 180px;
          overflow: hidden;
        }

        .related-post-content {
          padding: 1.25rem;
        }

        .related-post-category {
          font-size: 0.75rem;
          color: var(--primary-color, #b8860b);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .related-post-content h4 {
          font-size: 1.1rem;
          margin: 0.5rem 0;
          color: #1a1a1a;
          line-height: 1.4;
        }

        .related-post-date {
          font-size: 0.85rem;
          color: #888;
        }

        @media (max-width: 768px) {
          .blog-hero {
            height: 300px;
          }

          .blog-hero-content {
            padding: 2rem 1.5rem;
          }

          .blog-hero-content h1 {
            font-size: 1.75rem;
          }

          .blog-meta {
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .blog-content {
            font-size: 1rem;
          }

          .related-posts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}