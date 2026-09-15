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
    <div className={styles.card} data-flight={flight.id}>
      <div className={styles.top}>
        <div className={styles.codeGroup}>
          <img src="/brand/tja-icon.png" alt="" className={styles.planeIcon} />
          <Editable as="span" field="code" defaultValue={flight.code} locked={locked} />
        </div>
      </div>

      <div className={styles.timesRow}>
        <Editable
          as="span"
          field="dep"
          defaultValue={flight.dep}
          locked={locked}
          className={styles.time}
        />
        <div className={styles.durationCol}>
          <Editable as="span" field="dur" defaultValue={flight.dur} locked={locked} />
        </div>
        <Editable
          as="span"
          field="arr"
          defaultValue={flight.arr}
          locked={locked}
          className={`${styles.time} ${styles.timeRight}`}
        />
      </div>

      <div className={styles.airportRow}>
        <Editable as="span" field="from" defaultValue={flight.from} locked={locked} />
        <span className={styles.nonstop}>บินตรง</span>
        <Editable
          as="span"
          field="to"
          defaultValue={flight.to}
          locked={locked}
          className={styles.airportRight}
        />
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <span className={styles.details}>รายละเอียดเที่ยวบิน</span>
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
      </div>
    </div>
  );
}
