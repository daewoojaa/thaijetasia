"use client";

import styles from "./BottomNav.module.css";

type BottomNavProps = {
  onToggleLock: () => void;
};

export default function BottomNav({ onToggleLock }: BottomNavProps) {
  return (
    <div className={styles.nav}>
      <div className={`${styles.item} ${styles.itemActive}`}>
        <span className={styles.iconCircle} />
        ค้นหา
      </div>
      <div className={styles.item}>
        <span className={styles.iconRect} />
        การจองของฉัน
      </div>
      <div className={styles.item} onClick={onToggleLock}>
        <span className={styles.iconLock} />
        เช็คอิน
      </div>
      <div className={styles.item}>
        <span className={styles.iconDots}>···</span>
        เพิ่มเติม
      </div>
    </div>
  );
}
