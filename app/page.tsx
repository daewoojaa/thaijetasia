"use client";

import { useRef, useState } from "react";
import AppBar from "@/components/AppBar";
import SearchCard from "@/components/SearchCard";
import FlightCard from "@/components/FlightCard";
import BottomNav from "@/components/BottomNav";
import { FLIGHTS } from "@/lib/flights";
import styles from "./page.module.css";

type Trip = {
  origin: string;
  dest: string;
  oc: string;
  dc: string;
  date: string;
  pax: string;
};

function readText(el: HTMLElement | null, fallback: string) {
  const v = (el?.textContent || "").trim();
  return v || fallback;
}

export default function Home() {
  const [searched, setSearched] = useState(false);
  const [sort, setSort] = useState<"time" | "price">("time");
  const [trip, setTrip] = useState<Trip | null>(null);
  const [locked, setLocked] = useState(false);

  const originRef = useRef<HTMLDivElement>(null);
  const originCodeRef = useRef<HTMLDivElement>(null);
  const destRef = useRef<HTMLDivElement>(null);
  const destCodeRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const paxRef = useRef<HTMLDivElement>(null);

  const runSearch = () => {
    setSearched(true);
    setTrip({
      origin: readText(originRef.current, "ต้นทาง"),
      dest: readText(destRef.current, "ปลายทาง"),
      oc: readText(originCodeRef.current, ""),
      dc: readText(destCodeRef.current, ""),
      date: readText(dateRef.current, ""),
      pax: readText(paxRef.current, ""),
    });
  };

  const swap = () => {
    const pairs: [typeof originRef, typeof destRef][] = [
      [originRef, destRef],
      [originCodeRef, destCodeRef],
    ];
    pairs.forEach(([a, b]) => {
      if (!a.current || !b.current) return;
      const t = a.current.textContent;
      a.current.textContent = b.current.textContent;
      b.current.textContent = t;
    });
    if (searched) runSearch();
  };

  const reset = () => {
    // Keep whatever text is currently in the search fields (edited or not) —
    // only hide the results and return to a fresh search state.
    setSearched(false);
    setSort("time");
    setTrip(null);
    setLocked(false);
    window.scrollTo(0, 0);
  };

  const toggleSort = () => setSort((s) => (s === "time" ? "price" : "time"));

  const toggleLock = () => {
    if (!locked && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setLocked((l) => !l);
  };

  let flights = FLIGHTS.map((f) => ({
    ...f,
    from: trip ? trip.oc : "",
    to: trip ? trip.dc : "",
  }));
  if (sort === "price") {
    flights = [...flights].sort((a, b) => a.n - b.n);
  }

  const route = trip ? `${trip.origin} — ${trip.dest}` : "";
  const tripMeta = trip
    ? [trip.date, trip.pax, `${flights.length} เที่ยวบิน`].filter(Boolean).join(" · ")
    : "";
  const sortLabel = sort === "time" ? "⇅ เรียงตามเวลา" : "⇅ เรียงตามราคา";

  return (
    <div className={styles.page}>
      <AppBar onReset={reset} />

      <div className={styles.content}>
        <SearchCard
          locked={locked}
          onSwap={swap}
          onSearch={runSearch}
          originRef={originRef}
          originCodeRef={originCodeRef}
          destRef={destRef}
          destCodeRef={destCodeRef}
          dateRef={dateRef}
          paxRef={paxRef}
        />

        {searched && (
          <div className={styles.results}>
            <div className={styles.resultsHeader}>
              <div className={styles.resultsHeaderText}>
                <div className={styles.resultsKicker}>เที่ยวบินขาไป</div>
                <div className={styles.route}>{route}</div>
                <div className={styles.tripMeta}>{tripMeta}</div>
              </div>
              <div className={styles.sortPill} onClick={toggleSort}>
                {sortLabel}
              </div>
            </div>

            <div className={styles.flightList}>
              {flights.map((f, i) => (
                <FlightCard key={f.code + i} flight={f} locked={locked} />
              ))}
            </div>

            <div className={styles.footnote}>ราคารวมภาษีและค่าธรรมเนียม</div>
          </div>
        )}
      </div>

      <BottomNav onToggleLock={toggleLock} />
    </div>
  );
}
