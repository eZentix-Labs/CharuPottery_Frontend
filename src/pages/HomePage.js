import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import ProductCard from '../components/product/ProductCard';
import useReveal from '../hooks/useReveal';
import './HomePage.css';

export default function HomePage() {
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [featRes, catRes] = await Promise.all([
          api.get('/products/featured'),
          api.get('/categories'),
        ]);
        setFeatured(featRes.data.data?.slice(0, 4) || []);
        setCategories(catRes.data.data || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  useReveal([loading]);

  return (
    <div className="home">
      {/* ── Featured collections ─────────────────────────── */}
      <section className="section collections" id="collections">
        <div className="container">
          <div className="section-center reveal">
            <h2 className="section-title display">Featured Collections</h2>
            <div className="ornament"><span /></div>
          </div>

          {categories.length > 0 && (
            <div className="category-grid">
              {categories.map((cat) => (
                <Link key={cat._id} to={`/products?category=${cat._id}`} className="category-card reveal">
                  {cat.image?.url && <img src={cat.image.url} alt={cat.name} loading="lazy" />}
                  <div className="category-overlay">
                    <h3 className="display">{cat.name}</h3>
                    <span>Explore →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!loading && featured.length > 0 && (
            <>
              <div className="section-header" style={{ marginTop: 56 }}>
                <div>
                  <p className="section-eyebrow">Curated Selection</p>
                  <h2 className="section-title display">Bestsellers</h2>
                </div>
                <Link to="/products?isFeatured=true" className="btn btn-outline">View All</Link>
              </div>
              <div className="product-grid">
                {featured.map((p) => <ProductCard key={p._id} product={p} />)}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="village-divider container" aria-hidden="true" />

      {/* ── CTA banner ───────────────────────────────────── */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2 className="display cta-title">Made to order, made for you</h2>
            <p className="cta-sub">Many of our pieces can be custom-made. Reach out to discuss a commission.</p>
          </div>
          <Link to="/contact" className="btn btn-light">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
