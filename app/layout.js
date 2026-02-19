import "./globals.css";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import EnquiryPopup from "../components/EnquiryPopup";
import FloatingContact from "../components/FloatingContact";
import CursorGlow from "../components/CursorGlow";
import { Toaster } from 'sonner';
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: "Shashwat Wear | Premium Apparel Manufacturing",
  description: "Specializing in high-volume production of premium cotton shirts, corporate uniforms, and private label garments for global brands.",
  keywords: "apparel manufacturing, cotton shirts, corporate uniforms, private label garments, textile manufacturing",
  openGraph: {
    title: "Shashwat Wear | Premium Apparel Manufacturing",
    description: "Your trusted partner for high-volume premium garment production. We specialize in cotton shirts, uniforms, and private label apparel.",
    url: 'https://shashwatwear.com',
    siteName: 'Shashwat Wear',
    images: [
      {
        url: '/images/hero-bg.png', // Assuming this exists, or use a specific og-image
        width: 1200,
        height: 630,
        alt: 'Shashwat Wear Manufacturing Facility',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shashwat Wear | Premium Apparel Manufacturing",
    description: "Premium apparel manufacturing for global brands. High-quality production, ethical standards, and timely delivery.",
    images: ['/images/hero-bg.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shashwat Wear",
              "url": "https://shashwatwear.com",
              "logo": "https://shashwatwear.com/images/logo.png",
              "description": "Premium apparel manufacturing for global brands.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Survey No. 123, GIDC Industrial Area",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380015",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-98765-43210",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.instagram.com/shashwatwear",
                "https://www.linkedin.com/company/shashwatwear"
              ]
            })
          }}
        />
        <ScrollProgress />
        <BackToTop />
        <EnquiryPopup />
        <FloatingContact />
        <CursorGlow />
        <Toaster position="top-center" richColors />
        <NextTopLoader color="#D4A843" height={3} showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
