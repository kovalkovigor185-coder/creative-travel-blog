export const ROAD = 'M 120 740 C 120 570 410 720 410 545 C 410 395 155 455 190 310 C 225 160 620 195 680 360 C 745 540 1025 640 1110 455 C 1200 260 890 280 965 130 C 1005 50 1200 45 1290 120';

const trees = [
  [825, 660, 1.2], [870, 685, .8], [920, 700, 1], [990, 740, 1.3], [1050, 680, 1.1],
  [1130, 680, .85], [1180, 620, 1.4], [1250, 660, .9], [1310, 580, 1.1],
  [520, 80, 1], [565, 100, .8], [610, 65, 1.2], [690, 110, 1], [745, 75, 1.2],
  [55, 175, .9], [90, 135, 1], [110, 200, .85], [45, 245, 1.25],
];

function Tree({ x, y, scale }: { x: number; y: number; scale: number }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <ellipse cx="9" cy="10" rx="20" ry="7" fill="#354936" opacity=".12" />
    <path d="M0-32 17-6H9L22 13H-22L-9-6H-17Z" fill="#6a7952" />
    <path d="M0-32V13H-22L-9-6H-17Z" fill="#4f6449" />
    <path d="M0 13V21" stroke="#6b5940" strokeWidth="3" />
  </g>;
}

