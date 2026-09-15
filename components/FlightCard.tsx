"use client";

import Editable from "./Editable";
import type { Flight } from "@/lib/flights";
import styles from "./FlightCard.module.css";
/* eslint-disable @next/next/no-img-element */

type FlightCardProps = {
  flight: Flight & { from: string; to: string };
  locked: boolean;
};

export default function FlightCard({ flight, locked }: FlightCardProps) {
  return (
    <div className={styles.card}>
      <img src="/brand/tja-mark.png" alt="THAI JET ASIA" className={styles.mark} />

      <div className={styles.middle}>
        <div className={styles.timesRow}>
          <Editable as="span" defaultValue={flight.dep} locked={locked} className={styles.time} />
          <span className={styles.timeSep} />
          <Editable as="span" defaultValue={flight.arr} locked={locked} className={styles.time} />
        </div>
        <div className={styles.metaRow}>
          <Editable as="span" defaultValue={flight.code} locked={locked} />
          <Editable as="span" defaultValue={flight.from} locked={locked} />
          <span>→</span>
          <Editable as="span" defaultValue={flight.to} locked={locked} />
          <Editable as="span" defaultValue={flight.dur} locked={locked} />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.priceBlock}>
          <span className={styles.priceLabel}>เริ่มต้น</span>
          <Editable
            as="span"
            defaultValue={flight.price}
            locked={locked}
            className={styles.price}
          />
        </div>
        <span className={styles.chevron}>›</span>
      </div>
    </div>
  );
}
