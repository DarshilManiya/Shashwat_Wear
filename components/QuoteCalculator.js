'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTshirt, FaBoxes, FaPalette, FaLayerGroup, FaArrowRight } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const productTypes = [
    { id: 'mens-shirts', label: "Men's Shirts", icon: '👔', basePrice: 4.50 },
    { id: 'womens-wear', label: "Women's Wear", icon: '👗', basePrice: 5.00 },
    { id: 'kids-apparel', label: 'Kids Apparel', icon: '🧒', basePrice: 3.80 },
    { id: 'corporate-uniforms', label: 'Corporate Uniforms', icon: '🏢', basePrice: 6.00 },
    { id: 'private-label', label: 'Private Label', icon: '🏷️', basePrice: 5.50 },
];

const fabricTypes = [
    { id: 'cotton', label: 'Cotton', multiplier: 1.0 },
    { id: 'linen', label: 'Linen', multiplier: 1.25 },
    { id: 'poly-blend', label: 'Polyester Blend', multiplier: 0.85 },
    { id: 'silk-blend', label: 'Silk Blend', multiplier: 1.60 },
    { id: 'organic-cotton', label: 'Organic Cotton', multiplier: 1.35 },
];

const customizationLevels = [
    { id: 'basic', label: 'Basic', desc: 'Standard patterns & colors', multiplier: 1.0, icon: '⚡' },
    { id: 'standard', label: 'Standard', desc: 'Custom print or embroidery', multiplier: 1.20, icon: '✨' },
    { id: 'premium', label: 'Premium', desc: 'Full custom design + packaging', multiplier: 1.45, icon: '💎' },
];

const MIN_QTY = 200;

import styles from './QuoteCalculator.module.css';

