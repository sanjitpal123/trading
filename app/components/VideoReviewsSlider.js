"use client";

import React, { useRef } from "react";
import styles from "./VideoReviewsSlider.module.css";

const videoReviews = [
  {
    id: 1,
    name: "James T.",
    role: "Funded Trader",
    videoId: "dQw4w9WgXcQ", // Placeholder - swap later
  },
  {
    id: 2,
    name: "Sarah L.",
    role: "Pro Member",
    videoId: "jfKfPfyJRdk", // Placeholder
  },
  {
    id: 3,
    name: "Michael R.",
    role: "Bootcamp Graduate",
    videoId: "tgbNymZ7vqY", // Placeholder
  },
  {
    id: 4,
    name: "Elena P.",
    role: "Full-time Trader",
    videoId: "ScMzIvxBSi4", // Placeholder
  }
];

export default function VideoReviewsSlider() {
  const sliderRef = useRef(null);

  return (
    <div className={styles.sliderContainer}>
      <h3 className={styles.sliderTitle} style={{ color: '#fff' }}><span className="text-gradient">Video</span> Testimonials</h3>
      <div className={styles.sliderTrack} ref={sliderRef}>
        {videoReviews.map((review) => (
          <div key={review.id} className={styles.sliderCard}>
            <div className={styles.videoWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${review.videoId}`}
                title={`Review by ${review.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className={styles.reviewInfo}>
              <div className={styles.reviewName}>{review.name}</div>
              <div className={styles.reviewRole}>{review.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
