type Props = { size?: number };

export default function BuidlyMark({ size = 32 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="bmark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0d0d0d" />
          <stop offset="0.5" stopColor="#00d4ff" />
          <stop offset="1" stopColor="#c8ff00" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="36" height="36" rx="10" fill="url(#bmark)" />
      <path
        d="M13 11v18M13 20a5 5 0 1 1 0 0.1"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="20" cy="24" r="5" stroke="#fff" strokeWidth="3" fill="none" />
    </svg>
  );
}
