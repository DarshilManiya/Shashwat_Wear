'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

const categories = ['All', "Men's Collection", "Women's Wear", "Kids Apparel", "Uniforms"];

const products = [
    // ============ MEN'S COLLECTION ============
    // Formal Shirts
    {
        id: 1, name: 'Premium Brown Formal Shirt', category: "Men's Collection",
        image: 'http://www.harmonshirts.in/cdn/shop/files/brown_2_d063f8b6-6b1e-4ada-810b-59719d9fe216.webp?v=1756729210',
        desc: 'Solid color loose casual long-sleeved shirt in brown — MOQ 500 pcs',
    },
    {
        id: 2, name: 'Classic Black Formal Shirt', category: "Men's Collection",
        image: 'http://www.harmonshirts.in/cdn/shop/files/black_1_1cf0b53d-c89f-42f7-88f2-4096af3728dc.webp?v=1756728976',
        desc: 'Timeless black formal shirt with premium finish — MOQ 500 pcs',
    },
    {
        id: 11, name: 'Royal Burgundy Formal Shirt', category: "Men's Collection",
        image: 'http://www.harmonshirts.in/cdn/shop/files/burgundy_1_1a63d924-883c-4cbd-a57d-044b052248d0.webp?v=1756729428',
        desc: 'Solid color loose casual long-sleeved shirt in burgundy — MOQ 500 pcs',
    },
    {
        id: 12, name: 'Emerald Green Formal Shirt', category: "Men's Collection",
        image: 'http://www.harmonshirts.in/cdn/shop/files/green_1_405f7500-40bb-40d0-ac70-add896fcaa20.webp?v=1756729085',
        desc: 'Solid color loose casual long-sleeved shirt in green — MOQ 500 pcs',
    },
    // Casual Wear
    {
        id: 3, name: 'Wooden Mandala Print Shirt', category: "Men's Collection",
        image: 'http://www.vestro.in/cdn/shop/files/CS_WOOD_MANDALA_2_f0e19ff1-d952-4b53-af09-6cb5e8313d1a.webp?v=1753524074',
        desc: 'All-day cotton classic shirt with wooden mandala print — MOQ 300 pcs',
    },
    {
        id: 4, name: 'Black Tulip Casual Shirt', category: "Men's Collection",
        image: 'http://www.vestro.in/cdn/shop/files/CS_BLACK_TULIP_2.webp?v=1753523740',
        desc: 'Pure cotton casual wear with black tulip design — MOQ 300 pcs',
    },
    {
        id: 5, name: 'Cream Leaf Easywear Shirt', category: "Men's Collection",
        image: 'http://www.vestro.in/cdn/shop/files/CS_LEAF_CREAM_2.webp?v=1753523902',
        desc: 'Easywear cotton shirt with subtle leaf print — MOQ 300 pcs',
    },
    {
        id: 6, name: 'Urban Floral Print Shirt', category: "Men's Collection",
        image: 'http://www.vestro.in/cdn/shop/files/CS_BIG_FLOWER_2.webp?v=1753531938',
        desc: 'Big flower printed urban cotton shirt — MOQ 300 pcs',
    },
    {
        id: 7, name: 'Coconut Tree Holiday Shirt', category: "Men's Collection",
        image: 'http://www.blackstitch.in/cdn/shop/files/WHITE_CCNT_TREE_4_00710bed-b739-4cdf-910f-e6f3f142a9ae.webp?v=1748582650',
        desc: 'Half sleeves printed shirt with coconut tree motif — MOQ 300 pcs',
    },
    {
        id: 8, name: 'Black Rose Comfort Shirt', category: "Men's Collection",
        image: 'http://www.blackstitch.in/cdn/shop/files/CS_BLACK_ROSES_2.webp?v=1757996744',
        desc: 'Classic cotton comfort shirt with black rose print — MOQ 300 pcs',
    },
    {
        id: 9, name: 'Blue Sparrow Print Shirt', category: "Men's Collection",
        image: 'http://www.blackstitch.in/cdn/shop/files/CS_BLUE_SPARROW_2.webp?v=1757996739',
        desc: 'Regular fit cotton staple with blue sparrow design — MOQ 300 pcs',
    },
    {
        id: 10, name: 'Designer Abstract Shirt', category: "Men's Collection",
        image: 'http://www.blackstitch.in/cdn/shop/files/CreamFacemask_1.webp?v=1748582371',
        desc: 'Exclusive designer half sleeves printed shirt — MOQ 300 pcs',
    },
    // Harmon Shirts
    {
        id: 101, name: 'Black Arrow Designer Shirt', category: "Men's Collection",
        image: 'https://www.harmonshirts.in/cdn/shop/files/TS_BL_ARROW_1_0a002565-9500-4423-9391-ab13cc9b20f0.webp?v=1759483399&width=533',
        desc: 'Exclusive designer printed shirt with arrow motif — MOQ 300 pcs',
    },
    {
        id: 102, name: 'Black Floral Cord Set', category: "Men's Collection",
        image: 'https://www.harmonshirts.in/cdn/shop/files/BLACK_FLORAL_1_eec3e260-9bf4-44be-bfac-6c5613483949.webp?v=1727327876&width=533',
        desc: 'Men\'s half sleeves cords cotton material with floral design — MOQ 300 pcs',
    },
    {
        id: 103, name: 'Black Illusion Shirt', category: "Men's Collection",
        image: 'https://www.harmonshirts.in/cdn/shop/files/TS_BLACK_ILLUSION_1_710d843b-6014-45ac-a99c-614dd6fba4da.webp?v=1759483154&width=533',
        desc: 'Abstract illusion printed designer shirt — MOQ 300 pcs',
    },
    {
        id: 104, name: 'Black Lipstick Print', category: "Men's Collection",
        image: 'https://www.harmonshirts.in/cdn/shop/files/XPST_BLACK_LIPSTICK_1.webp?v=1765781614&width=533',
        desc: 'Essential everyday cotton shirt with unique print — MOQ 300 pcs',
    },
    {
        id: 105, name: 'Black Solid Cord Set', category: "Men's Collection",
        image: 'https://www.harmonshirts.in/cdn/shop/files/BLACK_SOLID_1_bd56efff-4629-42c9-8404-7e8f0b0cef79.webp?v=1727327865&width=533',
        desc: 'Solid black cords set in premium cotton — MOQ 300 pcs',
    },
    {
        id: 106, name: 'Black Tree Print', category: "Men's Collection",
        image: 'https://www.harmonshirts.in/cdn/shop/files/SS_BLACK_TREE_1.webp?v=1735964145&width=533',
        desc: 'Nature-inspired black tree printed shirt — MOQ 300 pcs',
    },
    {
        id: 107, name: 'Blue Striped Designer', category: "Men's Collection",
        image: 'https://www.harmonshirts.in/cdn/shop/files/TS_Blue_White_Stripped_1.webp?v=1759483155&width=533',
        desc: 'Blue and white striped designer shirt — MOQ 300 pcs',
    },
    {
        id: 108, name: 'Blue Coconut Print', category: "Men's Collection",
        image: 'https://www.harmonshirts.in/cdn/shop/files/TS_BL_COCONUT_1_74c78eb6-6b13-42a9-9805-5304c77555a3.webp?v=1759483305&width=533',
        desc: 'Tropical coconut print shirt in blue — MOQ 300 pcs',
    },
    {
        id: 109, name: 'Blue Drink GenZ Shirt', category: "Men's Collection",
        image: 'https://www.harmonshirts.in/cdn/shop/files/genz_blue_drink_1.webp?v=1763720848&width=533',
        desc: 'Trendy aesthetic street-style shirt — MOQ 300 pcs',
    },
    {
        id: 110, name: 'Blue Geometry Print', category: "Men's Collection",
        image: 'https://www.harmonshirts.in/cdn/shop/files/TS_BLUE_GEOMETRY_1_32c465a7-ebd3-458b-bfa8-3463a04ce468.webp?v=1759481145&width=533',
        desc: 'Geometric pattern printed shirt — MOQ 300 pcs',
    },
    {
        id: 111, name: 'Brown GenZ Vibe', category: "Men's Collection",
        image: 'https://www.harmonshirts.in/cdn/shop/files/genz_brown_1.webp?v=1763720885&width=533',
        desc: 'Street-style ready brown aesthetic shirt — MOQ 300 pcs',
    },
    {
        id: 112, name: 'Classy Brown Set', category: "Men's Collection",
        image: 'https://www.harmonshirts.in/cdn/shop/files/CLASSY_BROWN_SHADE_1_7e0d894e-7444-4c56-91fe-087079903103.webp?v=1735290648&width=533',
        desc: 'Full set trouser and shirt in brown shade — MOQ 300 pcs',
    },
    // Vestro
    {
        id: 201, name: 'Beach Printed GenZ', category: "Men's Collection",
        image: 'https://www.vestro.in/cdn/shop/files/genz_beach_1.webp?v=1770634384&width=533',
        desc: 'Trendy beach print shirt for urban wear — MOQ 300 pcs',
    },
    {
        id: 202, name: 'Big Flower Urban', category: "Men's Collection",
        image: 'https://www.vestro.in/cdn/shop/files/CS_BIG_FLOWER_2.webp?v=1753531938&width=533',
        desc: 'Bold floral print cotton shirt — MOQ 300 pcs',
    },
    {
        id: 203, name: 'Bird Printed GenZ', category: "Men's Collection",
        image: 'https://www.vestro.in/cdn/shop/files/genz_bird_1.webp?v=1770634388&width=533',
        desc: 'Aesthetic bird print street-style shirt — MOQ 300 pcs',
    },
    {
        id: 204, name: 'Black Border Set', category: "Men's Collection",
        image: 'https://www.vestro.in/cdn/shop/files/CRDS_BLACK_BORDER_1.webp?v=1762333948&width=533',
        desc: 'Casual half sleeve shirt and full pant set — MOQ 300 pcs',
    },
    {
        id: 205, name: 'Black GenZ Vibe', category: "Men's Collection",
        image: 'https://www.vestro.in/cdn/shop/files/genz_black_1.webp?v=1770634390&width=533',
        desc: 'Premium fancy black shirt — MOQ 300 pcs',
    },
    {
        id: 206, name: 'Black Leaf Set', category: "Men's Collection",
        image: 'https://www.vestro.in/cdn/shop/files/CRDS_BLACK_LEAF_1_68a23f56-953b-4c77-aeb0-bb0baeed55ec.webp?v=1762333928&width=533',
        desc: 'Black leaf print co-ord set — MOQ 300 pcs',
    },
    {
        id: 207, name: 'Black Splash Print', category: "Men's Collection",
        image: 'https://www.vestro.in/cdn/shop/files/CS_BLACK_SPLASH_2.webp?v=1753523685&width=533',
        desc: 'Essential everyday cotton shirt with splash design — MOQ 300 pcs',
    },
    {
        id: 208, name: 'Blue Lipstick Print', category: "Men's Collection",
        image: 'https://www.vestro.in/cdn/shop/files/XPST_BLUE_LIPSTICK_1.webp?v=1770634241&width=533',
        desc: 'Quirky lipstick print shirt in blue — MOQ 300 pcs',
    },
    {
        id: 209, name: 'Brown Mandala GenZ', category: "Men's Collection",
        image: 'https://www.vestro.in/cdn/shop/files/genz_brown_mandala_1.webp?v=1770634392&width=533',
        desc: 'Mandala print aesthetic shirt — MOQ 300 pcs',
    },
    {
        id: 210, name: 'Cartoon Printed GenZ', category: "Men's Collection",
        image: 'https://www.vestro.in/cdn/shop/files/genz_cartoon_1.webp?v=1770634246&width=533',
        desc: 'Fun cartoon print street-style shirt — MOQ 300 pcs',
    },
    // Blackstitch
    {
        id: 301, name: 'Black Fire Street', category: "Men's Collection",
        image: 'https://www.blackstitch.in/cdn/shop/files/XPST_SR_BLK_FIRE_1_165x.webp?v=1770722528',
        desc: 'Premium full-sleeve shirt with fire print — MOQ 300 pcs',
    },
    {
        id: 302, name: 'Luxury Korean Co-ord', category: "Men's Collection",
        image: 'https://www.blackstitch.in/cdn/shop/files/HD_CORDS_BLACK_3_165x.webp?v=1746503580',
        desc: 'Full co-ord set trouser and shirt in Korean style — MOQ 300 pcs',
    },
    {
        id: 303, name: 'Black Mandala Street', category: "Men's Collection",
        image: 'https://www.blackstitch.in/cdn/shop/files/XPST_SR_BLK_MANDALA_1_165x.webp?v=1770722772',
        desc: 'Street style premium full-sleeve shirt — MOQ 300 pcs',
    },
    {
        id: 304, name: 'Black Naruto Street', category: "Men's Collection",
        image: 'https://www.blackstitch.in/cdn/shop/files/XPST_SR_BLK_NARUTO_1_165x.webp?v=1770722832',
        desc: 'Anime-inspired premium full-sleeve shirt — MOQ 300 pcs',
    },
    {
        id: 305, name: 'Black Rose Classic', category: "Men's Collection",
        image: 'https://www.blackstitch.in/cdn/shop/files/CS_BLACK_ROSES_2_165x.webp?v=1757996744',
        desc: 'Classic cotton comfort shirt with rose print — MOQ 300 pcs',
    },
    {
        id: 306, name: 'Blue Sparrow Regular', category: "Men's Collection",
        image: 'https://www.blackstitch.in/cdn/shop/files/CS_BLUE_SPARROW_2_165x.webp?v=1757996739',
        desc: 'Regular fit cotton staple with sparrow design — MOQ 300 pcs',
    },
    {
        id: 307, name: 'Brown Luxury Co-ord', category: "Men's Collection",
        image: 'https://www.blackstitch.in/cdn/shop/files/HD_CORDS_BROWN_1_91f2685c-6b42-46d5-9281-e7f4466a38fd_165x.webp?v=1747392444',
        desc: 'Brown luxury Korean style co-ord set — MOQ 300 pcs',
    },
    // Trousers (also under Men's Collection)
    {
        id: 13, name: 'Khaki Chinos', category: "Men's Collection",
        gradient: 'linear-gradient(135deg, #C3B091 0%, #8B7355 100%)',
        desc: 'Twill cotton chinos with stretch — MOQ 300 pcs',
    },
    {
        id: 14, name: 'Navy Formal Trouser', category: "Men's Collection",
        gradient: 'linear-gradient(135deg, #1B2A4A 0%, #2C3E6B 100%)',
        desc: 'Polyester-viscose blend formal trouser — MOQ 500 pcs',
    },

    // ============ KIDS APPAREL ============
    {
        id: 15, name: 'Kids Colorful T-Shirts', category: "Kids Apparel",
        image: '/images/kids-apparel.png',
        desc: 'Soft cotton kids tees with fun prints — MOQ 200 pcs',
    },
    {
        id: 16, name: 'Kids Denim Shorts', category: "Kids Apparel",
        gradient: 'linear-gradient(135deg, #4169E1 0%, #1E3A5F 100%)',
        desc: 'Lightweight denim shorts for ages 4-12 — MOQ 200 pcs',
    },

    // ============ UNIFORMS ============
    {
        id: 17, name: 'Corporate Blazer Set', category: "Uniforms",
        image: '/images/uniforms.png',
        desc: 'Premium corporate uniform blazer with custom embroidery — MOQ 100 pcs',
    },
    {
        id: 18, name: 'Industrial Workwear', category: "Uniforms",
        gradient: 'linear-gradient(135deg, #36454F 0%, #2F4F4F 100%)',
        desc: 'Heavy-duty workwear with reinforced stitching — MOQ 200 pcs',
    },

    // ============ WOMEN'S WEAR ============
    {
        id: 19, name: 'Elegant Kurti Collection', category: "Women's Wear",
        image: '/images/womens-wear.png',
        desc: 'Printed and embroidered kurtis in premium fabrics — MOQ 200 pcs',
    },
    {
        id: 20, name: 'Formal Women\'s Blouse', category: "Women's Wear",
        gradient: 'linear-gradient(135deg, #DEB887 0%, #BC8F8F 100%)',
        desc: 'Chiffon and georgette formal blouses — MOQ 300 pcs',
    },
];

