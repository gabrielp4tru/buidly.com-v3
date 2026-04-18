type Props = { size?: number };

export default function BuidlyMark({ size = 32 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#0a0a0a" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#00d4ff" strokeOpacity="0.3" />
      <path
        d="M10 8v16M10 16a5 5 0 1 1 0 .1"
        stroke="#00d4ff"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="16" cy="20" r="4" stroke="#fff" strokeWidth="2" fill="none" />
    </svg>
  );
}
