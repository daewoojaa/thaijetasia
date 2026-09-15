"use client";

import styles from "./AppBar.module.css";
/* eslint-disable @next/next/no-img-element */

type AppBarProps = {
  onReset: () => void;
};

export default function AppBar({ onReset }: AppBarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.row}>
        <div
          className={styles.hamburger}
          onClick={onReset}
          title="รีเซ็ทการค้นหา"
        >
          <span className={styles.bunLine} />
          <span className={styles.bunLine} />
          <span className={styles.bunLine} />
        </div>

        <img
          src="/brand/tja-wordmark.png"
          alt="THAI JET ASIA"
          className={styles.logo}
        />

        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className={styles.account}>
          <circle cx="12" cy="8" r="4" stroke="#54607d" strokeWidth="1.7" />
          <path
            d="M4.5 20c0-4.1 3.4-6.5 7.5-6.5s7.5 2.4 7.5 6.5"
            stroke="#54607d"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className={styles.tabs}>
        <div className={`${styles.tab} ${styles.tabActive}`}>จองเที่ยวบิน</div>
        <div className={styles.tab}>เช็คอิน</div>
        <div className={styles.tab}>จัดการการจอง</div>
      </div>
    </div>
  );
}
