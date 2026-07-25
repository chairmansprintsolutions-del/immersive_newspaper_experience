"use client";

import { useState } from "react";

/**
 * ImmersiveNewspaper
 * A CSS-3D "flip book" newspaper — no Three.js / react-three-fiber needed.
 * Pure React + CSS perspective/transform. Works in any Next.js/React app
 * with zero extra dependencies.
 *
 * Usage:
 *   <ImmersiveNewspaper pages={pages} />
 *
 * pages = [
 *   { heading: "Breaking: ...", credit: "Source: Reuters", body: "Full text..." },
 *   ...
 * ]
 */
export default function ImmersiveNewspaper({ pages = [] }) {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);

  if (!pages.length) return null;

  const page = pages[current];
  const canPrev = current > 0;
  const canNext = current < pages.length - 1;

  const goPrev = () => canPrev && (setExpanded(false), setCurrent((c) => c - 1));
  const goNext = () => canNext && (setExpanded(false), setCurrent((c) => c + 1));

  return (
    <div style={styles.stage}>
      <div style={styles.perspectiveWrap}>
        <div
          key={current}
          style={{
            ...styles.sheet,
            transform: expanded ? "rotateY(0deg) scale(1.02)" : "rotateY(0deg)",
          }}
          className="newspaper-sheet"
        >
          <div style={styles.creaseLeft} />
          <div style={styles.creaseRight} />

          <div style={styles.masthead}>THE DAILY WIRE</div>

          <h1 style={styles.heading} onClick={() => setExpanded((e) => !e)}>
            {page.heading}
          </h1>
          {page.credit && <div style={styles.credit}>{page.credit}</div>}

          <p
            style={{
              ...styles.body,
              maxHeight: expanded ? "1000px" : "60px",
              opacity: expanded ? 1 : 0.85,
            }}
          >
            {page.body}
          </p>

          {!expanded && (
            <button style={styles.readMore} onClick={() => setExpanded(true)}>
              Tap to read full story
            </button>
          )}
        </div>
      </div>

      <div style={styles.nav}>
        <button style={styles.navBtn} onClick={goPrev} disabled={!canPrev}>
          ‹ Prev
        </button>
        <span style={styles.pageNum}>
          {current + 1} / {pages.length}
        </span>
        <button style={styles.navBtn} onClick={goNext} disabled={!canNext}>
          Next ›
        </button>
      </div>

      <style>{`
        .newspaper-sheet {
          animation: pageIn 0.45s ease;
        }
        @keyframes pageIn {
          from { transform: rotateY(-15deg); opacity: 0; }
          to   { transform: rotateY(0deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

const styles = {
  stage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "radial-gradient(circle at 50% 20%, #2b2b2b, #0e0e0e)",
    padding: "24px",
    fontFamily: "Georgia, 'Times New Roman', serif",
  },
  perspectiveWrap: {
    perspective: "1600px",
    width: "min(680px, 92vw)",
  },
  sheet: {
    position: "relative",
    background: "#f7f3e9",
    color: "#1a1a1a",
    borderRadius: "2px",
    padding: "36px 32px 44px",
    boxShadow:
      "0 20px 60px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(0,0,0,0.06)",
    transformStyle: "preserve-3d",
    transition: "transform 0.4s ease",
    cursor: "default",
  },
  creaseLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "6px",
    background: "linear-gradient(90deg, rgba(0,0,0,0.15), transparent)",
  },
  creaseRight: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "6px",
    background: "linear-gradient(270deg, rgba(0,0,0,0.15), transparent)",
  },
  masthead: {
    textAlign: "center",
    fontSize: "13px",
    letterSpacing: "4px",
    borderBottom: "2px solid #1a1a1a",
    borderTop: "2px solid #1a1a1a",
    padding: "6px 0",
    marginBottom: "18px",
  },
  heading: {
    fontSize: "26px",
    lineHeight: 1.25,
    margin: "0 0 6px",
    cursor: "pointer",
  },
  credit: {
    fontSize: "12px",
    color: "#555",
    fontStyle: "italic",
    marginBottom: "14px",
  },
  body: {
    fontSize: "15px",
    lineHeight: 1.6,
    overflow: "hidden",
    transition: "max-height 0.4s ease, opacity 0.3s ease",
  },
  readMore: {
    marginTop: "10px",
    background: "none",
    border: "none",
    borderBottom: "1px solid #1a1a1a",
    fontFamily: "inherit",
    fontSize: "13px",
    cursor: "pointer",
    padding: 0,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginTop: "20px",
  },
  navBtn: {
    background: "#1a1a1a",
    color: "#f7f3e9",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  pageNum: {
    color: "#ccc",
    fontSize: "13px",
  },
};
