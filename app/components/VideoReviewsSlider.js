"use client";

import React, { useRef } from "react";
import styles from "./VideoReviewsSlider.module.css";

const videoReviews = [
  {
    id: 1,
    name: "Trade Pulse Review",
    role: "Student",
    videoId: "hJoAkB5-fsA",
  },
  {
    id: 2,
    name: "Trade Pulse Review",
    role: "Student",
    videoId: "cloCFW44hGQ",
  },
  {
    id: 3,
    name: "Trade Pulse Review",
    role: "Student",
    videoId: "sLaiNb_RDfs",
  },
  {
    id: 4,
    name: "Trade Pulse Review",
    role: "Student",
    videoId: "pNhswVTg28U",
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