export default function QuoteCalculator() {
    const [product, setProduct] = useState(productTypes[0]);
    const [fabric, setFabric] = useState(fabricTypes[0]);
    const [customization, setCustomization] = useState(customizationLevels[0]);
    const [quantity, setQuantity] = useState(500);
    const [showResult, setShowResult] = useState(false);

    const handleQuantityChange = (val) => {
        const num = Math.max(MIN_QTY, parseInt(val) || MIN_QTY);
        setQuantity(num);
    };

    const calculatePrice = () => {
        const unitPrice = product.basePrice * fabric.multiplier * customization.multiplier;
        // Volume discount
        let discount = 0;
        if (quantity >= 5000) discount = 0.15;
        else if (quantity >= 2000) discount = 0.10;
        else if (quantity >= 1000) discount = 0.05;

        const discountedUnit = unitPrice * (1 - discount);
        const total = discountedUnit * quantity;
        return { unitPrice: discountedUnit, total, discount: discount * 100 };
    };

    const handleEstimate = () => {
        setShowResult(true);
        toast.info("Estimate Calculated", {
            description: "Scroll down to see your price breakdown."
        });
    };

    const result = calculatePrice();

    return (
        <AnimatedSection className={`section ${styles.calculator}`} id="quote-calculator">
            <div className="section-container">
                <div className="section-label">INSTANT QUOTE</div>
                <h2 className="section-title">Get Your Estimated Price</h2>
                <div className="section-underline" />
                <p className="section-subtitle">
                    Configure your order below and get an instant price estimate. Final pricing may vary based on specifications.
                </p>

                <div className={styles.layout}>
                    <div className={styles.form}>
                        {/* Product Type */}
                        <div className={styles.group}>
                            <label className={styles.label}>
                                <FaTshirt /> Product Type
                            </label>
                            <div className={styles.optionsGrid}>
                                {productTypes.map((p) => (
                                    <button
                                        key={p.id}
                                        className={`${styles.optionCard} ${product.id === p.id ? styles.active : ''}`}
                                        onClick={() => { setProduct(p); setShowResult(false); }}
                                    >
                                        <span className={styles.optionIcon}>{p.icon}</span>
                                        <span className={styles.optionLabel}>{p.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Fabric Type */}
                        <div className={styles.group}>
                            <label className={styles.label}>
                                <FaLayerGroup /> Fabric Type
                            </label>
                            <div className={styles.fabricPills}>
                                {fabricTypes.map((f) => (
                                    <button
                                        key={f.id}
                                        className={`${styles.pill} ${fabric.id === f.id ? styles.active : ''}`}
                                        onClick={() => { setFabric(f); setShowResult(false); }}
                                    >
                                        {f.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Customization Level */}
                        <div className={styles.group}>
                            <label className={styles.label}>
                                <FaPalette /> Customization Level
                            </label>
                            <div className={styles.customGrid}>
                                {customizationLevels.map((c) => (
                                    <button
                                        key={c.id}
                                        className={`${styles.customCard} ${customization.id === c.id ? styles.active : ''}`}
                                        onClick={() => { setCustomization(c); setShowResult(false); }}
                                    >
                                        <span className={styles.customIcon}>{c.icon}</span>
                                        <h4>{c.label}</h4>
                                        <p>{c.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className={styles.group}>
                            <label className={styles.label}>
                                <FaBoxes /> Quantity <span className={styles.moqNote}>(Min. {MIN_QTY} pcs)</span>
                            </label>
                            <div className={styles.quantityRow}>
                                <button
                                    className={styles.qtyBtn}
                                    onClick={() => { handleQuantityChange(quantity - 100); setShowResult(false); }}
                                >−</button>
                                <input
                                    type="number"
                                    className={styles.qtyInput}
                                    value={quantity}
                                    onChange={(e) => { handleQuantityChange(e.target.value); setShowResult(false); }}
                                    min={MIN_QTY}
                                />
                                <button
                                    className={styles.qtyBtn}
                                    onClick={() => { handleQuantityChange(quantity + 100); setShowResult(false); }}
                                >+</button>
                            </div>
                            {quantity >= 1000 && (
                                <div className={styles.volumeBadge}>
                                    🎉 Volume discount: {result.discount}% off
                                </div>
                            )}
                        </div>

                        <button className={styles.estimateBtn} onClick={handleEstimate}>
                            CALCULATE ESTIMATE <FaArrowRight />
                        </button>
                    </div>

                    {/* Result Panel */}
                    <div className={styles.resultPanel}>
                        <div className={styles.resultHeader}>
                            <h3>Price Estimate</h3>
                            <p>Based on your configuration</p>
                        </div>

                        <AnimatePresence mode="wait">
                            {showResult ? (
                                <motion.div
                                    key="result"
                                    className={styles.resultBody}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className={styles.resultSummary}>
                                        <div className={styles.resultItem}>
                                            <span>Product</span>
                                            <strong>{product.label}</strong>
                                        </div>
                                        <div className={styles.resultItem}>
                                            <span>Fabric</span>
                                            <strong>{fabric.label}</strong>
                                        </div>
                                        <div className={styles.resultItem}>
                                            <span>Customization</span>
                                            <strong>{customization.label}</strong>
                                        </div>
                                        <div className={styles.resultItem}>
                                            <span>Quantity</span>
                                            <strong>{quantity.toLocaleString()} pcs</strong>
                                        </div>
                                        {result.discount > 0 && (
                                            <div className={`${styles.resultItem} ${styles.discount}`}>
                                                <span>Volume Discount</span>
                                                <strong>−{result.discount}%</strong>
                                            </div>
                                        )}
                                    </div>
                                    <div className={styles.resultDivider} />
                                    <div className={styles.priceDisplay}>
                                        <div className={styles.unitPrice}>
                                            <span>Per Unit</span>
                                            <strong>${result.unitPrice.toFixed(2)}</strong>
                                        </div>
                                        <div className={styles.totalPrice}>
                                            <span>Estimated Total</span>
                                            <strong>${result.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                        </div>
                                    </div>
                                    <p className={styles.disclaimer}>
                                        * Estimated pricing for reference only. Final quote may vary based on exact specifications, fabric sourcing, and order details.
                                    </p>
                                    <a href="#contact" className={styles.ctaBtn}>
                                        REQUEST DETAILED QUOTE <FaArrowRight />
                                    </a>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="placeholder"
                                    className={styles.resultPlaceholder}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className={styles.placeholderIcon}>📊</div>
                                    <p>Configure your order and click<br /><strong>&quot;Calculate Estimate&quot;</strong><br />to see pricing</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
