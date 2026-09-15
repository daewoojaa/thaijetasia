"use client";

import type { RefObject } from "react";
import Editable from "./Editable";
import { DEFAULT_TRIP } from "@/lib/flights";
import styles from "./SearchCard.module.css";

type SearchCardProps = {
  locked: boolean;
  onSwap: () => void;
  onSearch: () => void;
  originRef: RefObject<HTMLDivElement | null>;
  originCodeRef: RefObject<HTMLDivElement | null>;
  destRef: RefObject<HTMLDivElement | null>;
  destCodeRef: RefObject<HTMLDivElement | null>;
  dateRef: RefObject<HTMLDivElement | null>;
  paxRef: RefObject<HTMLDivElement | null>;
};

export default function SearchCard({
  locked,
  onSwap,
  onSearch,
  originRef,
  originCodeRef,
  destRef,
  destCodeRef,
  dateRef,
  paxRef,
}: SearchCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.locRow}>
        <div className={styles.locBlock}>
          <div className={styles.label}>ขาไป</div>
          <Editable
            ref={originRef}
            defaultValue={DEFAULT_TRIP.origin}
            locked={locked}
            className={styles.city}
          />
          <Editable
            ref={originCodeRef}
            defaultValue={DEFAULT_TRIP.originCode}
            locked={locked}
            className={styles.code}
          />
        </div>

        <div className={styles.swap} onClick={onSwap} title="สลับต้นทาง/ปลายทาง">
          ⇄
        </div>

        <div className={`${styles.locBlock} ${styles.locBlockRight}`}>
          <div className={styles.label}>ไปยัง</div>
          <Editable
            ref={destRef}
            defaultValue={DEFAULT_TRIP.dest}
            locked={locked}
            className={styles.city}
          />
          <Editable
            ref={destCodeRef}
            defaultValue={DEFAULT_TRIP.destCode}
            locked={locked}
            className={styles.code}
          />
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.row2}>
        <div className={styles.field}>
          <div className={styles.label}>วันที่เดินทาง</div>
          <Editable
            ref={dateRef}
            defaultValue={DEFAULT_TRIP.date}
            locked={locked}
            className={styles.value}
          />
        </div>
        <div className={styles.field}>
          <div className={styles.label}>จำนวนผู้โดยสาร</div>
          <Editable
            ref={paxRef}
            defaultValue={DEFAULT_TRIP.pax}
            locked={locked}
            className={styles.value}
          />
        </div>
      </div>

      <div className={styles.searchBtn} onClick={onSearch}>
        ค้นหาเที่ยวบิน
      </div>
    </div>
  );
}
