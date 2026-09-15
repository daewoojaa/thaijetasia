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
    <div className={styles.card} data-flight={flight.code}>
      <img src="/brand/tja-mark.png" alt="THAI JET ASIA" className={styles.mark} />

      <div className={styles.middle}>
        <div className={styles.timesRow}>
          <Editable
            as="span"
            field="dep"
            defaultValue={flight.dep}
            locked={locked}
            className={styles.time}
          />
          <span className={styles.timeSep} />
          <Editable
            as="span"
            field="arr"
            defaultValue={flight.arr}
            locked={locked}
            className={styles.time}
          />
        </div>
        <div className={styles.metaRow}>
          <Editable as="span" field="code" defaultValue={flight.code} locked={locked} />
          <Editable as="span" field="from" defaultValue={flight.from} locked={locked} />
          <span>→</span>
          <Editable as="span" field="to" defaultValue={flight.to} locked={locked} />
          <Editable as="span" field="dur" defaultValue={flight.dur} locked={locked} />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.priceBlock}>
          <span className={styles.priceLabel}>เริ่มต้น</span>
          <Editable
            as="span"
            field="price"
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
