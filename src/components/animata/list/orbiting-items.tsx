import React from "react";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export const testOrbitingItems = [
  <Icons.gitHub key="github" className="h-6 w-6" />,
  <Icons.twitter key="twitter" className="h-6 w-6" />,
  <Icons.react key="yarn" className="h-6 w-6" />,
  <Icons.tailwind key="tailwind" className="h-6 w-6" />,
  <Icons.framerMotion key="framer" className="h-6 w-6" />,
  <Icons.apple key="apple" className="h-6 w-6" />,
];

interface OrbitingItemsProps {
  pauseOnHover?: boolean;
  backgroundClassName?: string;
  containerClassName?: string;
  className?: string;
  items?: React.ReactNode[];
}

export default function OrbitingItems({
  pauseOnHover,
  backgroundClassName,
  containerClassName,
  className,
  items = testOrbitingItems,
}: OrbitingItemsProps) {
  const orbitConfigs = React.useMemo(() => [
    { radius: 80, duration: 16, delay: -Math.random() * 16 },
    { radius: 120, duration: 20, delay: -Math.random() * 20 },
    { radius: 160, duration: 24, delay: -Math.random() * 24 },
    { radius: 200, duration: 28, delay: -Math.random() * 28 },
    { radius: 240, duration: 32, delay: -Math.random() * 32 },
    { radius: 280, duration: 36, delay: -Math.random() * 36 },
  ], []);

  return (
    <div
      className={cn(
        "group flex items-center justify-center min-h-screen relative",
        containerClassName,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#030637_30%,#10439F_100%)]",
          backgroundClassName,
        )}
      />

      <div
        className={cn("relative flex items-center justify-center", className)}
        style={{ width: '700px', height: '700px' }}
      >
        {/* Center element */}
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-2xl z-20">
          <div className="text-white text-3xl font-bold">⚡</div>
        </div>

        {/* Orbit paths */}
        {orbitConfigs.slice(0, items.length).map((config, index) => (
          <div
            key={`path-${index}`}
            className="absolute rounded-full border border-gray-600/30"
            style={{
              width: `${config.radius * 2}px`,
              height: `${config.radius * 2}px`,
            }}
          />
        ))}

        {/* Orbiting items */}
        {items.map((item, index) => {
          const config = orbitConfigs[index];
          return (
            <div
              key={index}
              className={cn("absolute", {
                "group-hover:[animation-play-state:paused]": pauseOnHover,
              })}
              style={{
                left: '50%',
                top: '50%',
                animation: `orbit-swing ${config.duration}s ease-in-out infinite`,
                animationDelay: `${config.delay}s`,
              }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl"
                style={{
                  position: 'absolute',
                  left: `${config.radius}px`,
                  top: '0',
                  transform: 'translate(-50%, -50%)',
                  animation: `orbit-swing ${config.duration}s ease-in-out infinite reverse`,
                  animationDelay: `${config.delay}s`,
                }}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
