export type Flight = {
  /** Stable identity for this seed row — not displayed, never edited. Every
   * flight currently shares the same visible `code`, so this is what list
   * keys and edit-override storage key off instead. */
  id: string;
  dep: string;
  arr: string;
  code: string;
  dur: string;
  price: string;
  n: number;
};

export const FLIGHTS: Flight[] = [
  { id: "f1", dep: "06:20", arr: "07:50", code: "TJ1432", dur: "1 ชม. 30 น.", price: "฿1,490", n: 1490 },
  { id: "f2", dep: "09:40", arr: "11:10", code: "TJ1432", dur: "1 ชม. 30 น.", price: "฿1,540", n: 1540 },
  { id: "f3", dep: "11:00", arr: "12:30", code: "TJ1432", dur: "1 ชม. 30 น.", price: "฿1,590", n: 1590 },
  { id: "f4", dep: "15:00", arr: "16:05", code: "TJ1432", dur: "1 ชม. 5 น.", price: "฿1,740", n: 1740 },
  { id: "f5", dep: "19:50", arr: "21:20", code: "TJ1432", dur: "1 ชม. 30 น.", price: "฿1,890", n: 1890 },
];

export const DEFAULT_SEATS_LABEL = "ที่นั่งจำกัด";

export const DEFAULT_TRIP = {
  origin: "สกลนคร",
  originCode: "SNO",
  dest: "ดอนเมือง",
  destCode: "DMK",
  date: "15 ก.ย. 2569",
  pax: "1 คน",
};