export default function RouteMap() {
  return <svg className="route-map" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <defs>
      <pattern id="map-grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M80 0H0V80" fill="none" stroke="#665642" strokeOpacity=".08" strokeWidth="1" /></pattern>
      <pattern id="map-grain" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="4" cy="5" r=".6" fill="#352416" opacity=".12" /><circle cx="13" cy="15" r=".5" fill="#352416" opacity=".08" /></pattern>
      <linearGradient id="water" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b3d7dd" /><stop offset="1" stopColor="#d0e6df" /></linearGradient>
      <linearGradient id="sand" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e9d9b3" /><stop offset="1" stopColor="#f4e8c7" /></linearGradient>
      <linearGradient id="car-paint" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fffef1" /><stop offset="1" stopColor="#ddd8c5" /></linearGradient>
      <filter id="car-shadow" x="-80%" y="-100%" width="260%" height="300%"><feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#352416" floodOpacity=".27" /></filter>
    </defs>
    <rect x="-2000" y="-2000" width="5400" height="4900" fill="#e9edda" />
    <path d="M0 0H820C920 120 840 260 955 365S1210 430 1400 500V900H0Z" fill="url(#sand)" />
    <g className="map-water">
      <path d="M0 485C120 415 165 565 265 595S400 705 520 730 670 850 760 900H0Z" fill="url(#water)" />
      <path d="M0 472C120 402 175 550 275 583S410 694 530 718 680 840 772 900" fill="none" stroke="#fbf7e9" strokeWidth="7" />
      <path d="M0 504C120 440 150 580 250 612S380 720 500 747 650 865 725 900M0 555C110 490 130 625 220 665S340 760 455 795" fill="none" stroke="#74a9b6" strokeOpacity=".35" strokeWidth="1.5" />
    </g>
    <g fill="none" stroke="#a3926b" strokeWidth="1" opacity=".35">
      <path d="M320 0C260 80 360 130 460 125S695 160 770 295 765 570 970 595 1290 480 1400 590" />
      <path d="M345 0C285 80 380 110 470 107S710 145 790 282 795 545 975 572 1295 455 1400 565" />
      <path d="M370 0C310 78 400 90 480 89S730 125 810 269 825 520 980 549 1300 430 1400 540" />
      <path d="M395 0C340 70 420 70 490 71S750 105 830 256 855 495 985 526 1300 405 1400 515" />
      <path d="M40 900C200 795 370 880 500 690S570 410 730 530 890 730 1060 770 1250 760 1400 875" />
      <path d="M70 900C220 815 380 900 525 704S590 440 735 555 890 750 1060 793 1250 785 1370 900" />
      <path d="M100 900C240 835 395 920 550 718S610 470 740 580 890 770 1060 816 1240 810 1340 900" />
      <path d="M0 30C70 80 15 135 50 250S170 330 80 410M0 70C40 90-10 140 20 260S140 340 50 410" />
    </g>
    <rect width="1400" height="900" fill="url(#map-grid)" />
    <g className="map-dunes" fill="none" strokeLinecap="round">
      <path d="M475 290Q540 225 595 290M490 306Q546 255 585 308M510 321Q550 284 575 322" stroke="#bb9a66" strokeWidth="1.5" opacity=".55" />
      <path d="M745 680Q780 620 820 675M758 694Q785 651 810 691" stroke="#bb9a66" strokeWidth="1.5" opacity=".55" />
    </g>
    <g className="map-mountains" strokeLinejoin="round">
      <path d="M1050 30 1105-65 1170 30Z" fill="#8b9272" /><path d="M1105-65 1170 30H1115Z" fill="#6b7c66" />
      <path d="M1160 65 1230-45 1310 65Z" fill="#a0a58b" /><path d="M1230-45 1310 65H1240Z" fill="#6f826b" />
      <path d="M1230-45 1200 4 1220-4 1240 10 1250-18Z" fill="#f5f2df" />
    </g>
    <g>{trees.map(([x,y,scale],i)=><Tree key={i} x={x} y={y} scale={scale} />)}</g>
    <g fill="#746649" fontFamily="monospace" fontSize="11" letterSpacing="3">
      <text x="65" y="800" transform="rotate(27 65 800)" fill="#578a99">THE LONG WAY HOME</text>
      <text x="460" y="345">TAKE THE SCENIC ROUTE</text>
      <text x="1090" y="790">NO WRONG TURNS</text>
    </g>
    <path d={ROAD} fill="none" stroke="#f7f2df" strokeWidth="67" strokeLinecap="round" />
    <path d={ROAD} fill="none" stroke="#c4b799" strokeWidth="56" strokeLinecap="round" />
    <path d={ROAD} fill="none" stroke="#68675c" strokeWidth="47" strokeLinecap="round" />
    <path d={ROAD} fill="none" stroke="#f8efd1" strokeWidth="1.6" strokeDasharray="11 12" opacity=".7" />
    <path data-road-trail d={ROAD} fill="none" stroke="#dff3a0" strokeWidth="3" strokeLinecap="round" />
    <g stroke="#e9f4c8" strokeWidth="3">
      <circle cx="120" cy="740" r="10" fill="#0054d8" />
      <circle cx="410" cy="545" r="10" fill="#0054d8" />
      <circle cx="680" cy="360" r="10" fill="#0054d8" />
      <circle cx="1290" cy="120" r="10" fill="#0054d8" />
    </g>
    <g className="map-labels" fill="#352416" fontFamily="Arial,sans-serif">
      <text x="66" y="795" fontSize="14" fontWeight="bold">THE DEPARTURE</text>
      <text x="450" y="565" fontSize="14" fontWeight="bold">SLOW MORNINGS</text>
      <text x="693" y="326" fontSize="14" fontWeight="bold">A LITTLE DETOUR</text>
      <text x="1165" y="175" fontSize="14" fontWeight="bold">SOMEWHERE NEW</text>
    </g>
    <g data-car transform="translate(120 740) rotate(-90)" filter="url(#car-shadow)">
      <rect x="-28" y="-22" width="15" height="8" rx="3" fill="#292b29" /><rect x="17" y="-22" width="15" height="8" rx="3" fill="#292b29" />
      <rect x="-28" y="14" width="15" height="8" rx="3" fill="#292b29" /><rect x="17" y="14" width="15" height="8" rx="3" fill="#292b29" />
      <rect x="-38" y="-17" width="77" height="34" rx="8" fill="url(#car-paint)" stroke="#b5ac92" strokeWidth="1" />
      <rect x="-35" y="-16" width="9" height="32" rx="3" fill="#ece7d5" />
      <path d="M24-15 30-11V11L24 15Z" fill="#597c83" /><path d="M-19-16H19L16-12H-19ZM-19 16H19L16 12H-19Z" fill="#597c83" />
      <rect x="-21" y="-11" width="41" height="22" rx="3" fill="#fffdf0" stroke="#cdc5ae" />
      <path d="M-13-8V8M-8-8V8M-3-8V8" stroke="#d2ccb9" />
      <rect x="-11" y="-8" width="23" height="16" rx="4" fill="#df7c3c" stroke="#aa5f30" />
      <path d="M-5-8V8M6-8V8" stroke="#f8e4b8" strokeWidth="2.5" />
      <rect x="35" y="-12" width="4" height="7" rx="1" fill="#fff5b6" /><rect x="35" y="5" width="4" height="7" rx="1" fill="#fff5b6" />
      <rect x="-39" y="-12" width="3" height="6" rx="1" fill="#b75338" /><rect x="-39" y="6" width="3" height="6" rx="1" fill="#b75338" />
      <path d="M24-19H29M24 19H29" stroke="#ded9c9" strokeWidth="4" strokeLinecap="round" />
    </g>
    <rect width="1400" height="900" fill="url(#map-grain)" pointerEvents="none" />
  </svg>;
}
