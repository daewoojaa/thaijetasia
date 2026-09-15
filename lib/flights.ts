export type Flight = {
  dep: string;
  arr: string;
  code: string;
  dur: string;
  price: string;
  n: number;
};

export const FLIGHTS: Flight[] = [
  { dep: "06:20", arr: "07:50", code: "TJ 1410", dur: "1 ชม. 30 น.", price: "฿1,490", n: 1490 },
  { dep: "08:05", arr: "09:35", code: "TJ 1412", dur: "1 ชม. 30 น.", price: "฿1,390", n: 1390 },
  { dep: "09:40", arr: "11:10", code: "TJ 1414", dur: "1 ชม. 30 น.", price: "฿1,540", n: 1540 },
  { dep: "11:00", arr: "12:30", code: "TJ 1416", dur: "1 ชม. 30 น.", price: "฿1,590", n: 1590 },
  { dep: "13:15", arr: "14:45", code: "TJ 1418", dur: "1 ชม. 30 น.", price: "฿1,650", n: 1650 },
  { dep: "14:45", arr: "16:20", code: "TJ 1420", dur: "1 ชม. 35 น.", price: "฿1,690", n: 1690 },
  { dep: "17:25", arr: "18:55", code: "TJ 1422", dur: "1 ชม. 30 น.", price: "฿1,790", n: 1790 },
  { dep: "19:50", arr: "21:20", code: "TJ 1424", dur: "1 ชม. 30 น.", price: "฿1,890", n: 1890 },
];

export const DEFAULT_TRIP = {
  origin: "สกลนคร",
  originCode: "SNO",
  dest: "ดอนเมือง",
  destCode: "DMK",
  date: "15 ก.ย. 2569",
  pax: "1 คน",
};
