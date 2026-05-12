export default function SunIcon({
  className = "",
  size = 80,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
    >
      <circle cx="50" cy="50" r="22" fill="currentColor" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        return (
          <rect
            key={i}
            x="48.5"
            y="6"
            width="3"
            height="12"
            rx="1.5"
            fill="currentColor"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
    </svg>
  );
}

export function WaveDivider({
  flip = false,
  color = "#FBF8F1",
}: {
  flip?: boolean;
  color?: string;
}) {
  return (
    <div className={`wave-divider ${flip ? "rotate-180" : ""} h-16 lg:h-24`}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,80 C240,20 480,120 720,60 C960,0 1200,100 1440,40 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
