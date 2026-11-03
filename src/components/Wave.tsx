/** Decorative wave between a sand section and a sea section. */
export function Wave({ direction }: { direction: "down" | "up" }) {
  const d =
    direction === "down"
      ? "M0,50 C180,90 360,10 540,50 C720,90 900,10 1080,50 C1260,90 1350,40 1440,50 L1440,90 L0,90 Z"
      : "M0,0 L1440,0 L1440,40 C1260,0 1080,80 900,40 C720,0 540,80 360,40 C180,0 90,60 0,40 Z";
  return (
    <svg className="wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
      <path d={d} fill="var(--sea)" />
    </svg>
  );
}
