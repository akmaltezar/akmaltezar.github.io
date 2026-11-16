"use client";

import {
  motion,
  useTransform,
  type MotionValue,
} from "framer-motion";

type Glyph = "braces" | "brackets" | "slash" | "circle" | "square" | "triangle" | "plus" | "asterisk";

type ShapeConfig = {
  glyph: Glyph;
  top: string;
  left: string;
  size: number;
  travelX: number;
  travelY: number;
  travelRotate: number;
  driftX: number;
  driftY: number;
  spin: number;
  duration: number;
  delay: number;
  accent?: boolean;
  hideMobile?: boolean;
};

const SHAPES: readonly ShapeConfig[] = [
  {
    glyph: "braces",
    top: "15%",
    left: "5%",
    size: 128,
    travelX: -110,
    travelY: 70,
    travelRotate: -14,
    driftX: 16,
    driftY: 12,
    spin: 4,
    duration: 28,
    delay: 0,
    hideMobile: true,
  },
  {
    glyph: "circle",
    top: "66%",
    left: "9%",
    size: 76,
    travelX: 120,
    travelY: -60,
    travelRotate: 18,
    driftX: 14,
    driftY: 16,
    spin: 8,
    duration: 24,
    delay: 1.2,
  },
  {
    glyph: "plus",
    top: "20%",
    left: "84%",
    size: 40,
    travelX: -70,
    travelY: 90,
    travelRotate: 0,
    driftX: 10,
    driftY: 12,
    spin: 0,
    duration: 20,
    delay: 0.6,
    accent: true,
  },
  {
    glyph: "square",
    top: "72%",
    left: "79%",
    size: 66,
    travelX: 90,
    travelY: -80,
    travelRotate: 30,
    driftX: 18,
    driftY: 10,
    spin: 10,
    duration: 32,
    delay: 0.4,
  },
  {
    glyph: "asterisk",
    top: "42%",
    left: "52%",
    size: 54,
    travelX: -150,
    travelY: 40,
    travelRotate: 12,
    driftX: 12,
    driftY: 14,
    spin: 14,
    duration: 26,
    delay: 2,
  },
  {
    glyph: "brackets",
    top: "7%",
    left: "44%",
    size: 74,
    travelX: 80,
    travelY: -90,
    travelRotate: 8,
    driftX: 10,
    driftY: 10,
    spin: 3,
    duration: 30,
    delay: 1.5,
    hideMobile: true,
  },
  {
    glyph: "triangle",
    top: "57%",
    left: "92%",
    size: 58,
    travelX: -100,
    travelY: 110,
    travelRotate: -22,
    driftX: 12,
    driftY: 14,
    spin: 9,
    duration: 34,
    delay: 0.9,
    hideMobile: true,
  },
  {
    glyph: "slash",
    top: "36%",
    left: "18%",
    size: 46,
    travelX: 110,
    travelY: -40,
    travelRotate: 0,
    driftX: 8,
    driftY: 10,
    spin: 0,
    duration: 22,
    delay: 2.4,
    hideMobile: true,
  },
];

function GlyphMark({ glyph, size }: { glyph: Glyph; size: number }) {
  if (glyph === "braces" || glyph === "brackets" || glyph === "slash") {
    const text = glyph === "braces" ? "{ }" : glyph === "brackets" ? "[ ]" : "/";
    return (
      <span
        className="shape-glyph is-text"
        style={{ fontSize: glyph === "slash" ? size * 1.2 : size * 0.78 }}
        aria-hidden="true"
      >
        {text}
      </span>
    );
  }

  return (
    <svg
      className="shape-glyph"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      vectorEffect="non-scaling-stroke"
      aria-hidden="true"
    >
      {glyph === "circle" && <circle cx="50" cy="50" r="47" />}
      {glyph === "square" && (
        <rect x="7" y="7" width="86" height="86" transform="rotate(45 50 50)" />
      )}
      {glyph === "triangle" && <path d="M50 7 94 91H6L50 7Z" />}
      {glyph === "plus" && <path d="M50 4v92M4 50h92" />}
      {glyph === "asterisk" && <path d="M50 4v92M10 27l80 46M90 27 10 73" />}
    </svg>
  );
}

function Shape({
  config,
  progress,
  reduced,
}: {
  config: ShapeConfig;
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  const x = useTransform(progress, [0, 1], [-config.travelX / 2, config.travelX / 2]);
  const y = useTransform(progress, [0, 1], [-config.travelY / 2, config.travelY / 2]);
  const rotate = useTransform(
    progress,
    [0, 1],
    [-config.travelRotate / 2, config.travelRotate / 2],
  );

  return (
    <motion.div
      className={`shape${config.accent ? " is-accent" : ""}`}
      data-mobile={config.hideMobile ? "hide" : undefined}
      style={{
        top: config.top,
        left: config.left,
        x: reduced ? 0 : x,
        y: reduced ? 0 : y,
        rotate: reduced ? 0 : rotate,
      }}
    >
      <motion.div
        animate={
          reduced
            ? undefined
            : {
                x: [0, config.driftX, 0, -config.driftX * 0.6, 0],
                y: [0, config.driftY, 0, -config.driftY, 0],
                rotate: [0, config.spin, 0, -config.spin, 0],
              }
        }
        transition={
          reduced
            ? undefined
            : {
                duration: config.duration,
                delay: config.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        <GlyphMark glyph={config.glyph} size={config.size} />
      </motion.div>
    </motion.div>
  );
}

export function ShapeField({
  progress,
  reduced,
}: {
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  return (
    <div className="shapes" aria-hidden="true">
      {SHAPES.map((config) => (
        <Shape
          key={config.glyph}
          config={config}
          progress={progress}
          reduced={reduced}
        />
      ))}
    </div>
  );
}