import styles from './page.module.css';

function GalleryContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');

    const [activeFilter, setActiveFilter] = useState('All');
    const [lightboxItem, setLightboxItem] = useState(null);

    // Set initial filter from URL
    useEffect(() => {
        if (categoryParam && categories.includes(categoryParam)) {
            setActiveFilter(categoryParam);
        }
    }, [categoryParam]);

    const filteredProducts = activeFilter === 'All'
        ? products
        : products.filter(p => p.category === activeFilter);

    const currentIdx = lightboxItem ? filteredProducts.findIndex(p => p.id === lightboxItem.id) : -1;

    const goNext = () => {
        if (currentIdx < filteredProducts.length - 1) setLightboxItem(filteredProducts[currentIdx + 1]);
    };
    const goPrev = () => {
        if (currentIdx > 0) setLightboxItem(filteredProducts[currentIdx - 1]);
    };

    return (
        <>
            <Header activePage="gallery" />
            <main>
                {/* Gallery Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className="section-label">OUR COLLECTION</div>
                        <h1>Product Gallery</h1>
                        <p>Explore our range of export-quality garments manufactured for leading brands worldwide.</p>
                    </div>
                </section>

                {/* Filter Bar */}
                <section className={styles.gallerySection}>
                    <div className={styles.filterBar}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
                                onClick={() => setActiveFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <motion.div className={styles.grid} layout>
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    className={styles.item}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setLightboxItem(product)}
                                >
                                    <div className={styles.itemImage}>
                                        {product.image ? (
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <div className={styles.gradientPlaceholder} style={{ background: product.gradient }}>
                                                <span>{product.name.split(' ').map(w => w[0]).join('')}</span>
                                            </div>
                                        )}
                                        <div className={styles.itemOverlay}>
                                            <span className={styles.zoomIcon}>↗</span>
                                        </div>
                                    </div>
                                    <div className={styles.itemInfo}>
                                        <span className={styles.itemCategory}>{product.category}</span>
                                        <h3>{product.name}</h3>
                                        <p>{product.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* CTA */}
                    <div className={styles.cta}>
                        <p>Interested in bulk manufacturing? We offer custom sampling and private labeling.</p>
                        <a href="/#contact" className="btn-primary">REQUEST A QUOTE</a>
                    </div>
                </section>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {lightboxItem && (
                        <motion.div
                            className={styles.lightbox}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setLightboxItem(null)}
                        >
                            <motion.div
                                className={styles.lightboxContent}
                                initial={{ scale: 0.85, y: 30 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.85, y: 30 }}
                                transition={{ type: 'spring', damping: 25 }}
                                onClick={e => e.stopPropagation()}
                            >
                                <button className={styles.lightboxClose} onClick={() => setLightboxItem(null)}>✕</button>
                                <div className={styles.lightboxImage}>
                                    {lightboxItem.image ? (
                                        <Image
                                            src={lightboxItem.image}
                                            alt={lightboxItem.name}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div className={styles.gradientPlaceholder} style={{ background: lightboxItem.gradient }}>
                                            <span>{lightboxItem.name}</span>
                                        </div>
                                    )}
                                </div>
                                <div className={styles.lightboxDetails}>
                                    <span className={styles.itemCategory}>{lightboxItem.category}</span>
                                    <h2>{lightboxItem.name}</h2>
                                    <p>{lightboxItem.desc}</p>
                                    <a href="/#contact" className="btn-primary">INQUIRE ABOUT THIS PRODUCT</a>
                                </div>
                                <div className={styles.lightboxNav}>
                                    <button
                                        className={styles.lightboxNavBtn}
                                        onClick={goPrev}
                                        disabled={currentIdx <= 0}
                                    >
                                        ← Prev
                                    </button>
                                    <span className={styles.lightboxCounter}>{currentIdx + 1} / {filteredProducts.length}</span>
                                    <button
                                        className={styles.lightboxNavBtn}
                                        onClick={goNext}
                                        disabled={currentIdx >= filteredProducts.length - 1}
                                    >
                                        Next →
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}

export default function GalleryPage() {
    return (
        <Suspense fallback={null}>
            <GalleryContent />
        </Suspense>
    );
}
